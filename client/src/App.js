import React from 'react';
import { Router } from '@reach/router'
import Home from './views/Home'
import Create from './views/Create'
import Edit from './views/Edit'

function App() {
  return (
    <div className="container mt-5">
      <div className="col-4 mx-auto">
        <h1>Favorite Authors</h1>
        <Router>
          <Home path="/" />
          <Create path="/new" />
          <Edit path="/edit/:id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
