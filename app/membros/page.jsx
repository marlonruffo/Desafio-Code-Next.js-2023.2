"use client";

import styles from "../../global.css";
import NextImage from "next/image";
import { TabelaMembros } from "@/src/components/TabelaMembros";
import { Navbar } from "@/src/components/Navbar";
import { Title } from "@/src/components/Title";
import {Footer} from "@/src/components/Footer";
export default function MembrosPage() {
  return (
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
      <Title title="Membros" />
      <TabelaMembros />
      <Footer
      telefone="(11) 99999-9999"
      cep="99999-999"
      facebooklink="https://www.facebook.com/"
      instagramlink="https://www.instagram.com/"
      linkedinlink="https://www.linkedin.com/"
      gmailURL="https://mail.google.com/"
      />
      
    </>
  );
}
