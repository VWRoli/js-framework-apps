import { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import { fetchTodos } from '../api';
import { TodoType } from '../types';
//Components
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
import Todo from '../components/Todo';
import { Box } from '@mui/material';

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  useEffect(() => {
    fetchTodos(setTodos);
  }, []);

  return (
    <Box>
      <Header />
      <Form />
      {todos.map((t) => (
        <Todo todo={t} key={t.id} />
      ))}
    </Box>
  );
};

export default Home;
