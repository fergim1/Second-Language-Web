import styled from  'styled-components';
import { ImWhatsapp } from 'react-icons/im'


export const Whatsapp = styled.a`  
	position:fixed;
	width:3rem;
	height:3rem;
	bottom:1rem;
	right:1rem;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
    font-size:30px;
    z-index:9;
	align-items: flex-end;
	
	display: flex;
	justify-content: center;
	padding-bottom: 8px;

    &:hover {
        text-decoration: none;
        color: #25d366;
        background-color:#fff;
    }
`
export const IconWhatsapp = styled(ImWhatsapp)`
margin-top: 8px;
`