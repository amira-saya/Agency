import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Acceuil } from './components/Acceuil';
import { Footer } from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {AboutUs} from './components/AboutUs';
import {Events} from './components/Events'

function App() {
  return (
    <>
   <Acceuil/>
   <Footer/>
     </>
  );
}

export default App;
