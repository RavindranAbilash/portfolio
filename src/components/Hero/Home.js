import React from "react"
import "./Home.css"
// import hero from "../pic/hero.png"
import hero1 from "../pic/hero1.png"
// import skill1 from "../pic/skill1.png"
// import skill2 from "../pic/skill2.png"
// import skill3 from "../pic/skill3.png"
import {Typewriter} from "react-simple-typewriter"

const Home = () => {
    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h3>STEP INTO MY UNIVERSE</h3>
                        <h1>
                            Hi, I’m <span>Abilash</span>
                        </h1>
                        <h2>
                            a
                            <span>
                <Typewriter words={[" Full Stack Developer.", " Computer Engineer."]} loop cursor cursorStyle='|'
                            typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/>
              </span>
                        </h2>

                        <p>&emsp;I am an ambitious undergraduate studying Computer Engineering at the University of
                            Peradeniya.
                            I am eager to kickstart my career as a Software Engineer,
                            developing innovative and cutting-edge business solutions for a diverse range of clients.
                            With experience in software development and process improvement,
                            I am dedicated to expanding my knowledge and skills to deliver high-quality results.</p>

                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>FIND WITH ME</h4>
                                <div className='button'>
                                    <a href="https://www.linkedin.com/in/ravindran-abilash/" target="_blank"><button className='btn_shadow'>
                                        <i class='fab fa-linkedin-in'></i>
                                    </button></a>
                                    <a href="https://github.com/RavindranAbilash" target="_blank"><button className='btn_shadow'>
                                        <i className="fab fa-github"></i>
                                    </button></a>
                                    <a href="https://twitter.com/abilash15567496" target="_blank" ><button className='btn_shadow'>
                                        <i className="fab fa-twitter"></i>
                                    </button></a>
                                    <a href="https://fb.com/ravindran.abilash.7"  target="_blank"><button className='btn_shadow'>
                                        <i className='fab fa-facebook-f'></i>
                                    </button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right_img'>
                            <img src={hero1} alt=''/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
