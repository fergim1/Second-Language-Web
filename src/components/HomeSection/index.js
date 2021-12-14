import React from 'react'
import imgBackground from '../../images/header-background.jpg'
import {Link as Button} from 'react-scroll';


export const HomeSection = () => {

    return (
        <div className='home-container' id='home'>
            
            <div className='home-background'>
                <img className='home-image-background' src={ imgBackground } alt='home-backgrond' />
            </div>    

            <div className='home-content'>

                <p className='home-up-title'>VIRTUAL LIVE</p>
                <h1 className='home-title'>EXPERIENCES</h1>
    
                    <Button 
                        className='button home_button'
                        to='us' 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Know us
                    </Button>
            </div>
        </div>
    )
}
