import React from "react";
import "./menutext.css";


export default function MenuText(props) {

    return (
         <div className={props.indent}>
            <p className="menuText">{props.text}</p>
         </div>
    )
}
