import React from 'react';
import "./special.css";
import SubHeading from '../../../components/subheading/SubHeading';
import MenuItems from '../../../components/menuItems/menuItems';
import data from '../../../constant/data';
import {menu} from "../../../constant/images"


const Special = () => {
  return (
    <section className="bg__dark section__padding">
      <div className="container">
        <div className="special__heading">
          <SubHeading text="Menu that fits your palatte" />
          <h1 className="headtext__cormorant special__today">Today&apos;s Special</h1>
        </div>

        <article className="row columns__sm special__menu-cocktails_flex">
          <div className="special__wine">
          <p className='specialMenu__heading' >Wine & Beer</p>
            {
              data.wines.map( (items, index)=>{
                const {title, price, tags}= items;
                return(
                  <MenuItems title={title} price={price} tags={tags} key={index}/>
                )
              })
            }
          </div>

          <div className="special__img">
          <img src={menu} alt="menu__img" />
          </div>

          <div className="special__cocktail">
          <p className="specialMenu__heading">Cocktails</p>
          
            {
              data.cocktails.map( (items, index)=>{
                const {title, price, tags}= items;
                return(
                  <MenuItems title={title} price={price} tags={tags} key={index}/>
                )
              })
            }
          </div>
          
        </article>

        <div className='special__btn'>
      <button type="button" className="custom__button">View More</button>
    </div>

      </div>
    </section>
  )
}

export default Special
