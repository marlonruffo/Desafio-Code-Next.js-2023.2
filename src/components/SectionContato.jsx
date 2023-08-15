import React from "react";
import NextImage from "next/image";
import styles from "../../styles/SectionContato.css";

export function SectionContato() {
  return (
    <>
      <section className="contato-section">
        <div className="info-contato">
          <div className="redessociais">
            <div className="titulo-redes">
              <h2>Entre em contato com a gente</h2>
            </div>
            <div className="logo-nome">
              <div className="redes">
                <NextImage src="/icons/facebook.svg" width={30} height={30} />
                <p>Facebook</p>
              </div>
              <div className="redes">
                <NextImage src="/icons/instagram.svg" width={30} height={30} />
                <p>Instagram</p>
              </div>
              <div className="redes">
                <NextImage src="/icons/linkedin.svg" width={30} height={30} />
                <p>Linkedin</p>
              </div>
              <div className="redes">
                <NextImage src="/icons/gmail.svg" width={30} height={30} />
                <p>Gmail</p>
              </div>
            </div>
          </div>

          <div className="localizacao">
            <div className="titulo-localizacao">
              <h2>Localização</h2>
            </div>
            <div className="pin">
              <NextImage src="/Images/pin.png" width={125} height={118} />
            </div>
            <div className="endereco">
              <p>
              Instituto de Ciências Exatas - 
Rua José Lourenço Kelmer,  Campus Universitário
Bairro São Pedro
CEP: 36036-900
Juiz de Fora – MG
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
