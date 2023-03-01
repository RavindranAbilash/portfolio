import React from 'react'

//import the style sheet
import './App.css'

//import the components
import Header from './components/Head/Header'
import Home from "./components/Hero/Home";
import Features from "./components/Features/Features";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Blog from "./components/Blog/Blog";


const App = () =>{
    return(
        <div>
            <Header/>
            <Home/>
            <Features/>
            <Portfolio/>
            <Resume/>
            <Blog/>
        </div>
    )
}

export default App;