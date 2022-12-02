import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Todo React app
      </Typography>
      <Button variant="contained">Close</Button>
    </Box>
  );
};

export default Header;
