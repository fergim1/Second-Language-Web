import React, { useState } from 'react';
import Modal from 'react-modal';
import {
    Container, H1, Wrapper, Card, H2, TopLine
} from './ExperiencesElements';
import { data } from './data'

import { FaTimes } from 'react-icons/fa';

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
        <Container id='experiences'>
            <TopLine>Experiences</TopLine>
            <H1>Experiences That We're Proud Of</H1>
            <Wrapper>
                {
                    data.map( (experience) => 
                            <Card imageCard={experience.image} onClick={() => openModal(experience.id)} key={experience.id}>
                                <H2>{experience.title}</H2>
                            </Card>
                            )
                }
            </Wrapper>

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
                        <img src={experience.image} alt='cristo-redentor' className='foto'/>
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
            
        </Container>
    )
}
