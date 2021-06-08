import logo from './logo.svg';
import React, {useState} from "react";
import {set, useForm} from "react-hook-form";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink,
}

from 'react-router-dom';
import './App.css';
import Header from "./components/header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Aside from "./components/Aside";
import HomePage from "./pages/HomePage";
import Subscribe from "./pages/Subscribe";
import Login from "./pages/Login";
import Locaties from "./pages/Locaties";
import Input from "./components/Input";

function App() {
  return (

      <Router>
          <Header/>
                <div className={"container1"}>
                    <Aside/>

                            <Switch>
                                <Route path="/locaties">
                                    <Locaties/>
                                </Route>

                                <Route path="/login">
                                    <Login/>
                                </Route>

                                <Route path="/subscribe">
                                    <Subscribe/>
                                </Route>

                                <Route path="/">
                                    <HomePage/>
                                </Route>

                            </Switch>

                </div>
            <Footer/>
      </Router>

  );
}
export default App;
