import React from 'react';
import './TodoListItem.css';
import { Todo, ToggleComplete } from './types';

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
}) => {
  return (
    <li>
      <label
        className={`container-checkbox ${
          todo.complete ? 'complete' : undefined
        }`}
      >
        <input
          style={{
            margin: '30px',
            height: '30px',
          }}
          type='checkbox'
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {todo.text}
        <span className='checkmark'></span>
      </label>
    </li>
  );
};
