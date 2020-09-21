import React from 'react';
import './App.css';
import Navbar from "./pages/Navbar"
import Profile from "./pages/Profile"
import Study from "./pages/Study"
import Hobby from "./pages/Hobby"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './pages/Footer';
import SimpleSlider from './pages/SimpleSlider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SimpleSlider/>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/study" component={Study} />
          <Route exact path="/hobby" component={Hobby} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
