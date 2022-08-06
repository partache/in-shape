import {Routes, Route} from 'react-router-dom';
import './App.css';
import  Header  from './components/Header/Header';
import HomePage  from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { LoginPage } from './components/Login/Login';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={  <HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
