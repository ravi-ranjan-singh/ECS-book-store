const SortTH = ({ text, property, sortColumn, sortOrder, onSort, c_name }) => {
  return (
    <th onClick={() => onSort(property, !sortOrder)} className={c_name}>
      {text}
      {sortColumn === property ? (
        <i className={`fas fa-chevron-${sortOrder ? 'up' : 'down'}`}></i>
      ) : null}
    </th>
  );
};

export default SortTH;
