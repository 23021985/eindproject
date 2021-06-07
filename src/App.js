import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import Header from "./components/header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Aside from "./components/Aside";
// import achtergrond from "./assets/achtergrond.jpg"
import Navbar from "./components/Navbar";
import Hamburger from "./components/Hamburger";


function App() {
  return (

      <>

              <Header/>

<div className={"container1"}>
<Aside/>


    <Main/>



</div>




        <Footer/>



      </>

  );
}
export default App;
