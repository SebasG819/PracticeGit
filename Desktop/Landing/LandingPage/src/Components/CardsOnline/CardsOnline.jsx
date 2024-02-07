import React from "react"
import './CardsOnline.css'
import Iso_img from "../../Images/Iso_img.png"
import Pal_Img from "../../Images/Pal_Img.jpg"
import DeiV_Img from "../../Images/DeiV_Img.png"
import Fifa_Img from "../../Images/Fifa_Img.jpg"
import Mix_Img from "../../Images/Mix.jpg"
export function CardsOnline(){
    return(
        <section className="CardsOnline">
            <h1 className="Tittles">Bienvenido al nuevo stream</h1>
            <img className = "Banner_img" src =  {Iso_img} alt="Photo_Banner" />
            <img className = "Profile_img" src =  {Mix_Img} alt="Photo_Profile" />
            <p className="Description"> Probando el nuevo agente de Valorant </p>
            <p className="Category"> Valorant </p>
            <button className="Tags"> Español </button>
          
            
        </section>
    )
}

export function CardsOnline(props){
    const{tittle, banner_img, profile_img, description, category, tags, } = props
    return(
        <section className="CardsOnline">
            {
                CardsOnline.map((card) => {
                    return <Card banner_img={card.banner_img} />

                }) 
            }


        </section>
     
        
    )
}
