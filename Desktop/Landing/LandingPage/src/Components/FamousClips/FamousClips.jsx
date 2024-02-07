import React from 'react'
import './FamousClips.css'
import Demon_Img from "../../Images/Demon_Img.jpeg"
import Mix_Img from "../../Images/Mix.jpg"

export function CardsFamous(){
    return(
        <section className="CardsFamous">
            <img className = "Banner_img" src =  {Demon_Img} alt="Photo_Banner" />
            <h1 className="Tittles">MVP en la champions</h1>
            <img className = "Profile_img" src =  {Mix_Img} alt="Photo_Profile" />
            <p className="Description"> Probando el nuevo agente de Valorant </p>
            
           
          
            
        </section>
    )
}