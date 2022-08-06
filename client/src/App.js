// import logo from './logo.svg';
import './App.css';
import  Header  from './components/Header/Header';
import HomePage  from './components/Home/Home';
import Footer from './components/Footer/Footer';
// import LoginPage from './components/Login/Login';

function App() {
  return (
    <>
    <Header/>
    <HomePage>
       {/* <LoginPage></LoginPage> */}
    </HomePage>
    <Footer/>
    </>
  );
}

export default App;
