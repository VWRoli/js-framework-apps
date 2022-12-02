import { Box, Button } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
      <Button href="#text-buttons">About</Button>
    </Box>
  );
};

export default Footer;
