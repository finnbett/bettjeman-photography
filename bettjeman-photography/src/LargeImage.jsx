import React from "react";
import { useParams } from "react-router";
import photos from "./photos";
//import { useParams } from "react-router";

export default function LargeImage(props) {
    const { image } = useParams()
    console.log(image)
    const photo = photos.find(photo => photo.image === image)
    console.log(photo)

    return (
        <div>
            <h2>{photo.image}</h2>
        </div>
    )

}