import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFoodToCustomer, deleteCustomer } from '../features/customerSlice';

const CustomerCard = ({id, name, food, index}) => {

  const [foodValue, setFoodValue] = useState('');
  const dispatch = useDispatch();

  const handleAddFood = () => {
    dispatch(addFoodToCustomer({id, food: foodValue}));
    setFoodValue('');
  }

  const handleDeleteCustomer = () => {
    dispatch(deleteCustomer(index));
  }

  return(
    <div className='customer-food-card-container'>
      <div className='customer-food-card-header'>
        <h3>{name}</h3>
        <button onClick={handleDeleteCustomer}>🗑️</button>
      </div>
      <div className='customer-foods-container'>
        <div>
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div>
          <input value={foodValue} onChange={e => setFoodValue(e.target.value)} />
          <button onClick={handleAddFood}>Add</button>
        </div>
      </div>
    </div>
  )
};

export default CustomerCard;
