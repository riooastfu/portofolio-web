import React from "react";
import Typewriter from "typewriter-effect";

import Headersocials from "./headersocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

import Me from "../../assets/avatar-1.png"

import "./home.css"

const Home = () => {
    return (
        
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Rio Sembiring</h1>
                <span className="home_education">
                    <Typewriter
                        options={{
                            strings: ['Hi everyone, welcome to my portofolio website','I\'m Junior Front-End Developer','Fullstack Developer Wannabe'],
                            autoStart: true,
                            loop: true,
                        }}

                        // onInit={(typewriter) => {
                        //     typewriter.typeString("I'm front-end developer")
                        //     .pauseFor(1000)
                        //     .start()

                        // }}
                    />
                </span>

                <Headersocials/>

                <a href="#contact" className="btn"><i class="fa fa-cloud-download"></i> Download CV</a>

                <ScrollDown/>
            </div>
            <Shapes/>
        </section>
    )
}

export default Home