import React from "react";
import modaisStyles from "../../styles/Modais.css";
import styles from "../../global.css";
import NextImage from "next/image";
export default function LoginPage() {
  return (
    <div className="modal">
      <div className="modal-conteudo">
        <div className="Login_box login_boxfuncadmin">
          <div className="LogoDoSite">
            <NextImage
              src="/Images/Logo.png"
              alt="Logo do Site"
              width={100}
              height={100}
            />
          </div>
          <form>
            <div className="InputBoxesmodal">
              <div className="emailmodal modalprep">
                <label>Email: </label>
                <input type="email" name="email" />
              </div>
              <div className="emailmodal modalprep">
                <label>Senha: </label>
                <input type="password" name="senha" />
              </div>

              <div className="Botoes">
                <button className="Voltar">
                  <a href="/"> Fechar </a>
                </button>
                <button type="submit">
                  <a href="/gerenciamento"> Login </a>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
