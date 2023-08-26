import React from 'react';
import SubHeading from "../../../components/subheading/SubHeading";
import { welcome } from '../../../constant/images';
import "./heading.css";

const Heading = () => {
  return (
   <section className='bg__dark' id='#home'>
    <div className="container heading__wrapper">
      <article className='heading__info row items__center columns__sm'>
        <div className="heading__text">
          <SubHeading text="Chase the new flavour" />
          <h1>The Key To Fine Dining</h1>
          <p className="p__opensans my__2">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
          <div className="heading__text-btn">
          <button type="button" className="custom__button">Explore Menu</button>
          </div>
        </div>

        <div className="heading__img">
          <img src={welcome} alt="" />
        </div>
      </article>
    </div>
   </section>
  )
}

export default Heading
