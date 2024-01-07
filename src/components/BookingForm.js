import React, { useState } from 'react'

function BookingForm(props) {
    const [date, setDate] = useState("")
    const [times, setTimes] = useState("")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.SubmitForm(e)
    }
    const handleChange =(e)=>{
        setDate(e)
        props.dispatch(e)
    }
  return (
    <>
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                    <label htmlFor="res-date">Choose date</label>
   <input id="res-date" value={date} onChange={(e)=>handleChange(e.target.value)} type="date" />
   </div>
   <div>
    <label htmlFor="res-time">Choose time</label>
   <select id="res-time" value={times} onChange={(e)=>setTimes(e.target.value)}>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   </div>
   <div>
   <label htmlFor="res-guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="res-guests" value={guests} onChange={(e)=>setGuests(e.target.value)}/>
   </div>
   <div>
   <label htmlFor="res-occasion">Occasion</label>
   <select id="res-occasion" value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   </div>
   <div className='btnReceive'>
   <input aria-label='onclick' type="submit" value="Make Your reservation" />
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
    </>
  )
}

export default BookingForm