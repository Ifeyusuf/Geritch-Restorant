
import "./phone.css";
// import {Link} from "react-router-dom";
import SAMSUNG from "../../../images/SAMSUNG.png";
import Iphone from "../../../images/IPHONE.png";
import Navbar from "../../../components/navbar/Navbar";
import {AiFillApple} from "react-icons/ai";
import {BsGooglePlay} from "react-icons/bs";



const Phone = () => {

  return (
    <section className='dowload__section_A width__sm '>
      <div className="nav mt__lg width__sm width__md">
      <Navbar/>
      </div>
      <div className="container">

        <article className='download__section align__center width__sm width__md'>

        <div className="phone__col_1">
            <div className=" width__sm ">
            <img src={SAMSUNG} alt="Mock"  width="75%" className="width__sm"/>
            </div>
          </div>

          <div className="phone__col_1">
  
            <div className="buttons download width__sm">
              <button className='b__pink h__pink bg__pink'>
                <AiFillApple className='apple fs'/>
                <div className='text'>
                <p>App Store</p>
                </div>
              </button>
              <button className='b__green h__green bg__green_3'>
                <BsGooglePlay className='play fs'/>
                <div className='text'>
                <p>Play Store</p>
                </div>
              </button>
            </div>
          </div>

          <div className="phone__col_1 width__sm ">
            <div className="iphone float__right width__sm">
            <img src={Iphone} alt="Mock"  width="75%" className="width__sm"/>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Phone
