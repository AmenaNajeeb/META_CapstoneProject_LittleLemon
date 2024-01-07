import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import BookingForm from './components/BookingForm';

function App() {
  return (
   <>
   <BrowserRouter>
    <Nav />
    {/* <Header />
    <BookingForm /> */}
    <Main />
    {/* <Footer /> */}
    </BrowserRouter>
   </>
  );
}

export default App;
