import Row from './row';
import './cartTable.css';
const CartTable = ({ cartBooks, setCartBooks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="s-no">S No.</th>
          <th className="title">Book Title</th>
          <th className="title">Price</th>
          <th className="cart-btn"></th>
        </tr>
      </thead>
      <tbody>
        {cartBooks.map((book, idx) => (
          <Row
            key={book.bookID}
            cartBook={book}
            setCartBooks={setCartBooks}
            idx={idx}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
