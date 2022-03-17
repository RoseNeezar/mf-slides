import React, { useState } from 'react';
import { initialTodos } from './initialTodos';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import { Todo, ToggleComplete, AddTodo } from './types';

const App: React.FC<{ title?: string }> = ({ title }) => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== '' &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          marginTop: '20px',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#33658A',
          }}
        >
          <AddTodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleComplete={toggleComplete} />
        </div>
        <h1
          style={{
            marginTop: '130px',
            color: 'gray',
          }}
        >
          {title}
        </h1>
      </div>
    </React.Fragment>
  );
};

export default App;
