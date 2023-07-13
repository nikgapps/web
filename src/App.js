import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Menu pointing secondary>
        <Menu.Item
          name='home'
          active={window.location.pathname === '/'}
        >
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item
          name='about'
          active={window.location.pathname === '/about'}
        >
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item
          name='contact'
          active={window.location.pathname === '/contact'}
        >
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
