import './pagination.css';

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;

  return (
    <div className="pagination">
      <button
        onClick={() => {
          if (currentPage === 1) return;
          onPageChange(currentPage - 1);
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <div>
        {currentPage} of {pageCount}
      </div>
      <button
        onClick={() => {
          if (currentPage === pageCount) return;
          onPageChange(currentPage + 1);
        }}
      >
        <i className="fas fa-chevron-right disabled"></i>
      </button>
    </div>
  );
};

export default Pagination;
