import React from 'react';
import { TodoListItem } from './TodoListItem';
import { Todo, ToggleComplete } from './types';

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
}) => {
  return (
    <div
      style={{
        color: 'white',
        fontSize: '30px',
        marginTop: '40px',
      }}
    >
      <ul>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};
