import React, { Component } from 'react';
import { Menu as SemanticMenu, Input, Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default class Menu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Router>
        <div>
          <SemanticMenu pointing>
            <SemanticMenu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
              <Link to="/web">Home</Link>
            </SemanticMenu.Item>
            <SemanticMenu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            >
              <Link to="/about">About</Link>
            </SemanticMenu.Item>
            <SemanticMenu.Item
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
            >
              <Link to="/contact">Contact</Link>
            </SemanticMenu.Item>
            <SemanticMenu.Menu position='right'>
              <SemanticMenu.Item>
                <Input icon='search' placeholder='Search...' />
              </SemanticMenu.Item>
            </SemanticMenu.Menu>
          </SemanticMenu>

          <Segment>
            <Routes>
              <Route path="/web" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Segment>
        </div>
      </Router>
    )
  }
}
