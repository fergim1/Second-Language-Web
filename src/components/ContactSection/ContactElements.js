import styled from 'styled-components';
import { ImLocation, ImWhatsapp } from 'react-icons/im'
import { FaEnvelope } from 'react-icons/fa'


export const ContactContainer = styled.div`
  color: '#fff';
  background: #eeeeee;
 

  @media screen and (max-width: 768px) {
      padding: 100px 0;
      height: 900px;
  }

  @media screen and (max-width: 500px) {
      padding: 0;
      /* height: 800px; */
  }
  
`

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 10 24px;
  justify-content: center;
`

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
      grid-template-areas: 'col1' 'col2';
  }
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`

export const Column1 = styled.div`
  /* margin-bottom: 15px; */
  padding: 0 24px;
  grid-area: col1;

  /* @media screen and (max-width: 768px) {
    padding: 0;
    margin-bottom: 0px;
  } */
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 24px;
  grid-area: col2;

  /* @media screen and (max-width: 768px) {
    padding: 0;
    margin-top:0;
  } */
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 20px;
    padding-bottom: 40px;

    @media screen and (max-width: 760px) {
    padding: 20px 20px 0px 20px;
        
    }
`

export const TopLine = styled.p`
    color: #fc0071;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 25px;

    @media screen and (max-width: 450px) {
        margin-bottom: 10px;        
    }    
`

export const Heading = styled.h1`
    margin-bottom: 15px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #484a46;

    @media screen and (max-width: 480px) {
        font-size: 32px
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 24px;
    color: #787976;
`

export const LocationWhatsappEmail  = styled.p`
    max-width: 440px;
    font-size: 16px;
    /* line-height: 35px; */
    color: #787976;
    /* display: flex;
    flex-direction: column; */
`
export const DivInfo = styled.span`
    display: flex;
    align-items: center;
    margin-bottom: 0;
`
export const IconLocation = styled(ImLocation)`
    color: #fc0071;  
    margin-right: 6px;
`
export const IconWhatsapp = styled(ImWhatsapp)`
    color: #fc0071;
    margin-right: 6px;
`

export const IconEmail = styled(FaEnvelope)`
    color: #fc0071;
    margin-right: 6px;

`

export const Form = styled.form`
    max-width: 600px;
    height: auto;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    /* padding: 80px 32px; */

    @media screen and (max-width: 768px) {
        /* padding: 0px 10px; */
    padding: 20px;

    }
`

export const FormInput = styled.input`
    padding: 12px 12px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;

    &:focus{
        outline: none;
        border: 2px solid #fc0071;
    }

    @media screen and (max-width: 500px) {
        width: 330px;
    }
`
export const FormTextArea = styled.textarea`
    padding: 16px 16px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;

    &:focus{
        outline: none;
        border: 2px solid #fc0071;
    }

    @media screen and (max-width: 500px) {
        width: 330px;
    }
`

export const FormButton = styled.button`
    background: #fc0071;
    padding: 8px 0px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        background: transparent;
        border: 2px solid #fc0071 ;
        color: #fc0071;
    }

    @media screen and (max-width: 500px) {
        width: 330px;
    }
`

export const TextError = styled.small`
    text-align: center;
    margin-top: 7px;
    color: red;
    font-size: 12px;
`

export const ImgEmailSent = styled.img`
    width: 40%;

    @media screen and (max-width: 768px) {
        width: 65%;  
    }
`
export const ImgEmailContainer = styled.div`
    margin-left: 30%;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

export const TextEmailSent = styled.p`
    color: #fc0071;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin-top: 10px;
    
`