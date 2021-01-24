import { useState, useEffect } from 'react';
import swal from '@sweetalert/with-react';
import StarRatings from 'react-star-ratings';
import BookInfo from '../BookInfo/bookInfo';

const Row = ({ book, setCartBooks, cartBooks, idx, columsDisplay }) => {
  const [bookPresentInCart, setBookPresentInCart] = useState(false);
  useEffect(() => {
    if (cartBooks.includes(book)) {
      setBookPresentInCart(true);
    }
  }, [book, cartBooks]);
  function onAddToCart(book) {
    setCartBooks((books) => {
      const idx = books.indexOf(book);
      if (idx !== -1) {
        const bookToDelete = books[idx];
        return [...books.filter((book) => book.bookID !== bookToDelete.bookID)];
      }
      return [...books, book];
    });
  }

  return (
    <tr>
      <td className="s-no">{idx + 1}</td>
      <td
        className="title"
        onClick={() =>
          swal(<BookInfo book={book} />, {
            buttons: false,
          })
        }
      >
        {book.title}
      </td>
      {columsDisplay.includes('average_rating') ? (
        <td className="ratings">
          <StarRatings
            rating={book.average_rating}
            starRatedColor="red"
            numberOfStars={5}
            name="rating"
            starDimension="25px"
            starSpacing="15px"
          />
        </td>
      ) : null}
      {columsDisplay.includes('price') ? (
        <td className="price">{book.price}</td>
      ) : null}
      <td className="cart-btn">
        <i
          className={`fas fa-cart-plus ${
            bookPresentInCart ? 'added-cart' : ''
          }`}
          onClick={() => {
            onAddToCart(book);
            setBookPresentInCart((st) => !st);
          }}
        ></i>
      </td>
    </tr>
  );
};

export default Row;
