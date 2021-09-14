import React from "react";
import "./menuspecialtext2.css";


export default function MenuSpecialText2(props) {

    return (
        <p className="menuSpecialText2"> {props.dollars}.<sup>{props.cents}</sup></p> 
    )
}
