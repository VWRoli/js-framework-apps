import { CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { TodoType } from '../types';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { red } from '@mui/material/colors';

interface Props {
  todo: TodoType;
}
const Todo: React.FC<Props> = (props) => {
  return (
    <Card sx={{ my: 2, bgcolor: '#f5f5f5' }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>{props.todo.title}</Typography>
        <CloseOutlinedIcon sx={{ color: red[500] }} />
      </CardContent>
    </Card>
  );
};

export default Todo;
