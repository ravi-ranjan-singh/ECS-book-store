import Row from './row';
import SortTH from './sortTH';
import './booksTable.css';
const BooksTable = ({
  books,
  setCartBooks,
  cartBooks,
  sortColumn,
  sortOrder,
  onSort,
  columsDisplay,
}) => {
  return (
    <table className="striped">
      <thead>
        <tr>
          <th className="s-no">S No.</th>
          <SortTH
            property={'title'}
            text={'Book Name'}
            sortColumn={sortColumn}
            sortOrder={sortOrder}
            onSort={onSort}
            c_name="title"
          />
          {columsDisplay.includes('average_rating') ? (
            <SortTH
              property={'average_rating'}
              text={'Ratings'}
              sortColumn={sortColumn}
              sortOrder={sortOrder}
              onSort={onSort}
              c_name="ratings"
            />
          ) : null}
          {columsDisplay.includes('price') ? (
            <SortTH
              property={'price'}
              text={'Price'}
              sortColumn={sortColumn}
              sortOrder={sortOrder}
              onSort={onSort}
              c_name="price"
            />
          ) : null}

          <th className="cart-btn"></th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, idx) => (
          <Row
            key={book.bookID}
            book={book}
            cartBooks={cartBooks}
            setCartBooks={setCartBooks}
            idx={idx}
            columsDisplay={columsDisplay}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
