import React from 'react';
import "./gallery.css";
import SubHeading from "../../../components/subheading/SubHeading";
import {gallery01, gallery02, gallery03,gallery04} from "../../../constant/images";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { useGlobalContext } from '../../../context';

const Gallery = () => {
const {handlerNext, galleryRef}=useGlobalContext()


return (
    <section className='section__padding bg__dark'>
        <div className="container">

            <article className='row gallery__container  columns__sm'>

                <div className="gallery__text">
                    <SubHeading text="Instagram" />
                    <h1 className="headtext__cormorant">Photo Gallery</h1>
                    <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                    <div className='gallery__btn'>
                        <button type="button" className="custom__button">View More</button>
                    </div>
                </div>

                <div className="gallery__image-content">
                    <div className="gallery__image-container" ref={galleryRef}>
                        {
                            [gallery01, gallery02, gallery03,gallery04].map( (image,index)=>{
                                return(
                                    <div className='gallery__images items__center justify__center'  key={` gallery__img-${index+1}` }>
                                        <img src={image} alt="Gallery" />
                                            <BsInstagram className="gallery__image-icon" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="gallery__images-arrows">
                        <BsArrowLeftShort className="gallery__arrow-icon next"  onClick={()=> handlerNext("left")} />
                        <BsArrowRightShort className="gallery__arrow-icon next" onClick={ ()=>handlerNext("right")} />
                    </div>
                </div>
            </article>
        </div>
    </section>
)
}

export default Gallery
