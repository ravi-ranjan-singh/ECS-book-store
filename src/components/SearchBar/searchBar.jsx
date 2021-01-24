import './searchBar.css';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="input-field">
      <input
        id="icon_prefix"
        type="text"
        className="validate"
        onChange={onSearch}
      />
      <label htmlFor="icon_prefix" style={{ color: 'white' }}>
        Search Book
      </label>
    </div>
  );
};

export default SearchBar;
