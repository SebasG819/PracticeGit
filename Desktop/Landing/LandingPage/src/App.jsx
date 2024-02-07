import React from "react"
import { NavBar } from "./Components/NavBar/Navbar"
import { Body } from "./Components/Body/Body"
import { CardsOnline } from "./Components/CardsOnline/CardsOnline"
import { ProfileImg } from "./Components/ProfilePhoto/ProfilePhoto"
import { TittleClips } from "./Components/TittleClips/TittleClips"
import { CardsFamous } from "./Components/FamousClips/FamousClips"


export default function App(){
    
    const cardslive =  [ {
        id: crypto.randomUUID(),
        url: "",
        url: "",
        description: "",
        category: "",
        tag: "",

        
    }]
            
        
    return (
    <>  
        <ProfileImg/>
        <NavBar/>
        <Body/>
        
        <CardsOnline/>
        <CardsOnline/>
        <CardsOnline/>
        <TittleClips/>
        <CardsFamous/>
        
        
       
        
        </>
    )
}