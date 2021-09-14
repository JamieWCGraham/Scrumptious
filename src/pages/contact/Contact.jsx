import React, {useState, useEffect, useContext} from 'react';
import Baked from "../../images/baked.png"
import "./contact.css"
import NavbarScrumptious from "../../components/navbar/Navbar";
import Table from "react-bootstrap/Table"


export default function Home() {

    return (
        <>
        <div className="header">
        </div>

        <div className="backgroundWaves">
            <div className="scrumptiousBox">
                {/* <img className="scrumptiousImg2" src="https://i.ibb.co/fk4SBkv/baked-5.webp" /> */}
                <div className="innerInfo">
                    <h1 className="contactMe">Contact</h1>
                    <br/>
                    <br/>
                    <ul className="innerList">
                        <li><b>Location</b>: 700 Elgin Mills Road E Richmond Hill, ON L4C 0H8</li>
                        <li><b>Phone</b>: (905) 787-1763</li>
                        <li><b>Order</b>: skipthedishes.com, ubereats.com</li>
                    </ul>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th style={{color:"#2B0A73"}}>Day</th>
                            <th style={{color:"#2B0A73"}}>Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Monday</td>
                            <td>7:30am - 7:00pm</td>
                            </tr>
                            <tr>
                            <td>Tuesday</td>
                            <td>7:30am - 7:00pm</td>
                            </tr>
                            <tr>
                            <td>Wednesday</td>
                            <td>7:30am - 3:00pm</td>
                            </tr>

                            <tr>
                            <td>Thursday</td>
                            <td>7:30am - 7:00pm</td>
                            </tr>

                            <tr>
                            <td>Friday</td>
                            <td>7:30am - 7:00pm</td>
                            </tr>

                            <tr>
                            <td>Saturday</td>
                            <td>7:30am - 7:00pm</td>
                            </tr>

                            <tr>
                            <td>Sunday</td>
                            <td>7:30am - 3:00pm</td>
                            </tr>
                        </tbody>
                    </Table>


                </div>
            </div>
        </div>

        <div className="footer">
        </div>
        </>

    )
}
