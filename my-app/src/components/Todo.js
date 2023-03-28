import React, { useState, useEffect } from 'react';
import store from '../store';
import styled from 'styled-components';

const Todo = () => {

const [newTodo, setNewTodo] = useState('');
const [todos, setTodos] = useState([]);

useEffect(() => {
  store.subscribe(() => syncStore())
}, []);

const syncStore = () => {
  setTodos(store.getState());
};

const handleChange = (event) => {
  setNewTodo(event.target.value);
};

const handleCreate = (event) => {
  setNewTodo('');
  store.dispatch({
    type: 'ADD_TODO',
    payload: {
      id: Math.random(),
      content: newTodo,
      done: false
    }
  })
};

const handleDone = (id) => {
  store.dispatch({
    type: 'SET_DONE',
    payload: id
});
};

const handleReset = () => {
  store.dispatch({ type: 'RESET_TODO' });
};

  return (
    <Wrapper>
      <NewTodo>
        <Input
          type="text"
          value={newTodo}
          onChange= {handleChange}
        />
        <Button
          onClick= {handleCreate}
        >
          Créer le todo
        </Button>
      </NewTodo>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          >
            {todo.content}
            <Button onClick={() => handleDone(todo.id)} >Fait</Button>
          </TodoItem>
        ))}
      </ul>
      <ResetButton onClick={handleReset}>Réinitialiser le Todo</ResetButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 48rem;
  background: #fff;
  padding: 1rem;
  border-radius: 6px;
`;
const NewTodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > * {
    margin: 0 0.5rem;
  }
`;  
const Input = styled.input`
  height: 40px;
  padding: 0 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;
const Button = styled.button`
  height: 40px;
  border: 0;
  background: #5352ed;
  color: #fff;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 6px;
  padding: 0 2rem;
  margin-left: 1rem;
`;
const ResetButton = styled(Button)`
  background: #ff4757;
  margin: 2rem 0;
`;
const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f5f5;
  color: ${props => props.todo.done ? '#ccc' : '#404040'};
  text-decoration: ${props => props.todo.done ? 'line-through' : 'initial'};
`;


export default Todo