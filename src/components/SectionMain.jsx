import React from "react";
import NextImage from "next/image";
import styles from "../../styles/SectionMain.css";

export function SectionMain(props) {
  return (
  <>
    <div className="container-main">
        <NextImage className= "imagem-main" src={props.imagem} alt="Picture of the author" width={691} height={433} />
        <p> <b>{props.nomeDoSite}</b>{props.descricao}</p>
    </div>
    
  
  
  </>
  );}

