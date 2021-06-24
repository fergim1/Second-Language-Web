import React from "react";
import {Link as Button} from 'react-scroll';


export const UsSection = () => {
  return (
    <>    
      <div className='contanier us-container' id='us'>
            <div className='row us-section'>
                  <div className='col-12 col-md-6' >
                        <div className='us-wrapper-info'>
                                <p className='us-up-title'>
                                    Us
                                </p>
                                <h1 className='us-title'>
                                    We provide tools for language teachers
                                </h1>
                                <p className='us-text'>
                                    We offer a real connection with Native Speakers through Live Virtual Tours, 
                                    Cultural and Gastronomic Experiences, Language Immersion Programs and customizable 
                                    talks about different topics. Our goal is to make an outstanding complement for 
                                    your English or Spanish Class.
                                </p>
                                <div className='us-wrapper-button'>
                                <Button
                                    className='us-button'
                                    to="experiences" 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >
                                    See Experiences
                                </Button>
                                </div>
                            </div>  
                   </div>
            
                   <div className='col-12 col-md-6'>
                        <div
                            className='us-wrapper-video'
                        >
                            <iframe 
                                className='us-video'
                                src="https://player.vimeo.com/video/564845625" 
                                // width="640" 
                                // height="360" 
                                width="440" 
                                height="360" 
                                frameBorder="0" 
                                allow="autoplay; fullscreen; picture-in-picture" 
                                allowFullScreen
                                title='Video presentation Second Languages'
                            />
                        </div>
                   </div>            
            </div>
      </div>
     


    </>
  );
};
