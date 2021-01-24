import './bookInfo.css';
const BookInfo = ({ book }) => {
  return (
    <div className="book-info">
      <h5>Book Information</h5>
      <div className="info">
        <h6>
          <strong>Name of Book:</strong> {book.title}
        </h6>
        <h6>
          <strong>Authors:</strong> {book.authors}
        </h6>
        <h6>
          <strong>No of Happy readers 😊 :</strong> {book.ratings_count}
        </h6>
        <h6>
          <strong>Rating:</strong> {book.average_rating}
        </h6>
        <h6>
          <strong>Price:</strong> {book.price}
        </h6>
        <h6>
          <strong>ISBN:</strong> {book.isbn}
        </h6>
      </div>
    </div>
  );
};

export default BookInfo;
