import React, { useState } from "react"

//style sheet
import "./Header.css"

import cv from '../pic/Abilash.pdf'

//image for logo
import logo from "../../images/logo.png"

const Header = () => {

    // fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })

    // Toggle Menu for mobile view
    const [Mobile, setMobile] = useState(false)


    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        {/*<a href="https://www.pdn.ac.lk/"><img src={logo} alt='University of Peradeniya' /></a>*/}
                    </div>

                    <div className='navlink'>
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
                            <li>
                                <a href='#home'>home</a>
                            </li>
                            <li>
                                <a href='#features'>Skills</a>
                            </li>
                            <li>
                                <a href='#portfolio'>portfolio</a>
                            </li>
                            <li>
                                <a href='#resume'>resume</a>
                            </li>
                            <li>
                                <a href='#blog'>blog</a>
                            </li>
                            <li>
                                <a href='#contact'>contact</a>
                            </li>
                            <li>
                                <a href={cv} download>
                                <button className='home-btn'>DOWNLOAD CV</button>
                                </a>
                            </li>
                        </ul>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
