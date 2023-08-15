import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/TabelaAdmin.css";

export function TabelaMembros() {
  const [listamembros, setmembros] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:3001/membros")
      .then(function (resposta) {
        setmembros(resposta.data);
      })
      .catch(function (erro) {
        console.log(erro);
      });
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Aniversário</th>
            <th>E-mail</th>

          </tr>
        </thead>
        <tbody>
          {listamembros.map((membro) => (
            <tr key={membro.id}>
              <td>{membro.name}</td>
              <td>{membro.cargo}</td>
              <td>{membro.aniversario}</td>
              <td>{membro.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
