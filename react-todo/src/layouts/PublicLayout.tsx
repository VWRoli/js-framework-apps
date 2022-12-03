import { Container } from '@mui/material';
import React from 'react';
//components
import Footer from '../components/Footer';
import Content from './Content';

interface Props {
  children: React.ReactNode;
}
const PublicLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container
      maxWidth="sm"
      sx={{ border: '1px solid gray', borderRadius: '12px' }}
    >
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default PublicLayout;
