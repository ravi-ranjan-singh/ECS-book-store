import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import M from 'materialize-css';
import {
  getData,
  saveDataToDB,
  firstLoad,
  setFirstLoad,
  getDataFromDB,
} from './utils/fetchData';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Cart from './components/Cart/cart';

function App() {
  const [books, setBooks] = useState([]);
  const [cartBooks, setCartBooks] = useState([]);
  const [saveDB, setSaveDB] = useState(false);
  const [loading, setLoading] = useState([true]);
  const [columsDisplay, setColumsDisplay] = useState([
    'average_rating',
    'price',
  ]);
  useEffect(() => {
    M.AutoInit();
    if (firstLoad()) {
      getData(setBooks, setSaveDB, setLoading);
      setFirstLoad();
    } else getDataFromDB(setBooks, setLoading);
  }, []);
  useEffect(() => {
    if (saveDB) {
      saveDataToDB(books);
    }
  }, [saveDB, books]);
  useEffect(() => {
    console.log(columsDisplay);
  }, [columsDisplay]);
  return (
    <div className="App">
      <Navbar itemCount={cartBooks.length} />

      <Switch>
        <Route
          path="/cart"
          render={(props) => (
            <Cart
              cartBooks={cartBooks}
              setCartBooks={setCartBooks}
              {...props}
            />
          )}
        />
        <Route
          path="/"
          render={(props) => (
            <Home
              books={books}
              setCartBooks={setCartBooks}
              {...props}
              cartBooks={cartBooks}
              loading={loading}
              columsDisplay={columsDisplay}
              setColumsDisplay={setColumsDisplay}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
