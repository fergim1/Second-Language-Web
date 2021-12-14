import React, { useState } from 'react'
import { Footer } from '../components/Footer'
import { HomeSection } from '../components/HomeSection'
import { UsSection } from '../components/UsSection'
import { Navbar } from '../components/Navbar'
import { ExperiencesSection } from '../components/Experiences'
import { Sidebar } from '../components/Sidebar'
import { ContactSection } from '../components/ContactSection'
import { WhatsappButton } from '../components/Whatsapp'
import { ServicesSection } from '../components/ServicesSection'

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
            <UsSection  />
            <ServicesSection/>
            <ExperiencesSection/>
            <ContactSection/>
            <WhatsappButton/>
            <Footer/>
        </>
    )
}
