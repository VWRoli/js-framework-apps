import { CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { TodoType } from '../types';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';

interface Props {
  todo: TodoType;
}
const Todo: React.FC<Props> = (props) => {
  return (
    <Card sx={{ my: 2, bgcolor: '#f5f5f5' }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>{props.todo.title}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <EditOutlinedIcon sx={{ color: 'primary.main', cursor: 'pointer' }} />
          <CloseOutlinedIcon sx={{ color: red[500], cursor: 'pointer' }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Todo;
