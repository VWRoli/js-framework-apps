import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<Props> = (props) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Todo React app
      </Typography>
      <Button
        variant="contained"
        color={props.open ? 'error' : 'primary'}
        onClick={() => props.setOpen((prev) => !prev)}
      >
        {props.open ? 'Close' : 'Open'}
      </Button>
    </Box>
  );
};

export default Header;
