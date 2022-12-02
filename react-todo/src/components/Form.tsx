import { useState } from 'react';
import { Box } from '@mui/system';
import CustomInput from './CustomInput';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const Form = () => {
  const [task, setTask] = useState('');
  return (
    <Box component="form" sx={{ pb: 2 }}>
      <CustomInput label="Task" value={task} handleChange={() => {}} />

      <FormGroup sx={{ flexDirection: 'row', justifyContent: 'center' }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Completed"
          labelPlacement="start"
        />
      </FormGroup>
      <Button variant="contained" fullWidth>
        Save Task
      </Button>
    </Box>
  );
};

export default Form;
