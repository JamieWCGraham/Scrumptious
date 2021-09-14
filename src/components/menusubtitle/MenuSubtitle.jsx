import React from "react";
import "./menusubtitle.css";


export default function MenuSubtitle(props) {

    return (
        <div className={props.indentSubTitle}>
        <h2 className="menuSubtitle">{props.text}</h2>
        </div>
    )
}
