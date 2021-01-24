import _ from 'lodash';

export const sort = (arr, order, sortColumn) => {
  if (sortColumn === 'title') {
    if (order) return _.orderBy(arr, ['title'], ['asc']);
    return _.orderBy(arr, ['title'], ['desc']);
  }
  return arr.sort(function (a, b) {
    if (order) {
      return parseInt(a[sortColumn]) - parseInt(b[sortColumn]);
    } else {
      return parseInt(b[sortColumn]) - parseInt(a[sortColumn]);
    }
  });
};

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

export const search = (items, query) => {
  if (query)
    return items.filter((item) => {
      return _.includes(
        item.title.toString().toLowerCase(),
        query.toLowerCase()
      );
    });
  return items;
};
