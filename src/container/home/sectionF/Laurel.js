import React from 'react';
import "./laurel.css";
import { laurels } from '../../../constant/images';
import data  from "../../../constant/data";
import SubHeding from "../../../components/subheading/SubHeading";


const AwardItem= ({imgUrl, title, subtitle})=>{
  return(
    <section>
      <article className='row award__content'>
        <div className="award__image">
          <img src={imgUrl} alt=" Award" />
        </div>
        <div className="award__text">
          <p className="p__cormorant">{title}</p>
          <p className="p__opensans">{subtitle}</p>
        </div>
      </article>
    </section>
  )
}

const Laurel = () => {
  return (
    <section className="section__padding bg__dark">
        <div className="container">
          
            <article className="row laurel__content justify__between columns__sm ">
                <div className="laurel__awards">
                <div className="laurel__heading">
                  <SubHeding text=" Awards & recognition" />
                  <h1 className="headtext__cormorant">Our Laurels</h1>
                </div>
                  {
                    data.awards.map( (award, index)=>{ 
                      return <AwardItem {...award}  key={index}/>
                    })
                  }
                </div>

                <div className="laurel__image">
                  <img src={laurels} alt="Laurel" />
                </div>
            </article>
        </div>
    </section>
  )
}

export default Laurel
