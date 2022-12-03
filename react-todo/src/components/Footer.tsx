import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
      <Button>
        <Link to="/about">About</Link>
      </Button>
    </Box>
  );
};

export default Footer;
