import { useEffect, useState } from 'react';
import { fetchTodos } from '../api';
import { TodoType } from '../types';
//Components
import Form from '../components/Form';
import Header from '../components/Header';
import Todo from '../components/Todo';
import { Box } from '@mui/material';

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    fetchTodos(setTodos);
  }, []);

  return (
    <Box>
      <Header open={open} setOpen={setOpen} />
      {open && <Form setTodos={setTodos} />}

      {todos.map((t) => (
        <Todo todo={t} key={t.id} />
      ))}
    </Box>
  );
};

export default Home;
