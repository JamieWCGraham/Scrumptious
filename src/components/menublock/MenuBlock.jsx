import React from "react";
import "./menublock.css";
import MenuTitle from "../menutitle/menuTitle";
import MenuText from "../menutext/MenuText";
import MenuSpecialText from "../menuspecialtext/MenuSpecialText";
import MenuLine1 from "../menuline1/MenuLine1";
import MenuLine2 from "../menuline2/MenuLine2";
import MenuImages from "../menuimages/MenuImages";


export default function MenuBlock() {

    return (
        <>
        <div className="backgroundWaves">

        <div className="menuBlock">
            
         <div className="menuStanza">
            <MenuTitle text="Classic Breakfast"></MenuTitle>
             <br/>
             <MenuText text="Served with toast and home fries or French fries." />
             <MenuLine1 text="Substitute sweet potato fries or side salad" dollars="2" cents="99" />
             <MenuLine1 text="Substitute egg whites" dollars="1" cents="99" />
             <MenuLine1 text="Substitute side fruit" dollars="4" cents="99" />
             <MenuLine1 text="Add Cheese" dollars="1" cents="99" />
             <div className="bottomIndent"></div>

             <MenuLine2 text="3 Eggs and Style" dollars="6" cents="49" />
             <MenuLine2 indent="indent" additional="with" text="Ham, Bacon or Sausage" dollars="8" cents="99" />
             <MenuLine2 indent="indent" additional="with" text="Turkey Bacon" dollars="8" cents="99" />
             <MenuLine2 indent="indent" additional="with" text="Peameal (3 Pieces)" dollars="9" cents="99" />

             <MenuLine2 indentSubTitle="indent" text="The Big Breakfast" dollars="12" cents="99"/>

             <MenuText indent="indent" text="4 eggs any style, 2 sausage links" />
             <MenuText indent="indent" text="2 strips of bacon, 2 slices of ham &" />
             <MenuText indent="indent" text="2 buttermilk pancakes" />

             <div className="topIndent"/>
             <MenuLine2 text="Sausage, Egg & Cheddar Muffin" dollars="6" cents="99"/>
             <MenuLine2 text="Montreal Smoked Meat Hash & Eggs" dollars="12" cents="49"/>

             <MenuText  text="Smoked meat, onions & diced potatoes topped" />
             <MenuText  text="with 3 eggs and style" />

             <MenuLine2 text="NY Steak & Eggs" dollars="15" cents="99" />
             <MenuText  text="6oz steak & eggs any style" /> 

            </div>
            <MenuImages 
            link1="https://s3-media0.fl.yelpcdn.com/bphoto/jAZuCsuCS4tZEaB5cu8AgA/o.jpg"
            link2="https://s3-media0.fl.yelpcdn.com/bphoto/T_p3iEKclYsoK39hHrzudg/o.jpg"
            caption1="3 Eggs any Style"
            caption2="Sausage, Egg, and Cheddar Muffin"
            />

        </div>
        </div>

        </>

    )
}
