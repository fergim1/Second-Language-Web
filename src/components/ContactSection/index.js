import React, { useState } from 'react'
import { ImLocation, ImWhatsapp } from 'react-icons/im'
import { FaEnvelope } from 'react-icons/fa'
import emailjs from 'emailjs-com';
import EmailSent from '../../images/mail-sent.svg'
import { useForm } from '../../hooks/useForm';



export const ContactSection = () => {
    const [submited, setSubmited] = useState(false);    
    const [errors, setErrors] = useState(false);
    const [ formValues, handleInputChange ] = useForm ({
        name: '',
        country: '',
        email: '',
        message: ''
    })

    const { name, country, email, message } = formValues

    const sendEmail = (e) => {
        e.preventDefault();
        if ( name.trim().length === 0 || country.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0 ) {
            return setErrors(true)
        }
        else {
            setErrors(false)
        }

        emailjs.sendForm('gmail', 'form-contact', e.target, 'user_EjcujjhQDgaFRw2VPotqN' )
          .then((result) => {
              if(result.text){
                  setSubmited(true) 
              }
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
    <>
        <div className='container contact-container' id='contact'>
            <div className='row contact-row' >
                <div className='col-12 col-md-6 contact-column-1'>
                    <p className='contact-up-title-section'>Contact</p>
                    <h1 className='contact-title-section'>Get In Touch</h1>
                    <p className='contact-text'>Use the contact form for any questions and inquiries.</p>
                    <p className='contact-text-info'>
                        <ImLocation className='contact-icon'/>Argentina  -  Peru  -   England
                        <br/>
                        <ImWhatsapp className='contact-icon'/> +549 116 483 8366
                        <br/>
                        <FaEnvelope className='contact-icon'/> secondlanguagemodeon@gmail.com
                    </p>
                </div>

                <div className='col-12 col-md-6 contact-column-2'>
                    {
                        !submited 
                    ?                    
                        ( 
                            <form className="contact-form" onSubmit={sendEmail}>
                                <input className='contact-input' type="text" name="name" placeholder='Name*' value={ name } onChange= { handleInputChange } />
                                <input className='contact-input' type="text" name="country" placeholder='Country*' value={ country } onChange= { handleInputChange }/>
                                <input className='contact-input' type="email" name="email" placeholder='Email*' value={ email } onChange= { handleInputChange }/>
                                <textarea className='contact-textarea' name="message" placeholder='Message*' rows='4' value={ message } onChange= { handleInputChange }/>
                                <button className='contact-button' type="submit" >Submit message</button>
                                {
                                    errors && <small className='contact-error'>*All fields are required</small>
                                }
                            </form>
                        )
                        
                    :
                        <div className='contact-wrapper-img-email'>
                            <img className='contact-img-email-sent' src={EmailSent} alt='Email sent!'/>
                            <p className='contact-text-email-sent'>Message sent !</p>                
                        </div>
                
                    }
                </div>
            </div>
        </div>        
    </>
    )
}
