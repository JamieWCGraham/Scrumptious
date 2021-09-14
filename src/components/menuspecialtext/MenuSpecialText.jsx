import React from "react";
import "./menuspecialtext.css";


export default function MenuSpecialText(props) {

    return (
        <p className="menuSpecialText">+ {props.dollars}.<sup>{props.cents}</sup></p> 
    )
}
