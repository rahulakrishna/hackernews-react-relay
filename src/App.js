import React, { Component } from 'react';
import './App.css';
import LinkListPage from './components/LinkListPage';
import Header from './components/Header';
import CreateLink from './components/CreateLink';
import { Switch, Route } from 'react-router-dom';

import styled from 'styled-components';


const Navbar = styled.div`
  width: 100%;
  padding: 20px;
  background: violet;
  color: white;

`;

class App extends Component {
  render() {
    return (
      <div className='center w85'>
      <Header />
      <div className='ph3 pv1 background-gray'>
        <Switch>
          <Route exact path='/' component={LinkListPage}/>
          <Route exact path='/create' component={CreateLink}/>
         </Switch>
      </div>
    </div>
    );
  }
}

export default App;
