import React from 'react';
import "./newsletter.css";
import SubHeading from "../../components/subheading/SubHeading";

const NewsLetter = () => {
return (
<section className='bg_-dark section__padding' >
    <div className="container">
        <article className='newsletter__container'>
            <div className="newsletter__heading">
                <SubHeading text="Newsletter" />
                <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
                <p className="p__opensans">And never miss latest Updates!</p>
            </div>
            <div className="newsletter__input items__center row">
                <input type="email" placeholder="Enter your email address" />
                <button type="button" className="custom__button">Subscribe</button>
            </div>
        </article>
    </div>
</section>
)
}

export default NewsLetter
