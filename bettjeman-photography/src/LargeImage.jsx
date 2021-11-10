import React from "react";
import { useParams } from "react-router";
import photos from "./photos";



export default function LargeImage() {
    const { image } = useParams()
    console.log(image)
    
    const photo = photos.find(photo => photo.image === image)
    console.log(photo)

    return (
        <>
       
             <img src={"/images/" + photo.type + "/" + photo.image + ".jpg"} alt="" />
             <h1>{photo.image}</h1>
             <h1>{photo.ISO}</h1>
             </>
            
            )
            
        }
        // <img src="/images/"+photo.type + "/" + photo.image + ".jpg" alt="" />