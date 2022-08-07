import {Routes, Route} from 'react-router-dom';

import './App.css';
import  Header  from './components/Header/Header';
import HomePage  from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { AuthPage } from './components/Auth/Auth';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={  <HomePage/>}/>
      <Route path="/login" element={<AuthPage authAction={'login'}/>}/>
      <Route path="/register" element={<AuthPage authAction={'register'}/>}/>
      {/* <Route path="/create" element={<CreateItem/>}/>
      <Route path="/catalog" element={<Catalog/>}/> */}
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
