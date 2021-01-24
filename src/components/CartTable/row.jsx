const Row = ({ cartBook, setCartBooks, idx }) => {
  console.log(cartBook);
  const removeFromCart = function (book) {
    setCartBooks((c_books) => {
      return c_books.filter((b) => b.bookID !== book.bookID);
    });
  };
  return (
    <tr>
      <td className="s-no">{idx + 1}</td>
      <td className="title">{cartBook.title}</td>
      <td className="price">{cartBook.price}</td>
      <td className="cart-btn">
        <i
          className="fas fa-times-circle"
          onClick={() => {
            removeFromCart(cartBook);
          }}
        ></i>
      </td>
    </tr>
  );
};

export default Row;
