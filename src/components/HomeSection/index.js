import React from 'react'
import imgBackground from '../../images/header-background.jpg'
import {Link as Button} from 'react-scroll';


export const HomeSection = () => {

    return (
        <div className='home_container' id='home'>
            
            <div className='home_background'>
                <img className='home_image_background' src={ imgBackground } alt='home_backgrond' />
            </div>    

            <div className='home_content'>

                <p className='home_up_title'>VIRTUAL LIVE</p>
                <h1 className='home_title'>EXPERIENCES</h1>
    
                    <Button 
                        className='home_button button'
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
