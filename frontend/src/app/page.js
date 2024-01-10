"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Header from './header/Header'
import axios from 'axios'
import React from 'react'
// import {useState} from 'react'


export default function Home() {
const [data, setdata]=React.useState();

async function getProdutos(){
  await axios.get('http://127.0.0.1:8000/produtos/')
  .then((res)=>{
    // console.log(res.data);
    setdata(res.data);
  }).catch((error)=>console.log(error));
  console.log(data);
};

  return(
    <div>
  <Header></Header>
  <button onClick={async ()=>{await this.getProdutos()}}> clique aqui </button>
    </div>
    )
}
