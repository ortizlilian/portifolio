import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>

      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />          
          <Route path='/contact' element={<Contact />} />        
          <Route path='/projects' element={<Projects />} />          
        </Routes>          
      </div>

    </Router>
  );
}

export default App;
