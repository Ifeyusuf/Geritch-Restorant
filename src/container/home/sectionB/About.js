import React from 'react';
import "./about.css";
import {G, knife, spoon} from "../../../constant/images";

const About = () => {
  return (
    <section className="bg__dark" id='#about'>
      <div className="container section__padding">
        <article className=" about__header">
          <div className="about__G-img items__center">
            <img src={G} alt="Knife" />
          </div>

          <article className=" row about__history-content items__center columns__sm">

            <div className="about__text">
              <h1 className='headtext__cormorant'>About Us</h1>
              <img src={spoon} alt="about_spoon" className="spoon__img" />
              <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
              <button type="button" className="custom__button">Know More</button>
            </div>

            <div className="about__history-img">
            <img src={knife} alt="about_knife" />
            </div>

            <div className="history__text">
            <h1 className='headtext__cormorant'>Our History</h1>
            <img src={spoon} alt="about_spoon" className="spoon__img" />
              <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
              <div>
              <button type="button" className="custom__button">Know More</button>
              </div>
            </div>

          </article>
        </article>
      </div>
    </section>
  )
}

export default About
