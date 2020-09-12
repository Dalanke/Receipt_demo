import React from 'react';
import './App.css';

import OrderHistory from './OrderHistory/OrderHistory.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/" exact component={OrderHistory}></Route>
        </Switch>
      </header>
    </div>
    </Router>
    
  );
}

export default App;
