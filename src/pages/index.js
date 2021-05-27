import React, { useState } from 'react'
import { Herosection } from '../components/HeroSection'
import { InfoSection } from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={ isOpen } toggle={ toggle }/>
            <Navbar toggle={ toggle }/>
            <Herosection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>

            
    
        </>
    )
}
