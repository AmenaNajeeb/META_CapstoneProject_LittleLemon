import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
// import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
// import BookingForm from './components/BookingForm';
import Menu from './components/Menu';

function App() {
  return (
   <>
   {/* <p>Nav</p> */}
   <BrowserRouter>
    <Nav />
    <Main />
    <Menu />
    <Footer />
    </BrowserRouter>
   </>
  );
}

export default App;
