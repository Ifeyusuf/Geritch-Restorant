import React from 'react';
import {gericht} from '../../constant/images';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import "./navbar.css"

const Navbar = () => {

  const [toggleMenu, setToggleMenu]= React.useState(false)

  return (
    <nav>
      <div className="container nav__heading">

        <article className='row justify__between items__center'>
          <div className="nav__logo">
            <img src={gericht} alt="" />
          </div>
          <div className="nav__links-container pc__only-sm pc__only-md">
              <ul className="nav__links row">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#menu">Menu</a></li>
                <li className="p__opensans"><a href="#awards">Awards</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
              </ul>
          </div>

          <div className="nav__btns row gap__1 pc__only-sm">
            <div>
            <a href="#login" className="p__opensans">Log In / Registration</a>
            </div>

            <div className='nav__line'></div>
              <div>
              <a href="/" className="p__opensans">Book Table</a>
              </div>
          </div>

          <article className='nav__smallscreen mobile__only mobily__only-sm mobile__only-md'>
          <GiHamburgerMenu className='text__white font__27 cursor' onClick={()=> setToggleMenu(true)}/>

        {
          toggleMenu &&
          <div className="nav__smallscreen-overlay">
          <MdOutlineRestaurantMenu className="nav__overlay-close font__27 text__white" onClick={()=> setToggleMenu(false)}/>
              <ul className="nav__smallscreen-links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#menu">Menu</a></li>
                <li className="p__opensans"><a href="#awards">Awards</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
              </ul>
          </div>
        }
        </article>
        </article>


      </div>
    </nav>
  )
}

export default Navbar
