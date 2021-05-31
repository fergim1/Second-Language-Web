import React, { useState } from 'react'
import { Footer } from '../components/Footer'
import { HomeSection } from '../components/HomeSection'
import { InfoSection } from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import { Navbar } from '../components/Navbar'
import { ExperiencesSection } from '../components/Experiences'
import { Sidebar } from '../components/Sidebar'
import { ContactSection } from '../components/ContactSection'
import { WhatsappButton } from '../components/Whatsapp'

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={ isOpen } toggle={ toggle }/>
            <Navbar toggle={ toggle }/>
            <HomeSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <ExperiencesSection/>
            <InfoSection {...homeObjThree}/>
            <ContactSection/>
            <WhatsappButton/>
            <Footer/>
    
        </>
    )
}
