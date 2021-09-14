import React, {useState, useEffect, useContext} from 'react';
import Baked from "../../images/baked.png"
import "./home.css"
import NavbarScrumptious from "../../components/navbar/Navbar";


export default function Home() {

    return (
        <>
        <div className="headerHome">
            <div className="headerLeft">
            <p className="menuTitle" style={{ paddingTop:"14px"}}><div className="headerLabel"> Breakfast & Brunch </div></p>
            </div>
            <div className="headerRight">
            <p className="menuTitle" style={{ paddingTop:"14px"}}><div className="headerLabel">(905) 787-1763 </div></p>
            </div> 
        </div>
        {/* <div className="backgroundWavesHome"> */}
          <div className="homeImage">
            <div className="scrumptiousBox">
                {/* <img className="scrumptiousImg"src="https://i.ibb.co/0r69Tq2/baked-4.png"></img> */}
                <img className="scrumptiousImg2" src="https://i.ibb.co/GWxQ5wH/Scrumptious.png" />
            </div>
            <div className="scrumptiousNav">
            <NavbarScrumptious/>
            </div>
          </div>
        {/* </div> */}
        <div className="footer">
            {/* <p className="footerText">Hello</p> */}
        </div>
        </>

    )
}
