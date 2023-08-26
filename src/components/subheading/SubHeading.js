import React from 'react';
import {spoon} from "../../constant/images"
import "./subheading.css";

const SubHeading = ({text}) => {
  return (
    <section>
        <article className='subheading__content'>
            <p className="p__opensans">{text}</p>
            <img src={spoon} alt="Spoon" className='spoon__img' />
        </article>
    </section>
  )
}

export default SubHeading
