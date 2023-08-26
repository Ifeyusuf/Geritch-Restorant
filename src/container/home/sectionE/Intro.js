import React from 'react';
import "./intro.css";
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import {meal} from "../../../constant/images";
import { useGlobalContext } from '../../../context';

const Intro = () => {
    const {videoHandler, videoRef, playVideo}= useGlobalContext();

return (
    <section className=' intro__video'>

        <video ref={videoRef} src={meal}
                controls={false}
                type="video/mp4"
                loop
                muted
                >
                </video>
                <div className="intro__video-overlay">

                    <div className="intro__video-circle" onClick={videoHandler} >
                        {
                        playVideo ? <BsPauseFill className='font__27' /> 
                        :<BsFillPlayFill className='font__27' />
                        }
                    </div>
                </div>
    </section>
)
}

export default Intro
