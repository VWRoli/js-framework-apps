import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
      }}
    >
      <Typography>This is just a simple about page</Typography>
      <Button>
        <Link to="/">Home</Link>
      </Button>
    </Box>
  );
};

export default About;
