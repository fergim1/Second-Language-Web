import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import { data } from './data'


export const ExperiencesSection = () => { 
    const [modalOpen,setModalOpen] = useState(false);
    const [experience, setExperience] = useState({
        id: '',
        title: '',
        image: '',
        description: ''
    })
    
    const getExperience = (data, id) => {
        return  data.filter( (exp) => exp.id === id)
       }

    const openModal = (id) => {
        setExperience( {...getExperience(data, id)[0]})
        setModalOpen(true);
        console.log('modalOpen: ', modalOpen)
    }

    const closeModal = () => {
        setModalOpen(false);
      }
    return (
        <div className='experiences_container' id='experiences'>
            <p className='experiences_section_name section_name'>Experiences</p>
            <h1 className='experiences_title title'>Experiences That We're Proud Of</h1>
            <div className='experiences_wrapper'>
                {
                    data.map( (experience) => 
                            <div 
                                key={experience.id}
                                onClick={() => openModal(experience.id)} 
                                className='experiences_wrapper_card'
                            >
                                <img
                                    className='experiences_image_card'
                                    alt=''
                                    src= { experience.image}
                                />
                                <div className='experiences_title_card'>{experience.title}</div>
                            </div>
                            )
                }
            </div>

            { 
                modalOpen
                &&
                <div className='modal_overlay'>
                    <div className='modal_wrapper'>
                        <div className='modal_wrapper_icon_close'> 
                            <FaTimes 
                                className='modal_icon_close'
                                onClick={closeModal}
                            />
                        </div>
                        <div className="modal_row">
                            <div className="modal_column_1">
                                <img src={experience.image} alt='experiences' className='modal_column_1_image'/>
                            </div>
                            <div className="modal_column_2">
                                    <h2 className='modal_column_2_title'> {experience.title}</h2>
                                    <p className='modal_column_2_description'> {experience.description} </p>
                                    <br></br>
                                    <div className='modal_column_2_wrapper_back_button'>
                                        <button onClick={closeModal} className='modal_column_2_back_button'> Back</button>
                                    </div>
                            </div>
                        </div>

                    </div>


                </div>
            }

            {/* <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Experiences Modal"
            overlayClassName="modal-fondo"
            className="modal"
            >
              <div className='div-icon-close' onClick={closeModal}> <FaTimes className='icon-close'/></div>
                <div className="row">
                    <div className="col-12 col-md-7 divImage">
                        <img src={experience.image} alt='experiences' className='foto'/>
                    </div>
                    <div className="col-12 col-md-5 divInfo">
                            <h2> {experience.title}</h2>
                            <p> {experience.description} </p>
                            <br></br>
                            <div className='div-button-back'>
                                <button onClick={closeModal} className='button-back'> Back</button>
                            </div>
                    </div>
                </div>
          </Modal> */}
            
        </div>
    )
}
