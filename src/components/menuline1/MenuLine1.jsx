import React from "react";
import "./menuline1.css";
import MenuText from "../menutext/MenuText";
import MenuSpecialText from "../menuspecialtext/MenuSpecialText";




export default function MenuLine1(props) {

    return (
        <div className="menuLine">  
        <MenuText text={props.text} />
        <MenuSpecialText dollars={props.dollars} cents={props.cents}/>
         </div>
    )
}
