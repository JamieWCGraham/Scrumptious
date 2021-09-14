import React from "react";
import "./menuline2.css";
import MenuSubtitle from "../menusubtitle/MenuSubtitle";
import MenuSpecialText2 from "../menuspecialtext2/MenuSpecialText2";
import MenuText from "../menutext/MenuText";



export default function MenuLine2(props) {

    return (
        <div className="menuLine">  
        {props.additional && <MenuText indent={props.indent} text={props.additional}/>}
        <MenuSubtitle indentSubTitle={props.indentSubTitle} text={props.text} />
        <MenuSpecialText2 dollars={props.dollars} cents={props.cents}/>
         </div>
    )
}
