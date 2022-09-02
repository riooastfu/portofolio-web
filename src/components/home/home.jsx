import React from "react";
import "./home.css"

import Headersocials from "./headersocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

import Me from "../../assets/avatar-1.svg"

const Home = () => {
    return (
        
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Rio Sembiring</h1>
                <span className="home_education">I'm a fullstack developer.</span>

                <Headersocials/>

                <a href="#contact" className="btn">Hire Me</a>

                <ScrollDown/>
            </div>
            <Shapes/>
        </section>
    )
}

export default Home