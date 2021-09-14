import React from "react";
import "./menuimages.css";


export default function MenuImages(props) {

    return (
        <>
            <div className="menuImages">
                <img className="menuImage" src={props.link1}></img>
                <figcaption className="imgCaption">
                {props.caption1}
                </figcaption>
                <img className="menuImage" src={props.link2}></img>
                <figcaption className="imgCaption">
                {props.caption2}
                </figcaption>
                {props.link3 && <><img className="menuImage" src={props.link3}></img>
                <figcaption className="imgCaption">
                {props.caption3}
                </figcaption></> }
            </div>

        </>

    )
}
