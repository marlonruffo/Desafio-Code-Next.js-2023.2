import NextImage from "next/image";
import React from "react";
import Style from "../../styles/Footer.css";

export function Footer(props) {
  return (
    <>
      <div className="footer-container">
        <div className="footer-info">
        <div className="esquerda">
          <div className="telefone-footer">
            <p>Telefone:</p>
            <p>{props.telefone}</p>
          </div>
          <div className="cep">
            <p>CEP:</p>
            <p>{props.cep}</p>
          </div>
        </div>

        <div className="meio">
          <NextImage src="/images/Logo.png" width={150} height={150} />
        </div>

        <div className="direita">
          <a href={props.facebooklink} target="_blank">
            <NextImage
              className="icon"
              src="/icons/facebook.svg"
              width={50}
              height={50}
            />
          </a>

          <a href={props.instagramlink} target="_blank">
            <NextImage
              className="icon"
              src="/icons/instagram.svg"
              width={50}
              height={50}
            />
          </a>

          <a href={props.linkedinlink} target="_blank">
            <NextImage
              className="icon"
              src="/icons/linkedin.svg"
              width={50}
              height={50}
            />
          </a>

          <a href={props.gmailURL} target="_blank">
            <NextImage
              className="icon"
              src="/icons/gmail.svg"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
      </div>
    </>
  );
}
