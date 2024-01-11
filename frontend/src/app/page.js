"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Header from './header/Header'
import axios from 'axios'
import React from 'react'
// import {useState} from 'react'


export default function Home() {
const [data, setData]=React.useState([]);

React.useEffect(()=>{
  getAllProdutos()
}, [])

async function getAllProdutos(){
  await axios.get('https://back-end-ecommerce-xi7j.onrender.com/produtos/')
  .then((res)=>{
    // salva os dados na variavel data
    setData(res.data);
    console.log(data)
  }).catch((error)=>console.log(error));
};

function mostrar(){
  console.log(data)
}

  return(
    <div>
      <Header></Header>
      <div>
        {
          // percorre o nosso array de dados e pega os valores
          data.map((val, index)=>{
            return(
              <p>{index} - {val.nomeProduto} : {val.precoProduto}</p>
            )
          })
        }
      </div>
      <button onClick={mostrar}> clique aqui </button>
    </div>
    )
}
