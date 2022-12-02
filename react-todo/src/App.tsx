import { Box } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Container from '@mui/material/Container';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Container
        maxWidth="sm"
        sx={{ border: '1px solid gray', borderRadius: '12px' }}
      >
        <Header />
        <Form />
      </Container>
    </div>
  );
}

export default App;
