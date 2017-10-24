import React from 'react';
import { connect } from 'react-redux';

import AboutMe from '../components/about/AboutMe';
import Skill from '../components/about/Skill';

const About = () => {
    return (
        <div className="about">
          <p className="about_title">About me</p>
          <AboutMe /> 
          <p className="about_title">Skill</p>
          <Skill />
          <p className="about_title">Experience</p>
        </div>
    )
}
export default About;