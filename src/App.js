// import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import Labs from './components/Labs/index'
import Index from './components/tuiter'

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/fontawesome.css';
import './vendors/fontawesome/css/all.min.css';
import './styles/explore.css';
import HomeScreen from "./components/tuiter/homeScreen";
// import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import ExploreComponent
  from "./components/tuiter/ExploreScreen/ExploreComponent";

//import React from 'react';
import {BrowserRouter, Route, Routes}
  from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes className="container">
          <Route path="/">
            <Route path=""
                   exact={true}
                   element={<HelloWorld/>}/>
            <Route path="labs"
                   exact={true}
                   element={<Labs/>}/>
            <Route path="tuiter"
                   element={<Index/>}>
              <Route index
                     element={<HomeScreen/>}/>
              <Route path="explore"
                     element={<ExploreComponent/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  )
      ;
}

export default App;
