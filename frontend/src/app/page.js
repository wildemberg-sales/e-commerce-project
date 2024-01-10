"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Header from './header/Header'
import axios from 'axios'
import React from 'react'
// import {useState} from 'react'


export default function Home() {
const [data, setData]=React.useState([]);

async function getAllProdutos(){
  await axios.get('https://back-end-ecommerce-xi7j.onrender.com/produtos/')
  .then((res)=>{
    // salva os dados na variavel data
    setData(res.data);
    console.log(data)
  }).catch((error)=>console.log(error));
};

  return(
    <div>
      <Header></Header>
      <button onClick={getAllProdutos}> clique aqui </button>
    </div>
    )
}
