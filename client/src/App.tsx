import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import {Navbar} from './components/Navbar'
import {LoginForm} from './components/LoginForm'

function App() {
  return (
    <div className="App">
        <Navbar />
        
        <div className="container">
            <LoginForm />
        </div>
        
    </div>
  );
}

export default App;
