import React, { useState } from 'react'
import imgBackground from '../../images/header-background.jpg'
import { Button } from '../ButtonElement'
import {
    Container,
    DivBackground,
    ImgBackground,
    Content,
    H1,
    P,
    ButtonWrapper,
    ArrowForward,
    ArrowRight,
    TopLine
} from './HomeElements'

export const HomeSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <Container id='home'>
            <DivBackground>
                <ImgBackground src={ imgBackground } alt='header-backgrond' />
            </DivBackground>
            <Content>
                <TopLine>Welcome</TopLine>
                <H1>SECOND LANGUAGE MODE ON</H1>
                <P>
                    Resources for your English or Spanish class
                    through Virtual live Experiences 
                </P>
                <ButtonWrapper>
                    <Button 
                        to='signup' 
                        onMouseEnter={ onHover } 
                        onMouseLeave={ onHover }
                        primary='true'
                        dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </ButtonWrapper>
            </Content>
        </Container>
    )
}
