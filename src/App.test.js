import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Booking from './components/Booking';
import BookingForm from './components/BookingForm';

// test('renders text Nav', () => {
//   render(<App />);
//   const linkElement = screen.getByText("Nav");
//   expect(linkElement).toBeInTheDocument();
// });

test('renders text Booking', () => {
  render(<Booking />);
  const linkElement = screen.getByText("Booking");
  expect(linkElement).toBeInTheDocument();
});

