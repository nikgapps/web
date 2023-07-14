import React, { Component } from 'react';
import { Menu as SemanticMenu, Input, Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default class Menu extends Component {
  state = { activeItem: 'home' }

  render() {
    const { activeItem } = this.state

    return (
      <Router>
        <div>
          <SemanticMenu pointing>
            <MenuItem name='home' activeItem={activeItem} setActiveItem={this.setActiveItem} />
            <MenuItem name='about' activeItem={activeItem} setActiveItem={this.setActiveItem} />
            <MenuItem name='contact' activeItem={activeItem} setActiveItem={this.setActiveItem} />
            <SemanticMenu.Menu position='right'>
              <SemanticMenu.Item>
                <Input icon='search' placeholder='Search...' />
              </SemanticMenu.Item>
            </SemanticMenu.Menu>
          </SemanticMenu>

          <Segment>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Segment>
        </div>
      </Router>
    )
  }

  setActiveItem = (itemName) => {
    this.setState({ activeItem: itemName });
  }
}

function MenuItem({ name, activeItem, setActiveItem }) {
  let navigate = useNavigate();

  function handleItemClick() {
    setActiveItem(name);
    navigate('/' + name);
  }

  return (
    <SemanticMenu.Item
      name={name}
      active={activeItem === name}
      onClick={handleItemClick}
    />
  )
}
