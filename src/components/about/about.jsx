import React from "react";
import "./about.css"
import Me from "../../assets/avatar-2.svg"
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Me} alt="" className="about__img" />

                <div className="about__data">
                    <div className="about__info">
                        <p className="about__description">
                            Hi everyone, i'm Rio, junior front-end web and mobile developer also a fullstack developer wannabe 😂.
                            I live in Medan, Indonesia. I'm 22 years old. I'm a fresh graduate of bachelor's degree from Mikroskil University.<br /><br/>
                            I love computer since i was in junior high school. My favorite programming language is Javascript.
                            Besides learning program, i love playing games too such as Apex Legends, Valorant, Dota 2 and more.
                            That's all.
                        </p>
                        {/* <a href="#download" className="btn">Download CV</a> */}
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design uiuxdesign"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photoshop</h3>
                                <span className="skills__number">85%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photoshop"></span>
                            </div>
                        </div>

                    </div> */}
                </div>
            </div>

            {/* <AboutBox/> */}
        </section>
    )
}

export default About