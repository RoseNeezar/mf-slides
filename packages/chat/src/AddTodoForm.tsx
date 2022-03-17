import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AddTodo } from './types';

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form>
      <input
        style={{
          height: '85px',
          padding: '2px',
          borderRadius: '10px',
          marginRight: '15px',
          fontSize: '42px',
        }}
        type='text'
        value={newTodo}
        onChange={handleChange}
      />
      <button
        type='submit'
        style={{
          backgroundColor: 'blueviolet',
          color: 'white',
          padding: '10px',
          borderRadius: '10px',
          fontSize: '45px',
        }}
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
};
