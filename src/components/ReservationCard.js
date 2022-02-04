import React from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/customerSlice';
import { deleteReservation } from '../features/reservationSlice';
import { v4 as uuid } from 'uuid';

const ReservationCard = ({name, index}) => {

  const dispatch = useDispatch();

  const handleDeleteReservation = () => {
    dispatch(deleteReservation(index));
  }

  const handleAddCustomer = () => {
    dispatch(addCustomer({
      id: uuid(),
      name,
      food: []
    }))
  }

  const handleDispatches = () => {
    handleDeleteReservation();
    handleAddCustomer();
  }

  return(
    <div className='reservation-card-container' onClick={handleDispatches}>
      <p>{name}</p>
    </div>
  )
};

export default ReservationCard;
