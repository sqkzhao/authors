import React from 'react';
import { Router } from '@reach/router'
import Home from './views/Home'
import Create from './views/Create'
import Edit from './views/Edit'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <Home path="/" />
        <Create path="/new" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
