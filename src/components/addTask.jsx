import React from 'react';
import './addTask.css';
import Button from './Button';
const addTask = () => {
  return (
  <div className='add-task-container'>
    
        <input className='add-task-input' type="text" />;
        <Button>Adicionar</Button>

        </div>
        );
};
 
export default addTask ;