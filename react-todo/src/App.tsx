import './App.css';
import Header from './components/Header';
import Container from '@mui/material/Container';
import Form from './components/Form';
import Todo from './components/Todo';
import { fetchTodos } from './api';
import { useEffect, useState } from 'react';
import { TodoType } from './types';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    fetchTodos(setTodos);
  }, []);

  return (
    <div className="App">
      <Container
        maxWidth="sm"
        sx={{ border: '1px solid gray', borderRadius: '12px' }}
      >
        <Header />
        <Form />
        {todos.map((t) => (
          <Todo todo={t} key={t.id} />
        ))}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
