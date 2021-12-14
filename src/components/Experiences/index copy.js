import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

import { data } from './data'
import './modal.css'


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')



export const ExperiencesSection = () => { 
    const [modalIsOpen,setIsOpen] = useState(false);
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
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
      }
    return (
        <div className='experiences-container' id='experiences'>
            <p className='experiences-up-title-section'>Experiences</p>
            <h1 className='experiences-title-section'>Experiences That We're Proud Of</h1>
            <div className='experiences-wrapper'>
                {
                    data.map( (experience) => 
                            <div 
                                key={experience.id}
                                className='experiences-card'
                                style={{ backgroundImage: `url(${experience.image})` }} 
                                onClick={() => openModal(experience.id)} 
                            >
                                <h2 className='experiences-title-card'>{experience.title}</h2>
                            </div>
                            )
                }
            </div>

            <Modal
            isOpen={modalIsOpen}
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
          </Modal>
            
        </div>
    )
}
