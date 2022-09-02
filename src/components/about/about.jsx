import React from "react";
import "./about.css"
import Me from "../../assets/avatar-2.svg"

const About = () => {
    return (
        <section className="about container section">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Me} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I'm Rio O A Sembiring, web developer from Medan, Indonesia. I have experience in web design, building and customization, also I am good at graphic design.</p>
                        <a href="#download" className="btn">Download CV</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number development">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About