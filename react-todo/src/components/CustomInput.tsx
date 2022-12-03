import { Box } from '@mui/system';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';

interface Props {
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}
const CustomInput: React.FC<Props> = (props) => {
  return (
    <Box>
      <FormControl variant="outlined" fullWidth sx={{ my: 2 }}>
        <InputLabel htmlFor={props.label.toLowerCase()}>
          {props.label}
        </InputLabel>
        <OutlinedInput
          id={props.label.toLowerCase()}
          value={props.value}
          onChange={props.handleChange}
        />
      </FormControl>
    </Box>
  );
};

export default CustomInput;
