import React from 'react'

//import the style sheet
import './App.css'

//import the components
import Header from './components/Head/Header'
import Home from "./components/Hero/Home";


const App = () =>{
    return(
        <div>
            <Header/>
            <Home/>
        </div>
    )
}

export default App;