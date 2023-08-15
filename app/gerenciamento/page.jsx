"use client";

import styles from '../../global.css'
import NextImage from "next/image";
import { TabelaAdmin } from '@/src/components/TabelaGerenciamento';
import { Navbar } from '@/src/components/Navbar';
import { Title } from '@/src/components/Title';



export default function GerenciamentoPage() {
  return(
    <>
    
      <Navbar
      logo="/Images/logo.png"
      titulo="NoteWave"
      item1="Home"
      item2="Contato"
      item3="Membros"
      item4="Gerenciamento"
      link1="/"
      link2="/contato"
      link3="/membros"
      link4="/gerenciamento"
      />
      <Title title="Gerenciamento"/>
    <TabelaAdmin/>
    </>
  )
}
