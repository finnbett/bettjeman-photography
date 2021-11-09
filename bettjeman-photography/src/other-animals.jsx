import React from "react";
import { Link } from "react-router-dom";

export default function OtherAnimals () {
    return (
        <>
        <div className= "catagory-images">
        <Link to="/LargeImage/IMG_5544"><img src="images/other-animals/IMG_5544.jpg" alt="" /></Link>
        <Link to="/LargeImage/IMG_5574"><img src="images/other-animals/IMG_5574.jpg" alt="" /></Link>
        <Link to="/LargeImage/glowwom"><img src="images/other-animals/glowwom.jpg" alt="" /></Link>
        <Link to="/LargeImage/IMG_5562"><img src="images/other-animals/IMG_5562.jpg" alt="" /></Link>
        <Link to="/LargeImage/IMG_6110"><img src="images/other-animals/IMG_6110.jpg" alt="" /></Link>
        <Link to="/LargeImage/IMG_6304"><img src="images/other-animals/IMG_6304.jpg" alt="" /></Link>
        <Link to="/LargeImage/IMG_6625"><img src="images/other-animals/IMG_6625.jpg" alt="" /></Link>
        <Link to="/LargeImage/IMG_9745"><img src="images/other-animals/IMG_9745.jpg" alt="" /></Link>
        <Link to="/LargeImage/weta"><img src="images/other-animals/weta.jpg" alt="" /></Link>
        </div>
        </>
    )
}