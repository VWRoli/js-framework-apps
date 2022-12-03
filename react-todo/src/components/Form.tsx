import { useState } from 'react';
import { Box } from '@mui/system';
import CustomInput from './CustomInput';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { createTodo } from '../api';
import { TodoType } from '../types';

export interface FormProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}
const Form: React.FC<FormProps> = (props) => {
  const [task, setTask] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTask(event.target.value);
  };
  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompleted(event.target.checked);
  };

  const handleSave = () => {
    const newTodo = {
      userId: 1,
      id: 2,
      title: task,
      completed,
    };
    createTodo(newTodo, props.setTodos);
  };
  return (
    <Box component="form" sx={{ pb: 2 }}>
      <CustomInput label="Task" value={task} handleChange={handleChange} />

      <FormGroup sx={{ flexDirection: 'row', justifyContent: 'center' }}>
        <FormControlLabel
          control={<Checkbox checked={completed} onChange={handleChecked} />}
          label="Completed"
          labelPlacement="start"
        />
      </FormGroup>
      <Button variant="contained" fullWidth onClick={handleSave}>
        Save Task
      </Button>
    </Box>
  );
};

export default Form;
