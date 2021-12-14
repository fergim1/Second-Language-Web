import React from 'react'
import {Link as Button} from 'react-scroll';
import { MdMovie } from "react-icons/md";
import { GiModernCity } from "react-icons/gi";
import { RiGamepadFill } from "react-icons/ri";
import { FaBook, FaCoffee, FaPlane } from "react-icons/fa";



export const ServicesSection = () => {

    return (
        <>
        <div className='services_container' id='services'>
          <div className='services_column_1'>
            <div className='services_column_1_wrapper'>

                  <h1 className='services_column_1_title title'>We offer a real connection with Native Speakers</h1>
                  <p className='services_column_1_description'>Our goal is to make an outstanding complement for your English or Spanish Class.</p>
                  <div className='services_column_1_button_wrapper'>
                    <Button 
                      className='services_column_1_button button'
                      to="experiences" 
                      offset={-80}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                    >
                      See Experiences
                    </Button>
                  </div>
            </div>
          </div>

              <div className='services_column_2'>
                <div className='services_column_2_wrapper'> 
                         <p className='section_name'>Services</p> 

                    <div className='services_column_2_item'>
                        <GiModernCity className='services_column_2_icon'/>                          
                        <h6 className='services_column_2_item_title'>Virtual  Tours in Cities</h6>
                    </div>
                    <div className='services_column_2_item'>
                        <MdMovie className='services_column_2_icon'/>                          
                        <h6 className='services_column_2_item_title'>Virtual Theme Park</h6>
                    </div> 
                    <div className='services_column_2_item'>
                        <FaCoffee className='services_column_2_icon'/>                          
                        <h6 className='services_column_2_item_title'>Coffee time / After office</h6>
                    </div> 
                    <div className='services_column_2_item'>
                        <FaBook className='services_column_2_icon'/>                          
                        <h6 className='services_column_2_item_title'>Taller de cuentos</h6>
                    </div> 
                    <div className='services_column_2_item'>
                        <RiGamepadFill className='services_column_2_icon'/>                          
                        <h6 className='services_column_2_item_title'>Juegos</h6>
                    </div> 
                    <div className='services_column_2_item'>
                        <FaPlane className='services_column_2_icon'/>                          
                        <h6 className='services_column_2_item_title'>Language Immersion Programs</h6>
                    </div> 
                    <div className='services_column_2_item'>
                        <MdMovie className='services_column_2_icon'/>                          
                        <h6 className='services_column_2_item_title'>Clasicos de cine</h6>
                    </div>

                </div>
              </div>


            </div>
      </>
    )
}
