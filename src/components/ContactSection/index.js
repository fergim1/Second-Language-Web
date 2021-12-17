import React from 'react'
import { ImLocation, ImWhatsapp } from 'react-icons/im'
import { FaEnvelope } from 'react-icons/fa'


export const ContactSection = () => {

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

                        <form name="contact" method="POST" className="contact_column_2_form" >
                            <input type="hidden" name="form-name" value="contact" />
                            <input type="text" name="name" className='contact_column_2_input' placeholder='Name*'/>   
                            <input type="text" name="country" className='contact_column_2_input' placeholder='City & Country**'/>   
                            <input type="email" name="email" className='contact_column_2_input' placeholder='Email*'/>
                            <textarea name="message" className='contact_column_2_textarea' placeholder='Message*' rows='4' ></textarea>
                            <div data-netlify-recaptcha="true"></div>
                            <button type="submit" className='contact-button'>Submit message</button>
                        </form>

                    </div>
                </div>
        </div>
    </>
    )
}
