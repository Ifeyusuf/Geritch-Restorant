import React from 'react';
import "./footer.css";
import NewsLetter from '../../components/newsletter/NewsLetter';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { spoon, gericht } from '../../constant/images';

const Footer = () => {
  return (
    <section className='bg__dark'>
      <div className="container">
        <NewsLetter/>

        <article className=' footer__container row justify__between py__2 columns__sm'>

          <div className="footer__contact">
            <h1 className="app__footer-headtext">Contact Us</h1>
            <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
            <p className="p__opensans">+1 212-344-1230</p>
            <p className="p__opensans">+1 212-555-1230</p>
          </div>

          <div className="footer__logo-text text__center">
                <img src={gericht} alt="footer_logo" className='footer__logo'/>
                <p className="p__opensans text__center">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
                <img src={spoon} alt="Spoon" className="spoon__img" style={{ marginTop: 15 }} />
                <div className="footer__links-icons text__center">
                  <FiFacebook  />
                  <FiTwitter/>
                  <FiInstagram/>
                </div>
          </div>

          <div className="footer__working-hours">
            <h1 className="app__footer-headtext">Working Hours</h1>
            <p className="p__opensans">Monday-Friday:</p>
            <p className="p__opensans">08:00 am - 12:00 am</p>
            <p className="p__opensans">Saturday-Sunday:</p>
            <p className="p__opensans">07:00 am - 11:00 pm</p>
          </div>
        </article>
          <div className="footer__copyright justify__center">
            <p className="p__opensans">2021 Gericht. All Rights reserved.</p>
          </div>
      </div>
    </section>
  )
}

export default Footer
