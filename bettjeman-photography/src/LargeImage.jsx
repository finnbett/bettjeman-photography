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
            <div className= "large-image-container">
             <img className="large-image" src={"/images/" + photo.type + "/" + photo.image + ".jpg"} alt="" />
                <div className="list-container">
                    <h2 className="settings-header">Camera Settings</h2>
                <ul>
                    <li><span>Exposure Time:</span> {photo.exposureTime}</li>
                    <li><span>Aperture:</span> {photo.aperture}</li>
                    <li><span>ISO:</span> {photo.ISO}</li>
                    <li><span>Focal Length:</span> {photo.focalLength}</li>
                </ul>
                </div>
             </div>
             </>
            
            )
            
        }
        // <img src="/images/"+photo.type + "/" + photo.image + ".jpg" alt="" />