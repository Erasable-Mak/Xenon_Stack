/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Errorpage from './components/Errorpage';
//main js file
const App = () => {
  return (
      <>
        <Navbar/>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/contact" component={Contact} />
           <Route exact path="/login" component={Login} />
           <Route exact path="/signup" component={Signup} />
           <Route component={Errorpage}/>
        </Switch>
        
      </>
  )
}

export default App