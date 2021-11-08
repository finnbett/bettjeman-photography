import React from "react";
import { Link } from "react-router-dom";
import Birds from "./birds";
import Plants from "./plants"
import { Route, Routes } from "react-router";
export function Catagory () {
    return (
        <>
        <div className="container">

            <div className="image-container">
                <Link to="/birds">
                   
                <img src="images/birds/IMG_3091.jpg" alt="" />
                <div className="bird">Birds</div>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/landscape">
                <img src="images/landscape/IMG_9342.jpg" alt="" />
                <div className="landscape">Landscape</div>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/night">
                <img src="images/night/IMG_9083.jpg" alt="" />
                <div className="night">Night</div>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/other-animals">
                <img src="images/other-animals/IMG_5562.jpg" alt="" />
                <div className="other-animals">Other Animals</div>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/plants">
                <img src="images/plants/FLOWER 3 FINAL.jpg" alt="" />
                <div className="plants">Plants</div>
                </Link>
            </div>
        
        </div>

        


        </>
    )
}