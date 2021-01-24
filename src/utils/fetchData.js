import axios from 'axios';

export const getData = async (setBooks, setSaveDB, setLoading) => {
  const { data } = await axios.get(
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json'
  );
  const finalData = data.filter((d) => {
    if (d.title.length < 200 && !isNaN(d.average_rating) && !isNaN(d.price))
      return true;
    return false;
  });
  setBooks(() => {
    setSaveDB(true);
    setLoading(false);
    return finalData;
  });
};

export const saveDataToDB = (booksData) => {
  const dbRequest = indexedDB.open('BookStoreApp', 1);
  dbRequest.onupgradeneeded = async function (event) {
    const db = event.target.result;
    const objStore = db.createObjectStore('books', { keyPath: 'bookID' });
    objStore.transaction.oncomplete = function (event) {
      const bookStore = db
        .transaction('books', 'readwrite')
        .objectStore('books');
      booksData.forEach((data) => {
        bookStore.add(data);
      });
    };
  };
};

export const firstLoad = () => {
  if (!localStorage.getItem('firstLoad')) return true;
  return false;
};

export const setFirstLoad = () => {
  localStorage.setItem('firstLoad', 'firstLoad');
};

export const getDataFromDB = (setBooks, setLoading) => {
  const dbRequest = indexedDB.open('BookStoreApp', 1);
  dbRequest.onsuccess = function () {
    const db = dbRequest.result;
    const transaction = db.transaction('books', 'readonly');
    const objectStore = transaction.objectStore('books');

    if ('getAll' in objectStore) {
      objectStore.getAll().onsuccess = function (event) {
        setBooks(event.target.result);
        setLoading(false);
      };
    } else {
      const timestamps = [];
      objectStore.openCursor().onsuccess = function (event) {
        const cursor = event.target.result;
        if (cursor) {
          timestamps.push(cursor.value);
          cursor.continue();
        } else {
          console.log(timestamps);
        }
      };
    }
  };
};
