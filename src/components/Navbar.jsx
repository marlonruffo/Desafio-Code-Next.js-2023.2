import NextImage from "next/image";
import React from "react";
import Style from "../../styles/Navbar.css";
export function Navbar(props) {
  return (
    <>
      <div className="navbar">
        <div className="left-side">
          <div className="navbar-logo">
            <NextImage src={props.logo} width={50} height={50} alt = "Logo do Site" />
          </div>
            <div className = "navbar-site">
                <h1>{props.titulo}</h1>
            </div>
        </div>
        <div className="right-side">
            <ul>
                <li><a href={props.link1}>{props.item1}</a></li>
                <li><a href={props.link2}>{props.item2}</a></li>
                <li><a href={props.link3}>{props.item3}</a></li>
                <li><a href={props.link4}>{props.item4}</a></li>
                <li><a className= "login-link"  href="/login">Login</a></li>
            </ul>
        </div>
      </div>
    </>
  );
}
