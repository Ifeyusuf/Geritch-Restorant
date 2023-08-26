import React from 'react';
import "./findus.css";
import SubHeading from "../../../components/subheading/SubHeading";
import {findus} from "../../../constant/images"

const Findus = () => {
return (
    <section className='section__padding bg__dark'>
        <div className="container">

            <article className='row findus__container columns__sm'>

                <div className="findus__content">
                    <div className="ffindus__heading">
                        <SubHeading text="Contact" />
                        <h1 className="headtext__cormorant">Find Us</h1>
                    </div>
                    <div className="findus__text">
                        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
                        <p className="p__cormorant" >Opening Hours</p>
                        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
                        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
                    </div>
                        <div className="findus__btn">
                            <button type="button" className="custom__button">Visit Us</button>
                        </div>
                </div>
                <div className="findus__image">
                    <img src={findus} alt="Findus_image" />
                </div>
            </article>
        </div>
    </section>
)
}

export default Findus
