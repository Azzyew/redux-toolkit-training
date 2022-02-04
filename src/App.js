import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomerCard from './components/CustomerCard';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice';
import './App.css';

function App() {

  const reservations = useSelector((state) => state.reservation.value);
  const customers = useSelector((state) => state.customer.value);

  const [reservationName, setReservationName] = useState('');
  const dispatch = useDispatch();

  const handleAddReservation = () => {
    dispatch(addReservation(reservationName));
    setReservationName('');
  }
  
  return (
    <div className="App">
      <div className='container'>
        <div className='reservation-container'>
          <div className='reservation-content'>
            <h3>Reservations</h3>
            {reservations.map((name, index) => {
              return <ReservationCard name={name} index={index} />;
            })}
          </div>

          <div className='reservation-input-container'>
            <input value={reservationName} onChange={e => setReservationName(e.target.value)} />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>

        <div className='customer-container'>
          {customers.map((customer, index) => {
            return (
              <CustomerCard
                id={customer.id}
                name={customer.name}
                food={customer.food}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
  
export default App;