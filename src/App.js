import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import './components/NavBar';
import NavBar from './components/NavBar';
import Cocktails from './containers/Cocktails';
import Home from './containers/Home';
import RumList from './containers/RumList';
import GinList from './containers/GinList';
import VodkaList from './containers/VodkaList';
import TequilaList from './containers/TequilaList';
import BourbonList from './containers/BourbonList';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div> 
          <NavBar/>
          
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/rum' component={RumList}></Route>
            <Route exact path='/gin' component={GinList}></Route>
            <Route exact path='/vodka' component={VodkaList}></Route>
            <Route exact path='/tequila' component={TequilaList}></Route>
            <Route exact path='/bourbon' component={BourbonList}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
