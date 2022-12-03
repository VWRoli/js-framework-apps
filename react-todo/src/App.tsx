import './App.css';
import { Route, Routes } from 'react-router-dom';
//Pages
import About from './pages/about';
import Home from './pages';
import PublicLayout from './layouts/PublicLayout';

function App() {
  return (
    <div className="App">
      <PublicLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </PublicLayout>
    </div>
  );
}

export default App;
