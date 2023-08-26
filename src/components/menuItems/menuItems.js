import React from 'react';
import "./menuItems.css";

const menuItems = ({title, price, tags}) => {
  return (
    <section>
        <article className='menu__content'>

            <div className=" row menu__head items__center justify__between">
            <div className="menu__title">
                <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
            </div>

            <div className="dash__line"></div>

            <div className="menu__price">
                <p className="p__cormorant">{price}</p>
            </div>
            </div>
            <div className="menu__tag">
                <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
            </div>
        </article>
    </section>
  )
}

export default menuItems
