import React from "react";
import { Link } from "react-router-dom"

export default function Landscape() {
    return(
        <>
        <div className= "catagory-images">
        <Link to="/LargeImage/DSC_0029"><img src="images/landscape/DSC_0029.JPG" alt="" /></Link>
        <Link to="/LargeImage/IMG_9342"><img src="images/landscape/IMG_9342.jpg" alt="" /></Link>
        <Link to="/LargeImage/IMG_9364"><img src="images/landscape/IMG_9364.jpg" alt="" /></Link>
        <Link to="/LargeImage/IMG_5728"><img src="images/landscape/IMG_5728.jpg" alt="" /></Link>
        <Link to="/LargeImage/IMG_8953"><img src="images/landscape/IMG_8953.jpg" alt="" /></Link>
        <Link to="/LargeImage/IMG_9213"><img src="images/landscape/IMG_9213.jpg" alt="" /></Link>
        <Link to="/LargeImage/sunrise"><img src="images/landscape/sunrise.jpg" alt="" /></Link>
        <Link to="/LargeImage/IMG_2394"><img src="images/landscape/IMG_2394.jpg" alt="" /></Link>
        </div>
        </>
    )
}