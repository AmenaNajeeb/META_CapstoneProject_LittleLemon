import React from 'react'
import BookingForm from './BookingForm'

function Booking(props) {
  return (
    <>
    <div className='confirm'>
    <h1 >Booking</h1>
    </div>
    <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm} />
    </>
  )
}

export default Booking