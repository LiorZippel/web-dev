import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import Labs from './components/Labs/index'
import Index from './components/tuiter'

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/fontawesome.css';
import './vendors/fontawesome/css/all.min.css';
import './styles/explore.css';



//import React from 'react';
import {BrowserRouter, Route, Routes, Link}
  from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/hello"
                   exact={true}
                   element={<HelloWorld/>}/>
            <Route path="/"
                   exact={true}
                   element={<Labs/>}/>
            <Route path="/tuiter"
                   exact={true}
                   element={<Index/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}


export default App;
