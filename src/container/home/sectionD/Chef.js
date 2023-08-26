import React from 'react';
import "./chef.css";
import { chef, quote, sign } from '../../../constant/images';
import SubHeading from '../../../components/subheading/SubHeading';

const Chef = () => {
  return (
    <section className="section__padding app__bg chef__wrapper" id='chef'>
      <div className="container chef__container">

        <article className='row chef__container columns__sm'>
          <div className="chef__image">
            <img src={chef} alt=" Chef" />
          </div>

          <div className="chef__Content">
            <SubHeading text=" Chef's word"/>
              <h1 className="headtext__cormorant">What we believe in</h1>

              <div className="chef__info">
                <div className="flex items__center chef__qoute">
                  <img src={quote} alt="Quote" />
                  <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
               </div>
                <div>
                <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
                </div>
              </div>
              <div className="chef__info">
              <div className="chef__name">
                <p>Kevin Luo</p>
                <p className="p__opensans">Chef & Founder</p>
                <img src={sign} alt="Sign" />
              </div>
              </div>
          </div>

        </article>
      </div>
    </section>
  )
}

export default Chef
