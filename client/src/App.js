import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AuthPage from './components/Auth/Auth';
import Logout from './components/Auth/Logout';
import { UserContext } from './contexts/userContext';

import { useLocalStorage} from './hooks/useLocalStorage'

function App() {
  const [user, setUser] = useLocalStorage({});

  const userLogin = (userData) => {
    setUser(userData);
  };

  const userLogout = () => {
    setUser({});
  }

  return (
    <UserContext.Provider value={{user, userLogin, userLogout}}>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage authAction={'login'} />} />
        <Route path="/register" element={<AuthPage authAction={'register'} />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/create" element={<CreateItem/>}/>
      <Route path="/catalog" element={<Catalog/>}/> */}
      </Routes>
      <Footer />
    </>
    </UserContext.Provider>
  );
}

export default App;
