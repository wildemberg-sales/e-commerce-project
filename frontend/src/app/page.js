"use client";
import styles from './page.module.css'
import Header from '../components/header/Header'
import axios from 'axios'
import React from 'react'
import Banner from '../components/banner/banner';
import ProdutoHome from '@/components/produtoHome/ProdutoHome';
// import {useState} from 'react'


export default function Home() {

// variavel para armazenas os produtos
const [data, setData]=React.useState([]);

// Utilizado para chamar funções automaticamente ao renderizar a página
// Muito utilizado para busca de dados automática
// Coloca o axios aqui dentro sem função para ele só chamar
React.useEffect(()=>{ // chamada automaticamente toda vez que a página é carregada
  getAllProdutos()
}, [])

async function getAllProdutos(){
  await axios.get('https://back-end-ecommerce-xi7j.onrender.com/produtos/')
  .then((res)=>{
    // salva os dados na variavel data
    setData(res.data);
  }).catch((error)=>console.log(error));
};

  return(
    <div>
      <Header></Header>
      <Banner></Banner>
      <div className='produto-single'>
        {
          // percorre o nosso array de dados e pega os valores
          data.map((item, index)=>{
            console.log(item)
            return(
              <ProdutoHome url={item.urlImagem} nome={item.nomeProduto} preco={item.precoProduto}/>
            )
          })
        }
      </div>
    </div>
    )
}
