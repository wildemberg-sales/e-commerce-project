"use client";
import styles from './page.module.css'
import Header from './components/header/Header'
import Banner from './components/banner/banner';
import Products from './components/produtos/Produto';
import Footer from './components/footer/Footer';
import axios from 'axios'
import React from 'react'
// import {useState} from 'react'


export default function Home() {


// Utilizado para chamar funções automaticamente ao renderizar a página
// Muito utilizado para busca de dados automática
// Coloca o axios aqui dentro sem função para ele só chamar


  return(
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Footer></Footer>
    </div>
    )
}
