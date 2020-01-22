import React from 'react';
import  { BrowserRouter, Switch, Route } from 'react-router-dom'
import Root from './Components/Root'
import Home from './Components/Home'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Root}>
          <Route path="/home" component={Home}></Route>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
