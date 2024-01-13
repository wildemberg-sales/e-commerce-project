"use client"
import React from "react";
import axios from "axios";

export default function produto({ params }){

    const url = `https://back-end-ecommerce-xi7j.onrender.com/produto/${params.id}`
    const [data, setData] = React.useState([])

    React.useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    return(
        <>
            <h1>Produto: {data.nomeProduto}</h1>
            <img srcSet={`${data.urlImagem}`}/>
            <p>{data.descricaoProduto}</p>
            <h2>R$ {data.precoProduto}</h2>
        </>
    )
}