import React from 'react';
import { connect } from 'react-redux';

import AboutMe from '../components/about/AboutMe';
import Skill from '../components/about/Skill';
import Experience from '../components/about/Experience';

import { changeAbout } from '../actions/actions';

const About = (props) => {
    const { aboutSection, dispatch } = props;

    const aboutMeActive = aboutSection === 'aboutMe' 
    ? 'about_title about_title_active' 
    : 'about_title';
    const skillMeActive = aboutSection === 'skill' 
    ? 'about_title about_title_active' 
    : 'about_title';
    const experienceActive = aboutSection === 'experience' 
    ? 'about_title about_title_active' 
    : 'about_title';
    
    return (
      <div id="to-about">
        <div className="about">
          <p onClick={() => {
              dispatch(changeAbout('aboutMe'));
          }} className={aboutMeActive}>About Me</p>
          { aboutSection === 'aboutMe' && <AboutMe /> } 
          <p onClick={() => {
              dispatch(changeAbout('skill'));
          }} className={skillMeActive}>Skill</p>
          { aboutSection === 'skill' && <Skill /> }
          <p onClick={() => {
              dispatch(changeAbout('experience'));
          }} className={experienceActive}>Experience</p>
          { aboutSection === 'experience' && <Experience /> }
        </div>
      </div>
    )
}
export default connect((state) => {
    return {
        aboutSection: state.aboutSection
    }
})(About);