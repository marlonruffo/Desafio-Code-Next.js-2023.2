import React from "react";
import NextImage from "next/image";
import styles from "../../styles/SectionContato.css";

export function SectionContato(props) {
  return (
    <>
      <div className="contato-container">
        <div className="redes-sociais">
            <NextImage className="baloon" src="/Images/redessociais.png" width={300} height={300} />
            <div className="info-redes">


            <div className="icones">
            <NextImage src="/icons/facebook.svg" width={65} height={65} />
            <p>{props.facebook}</p>
              </div>  
            <div className="icones">

            <NextImage src="/icons/instagram.svg" width={65} height={65} />
            <p>{props.instagram}</p>
            </div>
            <div className="icones">

            <NextImage src="/icons/linkedin.svg" width={65} height={65} />
            <p>{props.linkedin}</p>
            </div>
            <div className="icones">

            <NextImage src="/icons/gmail.svg" width={65} height={65} />
            <p>{props.gmail}</p>
            </div>
        </div>
        </div>

        <div className="endereco-local">
        <div className="endereco-texto">
    <p>{props.endereco}</p>
        </div>
        <NextImage className="map" src="/Images/map.png" width={300} height={300} />



        </div>

      </div>
    </>
  );
}
