import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import EmailSent from '../../images/mail-sent.svg'

import {
    ContactContainer, ContactWrapper, ContactRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle,
    Form, FormInput, FormButton, FormTextArea, LocationWhatsappEmail, IconLocation, ImgEmailSent, ImgEmailContainer, 
    TextEmailSent, IconWhatsapp, IconEmail, DivInfo, TextError
} from './ContactElements'
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
        <ContactContainer id='contact'>
            <ContactWrapper>
            <ContactRow >
                <Column1>
                <TextWrapper>
                    <TopLine>Contact</TopLine>
                    <Heading>Get In Touch</Heading>
                    <Subtitle>Use the contact form for any questions and inquiries.</Subtitle>
                    <LocationWhatsappEmail>
                        <DivInfo>
                            <IconLocation/>Argentina  -  Peru  -   England
                        </DivInfo>
                            <br></br>
                        <DivInfo>
                            <IconWhatsapp/> +549 116 483 8366
                        </DivInfo>
                            <br></br>
                        <DivInfo>
                            <IconEmail/> secondlanguagemodeon@gmail.com
                        </DivInfo>
                    </LocationWhatsappEmail>
                </TextWrapper>
                </Column1>
                <Column2>
                {
                    !submited ?

                
               ( 
                <Form className="contact-form" onSubmit={sendEmail}>
                    <FormInput type="text" name="name" placeholder='Name*' value={ name } onChange= { handleInputChange } />
                    <FormInput type="text" name="country" placeholder='Country*' value={ country } onChange= { handleInputChange }/>
                    <FormInput type="email" name="email" placeholder='Email*' value={ email } onChange= { handleInputChange }/>
                    <FormTextArea name="message" placeholder='Message*' rows='4' value={ message } onChange= { handleInputChange }/>
                    <FormButton type="submit" >Submit message</FormButton>
                    {
                        errors && <TextError>*All fields are required</TextError>
                    }
                </Form>
                 )
                
                :
                <ImgEmailContainer>
                     <ImgEmailSent src={EmailSent}/>
                     <TextEmailSent>Message sent !</TextEmailSent>                
                </ImgEmailContainer>
            
                }
                </Column2>
            </ContactRow>
            </ContactWrapper>
      </ContactContainer>
            
        </>
    )
}
