import React, {useContext, useState} from 'react';

const AppContext= React.createContext()

const AppProvider = ({children}) => {
  const [playVideo, setPlayVideo]= useState(false);
  const videoRef= React.useRef(null);
  const galleryRef= React.useRef(null);

  const videoStart= ()=>{
    setPlayVideo( !playVideo)
  }


 

  const videoHandler= ()=>{
      setPlayVideo(!playVideo)
      if(playVideo){
          videoRef.current.pause();
      }
      else{
          videoRef.current.play();
      }
  }

const handlerNext= (e)=>{

    if(e === ("left")){
        galleryRef.current.scrollLeft += 330;
    }
    else{
        galleryRef.current.scrollLeft -= 330;
    }
}

  return (
    <AppContext.Provider value={{

      playVideo,
      videoStart,
      handlerNext,
      galleryRef,
      videoRef,
      videoHandler,
    }} >


        {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext= ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}
