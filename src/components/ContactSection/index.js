import React, { useState } from 'react'
import { ImLocation, ImWhatsapp } from 'react-icons/im'
import { FaEnvelope } from 'react-icons/fa'
import emailjs from 'emailjs-com';
import EmailSent from '../../images/mail-sent.svg'
import { useForm } from '../../hooks/useForm';



export const ContactSection = () => {
    const [submited, setSubmited] = useState(false);    
    const [errors, setErrors] = useState(false);
    // const [ formValues, handleInputChange ] = useForm ({
    //     name: '',
    //     country: '',
    //     email: '',
    //     message: ''
    // })

    // const { name, country, email, message } = formValues

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     if ( name.trim().length === 0 || country.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0 ) {
    //         return setErrors(true)
    //     }
    //     else {
    //         setErrors(false)
    //     }

    //     emailjs.sendForm('gmail', 'form-contact', e.target, 'user_EjcujjhQDgaFRw2VPotqN' )
    //       .then((result) => {
    //           if(result.text){
    //               setSubmited(true) 
    //           }
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    // }

    return (
    <>
        <div className='contact_container' id='contact'>
                <div className='contact_column_1'>
                    <div className='contact_column_1_wrapper'>
                        <p className='contact_column_1_section_name section_name'>Contact</p>
                        <h1 className='contact_column_1_title title'>Get In Touch</h1>
                        <p className='contact_column_1_description'>Use the contact form for any questions and inquiries.</p>
                        <p className='contact_column_1_info'>
                            <ImLocation className='contact_column_1_icon'/>Spain - England - Argentina - Peru
                            <br/>
                            <ImWhatsapp className='contact_column_1_icon'/> +549 116 483 8366
                            <br/>
                            <FaEnvelope className='contact_column_1_icon'/> secondlanguagemodeon@gmail.com
                        </p>
                    </div>
                </div>

                <div className='contact_column_2'>
                    <div className='contact_column_2_wrapper'>
                        {
                            !submited 
                        ?                    
                            ( 

                                <form name="contact" method="post" className="contact_column_2_form" >
                                    <input type="hidden" name="form-name" value="contact" />
                                    <input type="text" name="name" className='contact_column_2_input' placeholder='Name*'/>   
                                    <input type="text" name="country" className='contact_column_2_input' placeholder='City & Country**'/>   
                                    <input type="email" name="email" className='contact_column_2_input' placeholder='Email*'/>
                                    <textarea name="message" className='contact_column_2_textarea' placeholder='Message*' rows='4' ></textarea>
                                    <div data-netlify-recaptcha="true"></div>
                                    <button type="submit" className='contact-button'>Submit message</button>
                                    {/* {
                                        errors && <small className='contact-error'>*All fields are required</small>
                                    } */}
                                </form>




                                // <form className="contact_column_2_form" onSubmit={sendEmail}>
                                //     <input className='contact_column_2_input' type="text" name="name" placeholder='Name*' value={ name } onChange= { handleInputChange } />
                                //     <input className='contact_column_2_input' type="text" name="country" placeholder='City & Country*' value={ country } onChange= { handleInputChange }/>
                                //     <input className='contact_column_2_input' type="email" name="email" placeholder='Email*' value={ email } onChange= { handleInputChange }/>
                                //     <textarea className='contact_column_2_textarea' name="message" placeholder='Message*' rows='4' value={ message } onChange= { handleInputChange }/>
                                //     <button className='contact-button' type="submit" >Submit message</button>
                                //     {
                                //         errors && <small className='contact-error'>*All fields are required</small>
                                //     }
                                // </form>
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
