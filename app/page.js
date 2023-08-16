"use client";
import React from 'react';
import styles from '../global.css';
import { Navbar } from '@/src/components/Navbar';
import {Footer} from "@/src/components/Footer";
import { Title } from "@/src/components/Title";
import { SectionMain } from "@/src/components/SectionMain";
import { Product } from "@/src/components/Product";
export default function Home() {
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
      <Title title="NoteWave" />
      <SectionMain
      imagem="/Images/music.png"
      nomeDoSite="NoteWave"
      descricao=", o destino definitivo para músicos e compositores apaixonados pelo mundo da música. Aqui, você encontrará uma ampla e cuidadosamente selecionada variedade de instrumentos musicais e serviços de composição, projetados para inspirar, elevar e aprimorar a sua jornada musical. "
      />
      <Title title="Produtos" />
      <div className='product-cards'>
      <Product
      imagem="/Images/instrumentos.png"
      nomeDoProduto="Instrumentos"
      preco="R$ 999,99"
      />
            <Product
      imagem="/Images/aulas.png"
      nomeDoProduto="Aulas"
      preco="R$ 100,99"
      />
            <Product
      imagem="/Images/eventos.png"
      nomeDoProduto="Eventos"
      preco="R$ 200,99"
      />
            <Product
      imagem="/Images/vinil.png"
      nomeDoProduto="Vinil"
      preco="R$ 15,99"
      />
            <Product
      imagem="/Images/revista.png"
      nomeDoProduto="Revista"
      preco="R$ 20,99"
      />
            <Product
      imagem="/Images/fone.png"
      nomeDoProduto="Fones"
      preco="R$ 150,99"
      />
      </div>






<Footer
      telefone="(11) 99999-9999"
      cep="99999-999"
      facebooklink="https://www.facebook.com/"
      instagramlink="https://www.instagram.com/"
      linkedinlink="https://www.linkedin.com/"
      gmailURL="https://mail.google.com/"
      />
      </>








    )
  }