import { Box } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
  return <Box sx={{ minHeight: '50vh' }}>{children}</Box>;
};

export default Content;
