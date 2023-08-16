import React from "react";
import { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { FiTrash2, FiEye } from "react-icons/fi";
import axios from "axios";
import styles from "../../styles/TabelaAdmin.css";
import modaisStyles from "../../styles/Modais.css";
import NextImage from "next/image";

export function TabelaAdmin() {
  const [modalCriacaoAberto, setModalCriacaoAberto] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [modalEdicaoAberto, setModalEdicaoAberto] = useState(false);
  const [modalDeleteAberto, setModalDeleteAberto] = useState(false);
  const [membroSelecionado, setmembroSelecionado] = useState(null);
  const [novomembro, setNovomembro] = useState({
    name: "",
    email: "",
    aniversario: "",
    cargo: "",
  });

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

  async function deletemembro() {
    axios
      .delete(`http://localhost:3001/membros/${membroSelecionado.id}`)
      .then((resposta) => {
        setmembros(
          listamembros.filter((membro) => membro.id !== membroSelecionado.id)
        );
        setModalDeleteAberto(false);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  async function editarmembro(event) {
    event.preventDefault();
    axios
      .put(
        `http://localhost:3001/membros/${membroSelecionado.id}`,
        membroSelecionado
      )
      .then(() => {
        const membrosAtualizados = listamembros.map((membro) => {
          if (membro.id === membroSelecionado.id) {
            return membroSelecionado;
          } else {
            return membro;
          }
        });
        setmembros(membrosAtualizados);
        setModalEdicaoAberto(false);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  async function adicionarmembro() {
    try {
      const resposta = await axios.post(
        "http://localhost:3001/membros",
        novomembro
      );
      setmembros([...listamembros, resposta.data]);
      setModalCriacaoAberto(false);
      setNovomembro({
        name: "",
        email: "",
        aniversario: "",
        cargo: "",
      });
    } catch (erro) {
      console.log(erro);
    }
  }

  return (
    <>
      <div className="botaoaddmembro">
        <button onClick={() => setModalCriacaoAberto(true)}>
          Adicionar Membro
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Aniversário</th>
            <th>E-mail</th>
            <th>Gerenciamento</th>
          </tr>
        </thead>
        <tbody>
          {listamembros.map((membro) => (
            <tr key={membro.id}>
              <td>{membro.name}</td>
              <td>{membro.cargo}</td>
              <td>{membro.aniversario}</td>
              <td>{membro.email}</td>
              <td className="botoes-admin">
                <button
                  onClick={() => {
                    setmembroSelecionado(membro);
                    setModalDeleteAberto(true);
                  }}
                >
                  <FiTrash2 size={19} color="black" />
                </button>
                <button
                  onClick={() => {
                    setmembroSelecionado(membro);
                    setModalEdicaoAberto(true);
                  }}
                >
                  <MdEdit size={19} color="black" />
                </button>
                <button
                  onClick={() => {
                    setmembroSelecionado(membro);
                    setModalAberto(true);
                  }}
                >
                  <FiEye size={19} color="black" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalAberto && (
        <div className="modal">
          <div className="modal-conteudo">
            <div className="Login_box login_boxfuncadmin">
              <div className="LogoDoSite">
                <NextImage
                  src="/cloudservice.png"
                  alt="Logo do Site"
                  width={100}
                  height={100}
                />
              </div>
              <div className="InputBoxesmodal">
                <h2 className="viewmodal h2viewmodal">
                  {membroSelecionado.name}
                </h2>
                <label>ID:</label>
                <p className="viewmodal"> {membroSelecionado.id}</p>
                <label>Email:</label>
                <p className="viewmodal"> {membroSelecionado.email}</p>
                <label>Aniversário:</label>
                <p className="viewmodal"> {membroSelecionado.aniversario}</p>
                <label>Cargo:</label>
                <p className="viewmodal"> {membroSelecionado.cargo}</p>
                <button
                  className="viewmodalbutton"
                  onClick={() => setModalAberto(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {modalEdicaoAberto && (
        <div className="modal">
          <div className="modal-conteudo">
            <div className="Login_box login_boxfuncadmin">
              <div className="LogoDoSite">
                <NextImage
                  src="/cloudservice.png"
                  alt="Logo do Site"
                  width={100}
                  height={100}
                />
              </div>
              <form onSubmit={editarmembro}>
                <div className="InputBoxesmodal">
                  <div className="nomemodal modalprep">
                    <label>Nome:</label>
                    <input
                      type="text"
                      name="name"
                      value={membroSelecionado?.name || ""}
                      onChange={(event) =>
                        setmembroSelecionado({
                          ...membroSelecionado,
                          name: event.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="emailmodal modalprep">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={membroSelecionado?.email || ""}
                      onChange={(event) =>
                        setmembroSelecionado({
                          ...membroSelecionado,
                          email: event.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="aniversariomodal modalprep">
                    <label>Aniversário:</label>
                    <input
                      type="text"
                      name="aniversario"
                      value={membroSelecionado?.aniversario || ""}
                      onChange={(event) =>
                        setmembroSelecionado({
                          ...membroSelecionado,
                          aniversario: event.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="cargomodal modalprep">
                    <label>Cargo:</label>
                    <input
                      type="text"
                      name="cargo"
                      value={membroSelecionado?.cargo || ""}
                      onChange={(event) =>
                        setmembroSelecionado({
                          ...membroSelecionado,
                          cargo: event.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="Botoes">
                    <button
                      onClick={() => setModalEdicaoAberto(false)}
                      className="Voltar"
                    >
                      <a>Fechar</a>
                    </button>
                    <button type="submit">
                      <a>Editar</a>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {modalDeleteAberto && (
        <div className="modal">
          <div className="modal-conteudo">
            <div className="Login_box login_boxfuncadmin">
              <div className="LogoDoSite">
                <NextImage
                  src="/cloudservice.png"
                  alt="Logo do Site"
                  width={100}
                  height={100}
                />
              </div>
              <form onSubmit={deletemembro}>
                <div className="InputBoxesmodal">
                  <p className="confirmDelete">
                    Tem certeza que deseja deletar {membroSelecionado.name}?
                  </p>
                  <div className="Botoes">
                    <button
                      className="Voltar"
                      onClick={() => setModalDeleteAberto(false)}
                    >
                      <a> Fechar </a>
                    </button>
                    <button type="submit">
                      <a> Deletar </a>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {modalCriacaoAberto && (
        <div className="modal">
          <div className="modal-conteudo">
            <div className="Login_box login_boxfuncadmin">
              <div className="LogoDoSite">
                <NextImage
                  src="/cloudservice.png"
                  alt="Logo do Site"
                  width={100}
                  height={100}
                />
              </div>
              <form onSubmit={adicionarmembro}>
                <div className="InputBoxesmodal">
                  <div className="emailmodal modalprep">
                    <label>Nome: </label>
                    <input
                      type="text"
                      name="name"
                      value={novomembro.name}
                      onChange={(e) =>
                        setNovomembro({
                          ...novomembro,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="emailmodal modalprep">
                    <label>Email: </label>
                    <input
                      type="email"
                      name="email"
                      value={novomembro.email}
                      onChange={(e) =>
                        setNovomembro({
                          ...novomembro,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="aniversariomodal modalprep">
                    <label>Aniversário:</label>
                    <input
                      type="text"
                      name="aniversario"
                      value={novomembro.aniversario}
                      onChange={(e) =>
                        setNovomembro({
                          ...novomembro,
                          aniversario: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="cargomodal modalprep">
                    <label>Cargo:</label>
                    <input
                      type="text"
                      name="cargo"
                      value={novomembro.cargo}
                      onChange={(e) =>
                        setNovomembro({
                          ...novomembro,
                          cargo: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="Botoes">
                    <button
                      onClick={() => setModalCriacaoAberto(false)}
                      className="Voltar"
                    >
                      <a> Fechar </a>
                    </button>
                    <button type="submit">
                      <a> Criar </a>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
