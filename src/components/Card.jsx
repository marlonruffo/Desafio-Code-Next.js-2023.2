import React from 'react';
import styles from '../styles/Artigo/artigocomponent.module.scss';
import NextImage from 'next/image';

export function CardProduto(props) {
    return (
        <>
            <div className={styles.textoPrincipal}>
                <div className={styles.cabecalho_container}>
                    <div className={styles.cabecalho}>
                        <h1 className={styles.tituloArtigo}>{props.titulo}</h1>
                        <h2 className={styles.subtituloArtigo}>{props.subtitulo}</h2>
                    </div>
                    <div className={styles.cabecalho2}>
                        <h3 className={styles.autorArtigo}>{props.autor}</h3>
                        <h3 className={styles.dataArtigo}>{props.data}</h3>
                        <h3 className={styles.horario}>Atualizado às {props.horario}</h3>

                    </div>
                </div>
                <div className={styles.textoArtigo}>
                    <h3> {props.texto} </h3>
                </div>
            </div>
            <a className={styles.linkartigo} href={props.link} >Clique aqui para ler mais artigos &raquo;</a>
        </>
    );
}
