"use client";
import React from 'react';
import styles from '../global.css';
import { Navbar } from '@/src/components/Navbar';
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
      </>
    )
  }