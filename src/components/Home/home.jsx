import { useState } from 'react';
import { paginate, sort, search } from './../../utils/commons';
import Pagination from './../Pagination/pagination';
import BooksTable from './../BooksTable/booksTable';
import SearchBar from './../SearchBar/searchBar';
import Loader from './../Loader/loader';
import Selector from './../Selector/selector';

import './home.css';

const Home = ({
  books: totalBooks,
  setCartBooks,
  cartBooks,
  loading,
  columsDisplay,
  setColumsDisplay,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState('title');
  const [sortOrder, setSortOrder] = useState(true);
  const [query, setQuery] = useState('');

  const handlePageChange = (page) => setCurrentPage(page);
  const handleSearch = (e) => setQuery(e.target.value);
  const handleSorting = (sortCol, sortOrd) => {
    if (sortColumn !== sortCol) setSortOrder(true);
    else setSortOrder(sortOrd);
    setSortColumn(sortCol);
  };

  const filtered = search(totalBooks, query);
  const sorted = sort(filtered, sortOrder, sortColumn);
  const currPageBooks = paginate(sorted, currentPage, 50);

  return (
    <div className="home">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="helpers">
            <Selector setColumsDisplay={setColumsDisplay} />
            <SearchBar onSearch={handleSearch} />
            <Pagination
              itemsCount={sorted.length}
              pageSize={50}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
          <BooksTable
            books={currPageBooks}
            setCartBooks={setCartBooks}
            cartBooks={cartBooks}
            sortOrder={sortOrder}
            sortColumn={sortColumn}
            onSort={handleSorting}
            columsDisplay={columsDisplay}
          />
        </>
      )}
    </div>
  );
};

export default Home;
