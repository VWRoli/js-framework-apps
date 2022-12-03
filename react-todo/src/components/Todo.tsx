import { CardContent, IconButton, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { TodoType } from '../types';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useState } from 'react';
import { FormProps } from './Form';
import { deleteTodo, updateTodo } from '../api';

interface Props extends FormProps {
  todo: TodoType;
}
const Todo: React.FC<Props> = (props) => {
  const [checked, setChecked] = useState(props.todo.completed);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    const updatedTodo = {
      ...props.todo,
      completed: event.target.checked,
    };
    updateTodo(props.todo.id, updatedTodo, props.setTodos);
  };
  return (
    <Card
      sx={{
        my: 2,
        bgcolor: '#f5f5f5',
      }}
    >
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox checked={checked} onChange={handleChange} />
          <Typography>{props.todo.title}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            aria-label="delete"
            sx={{ color: red[500] }}
            onClick={() => deleteTodo(props.todo.id, props.setTodos)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Todo;
