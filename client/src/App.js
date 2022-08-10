import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AuthPage from './components/Auth/Auth';
import Logout from './components/Auth/Logout';
import CreateItem from './components/CreateItem/CreateItem';
import Catalog from './components/Catalog/Catalog';

import * as itemService from './services/ProductService';
import { UserContext } from './contexts/userContext';
import { ItemContext } from './contexts/itemContext';
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  let navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [user, setUser] = useLocalStorage({});

  const userLogin = (userData) => {
    setUser(userData);
  };

  const userLogout = () => {
    setUser("{}");
  }

  const addNewItem = (itemData) => {

      setItems(state => [
        ...state,
        itemData,
      ]);

      navigate('/catalog');
  };

  useEffect(() => {
    itemService.getAll()
    .then(result => {
      setItems(result);
    });
  }, [])


  return (
    <UserContext.Provider value={{ user, userLogin, userLogout }}>
      <>
        <Header />
        <ItemContext.Provider value={{ items, addNewItem }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage authAction={'login'} />} />
            <Route path="/register" element={<AuthPage authAction={'register'} />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/catalog/create" element={<CreateItem/>} />
            <Route path="/catalog" element={<Catalog/>}/>
          </Routes>
        </ItemContext.Provider>
        <Footer />
      </>
    </UserContext.Provider>
  );
}

export default App;
