import axios from 'axios'
import React from 'react'
import styles from "./produto.css"

export default function Products(){
  const [data, setData]=React.useState([]);
  
  React.useEffect(()=>{
    getAllProdutos()
  }, [])
  
  async function getAllProdutos(){
    await axios.get('https://back-end-ecommerce-xi7j.onrender.com/produtos/')
    .then((res)=>{
      setData(res.data);
      // console.log(data)
    }).catch((error)=>window.alert(error));
  };
  
  function mostrar(){
    console.log(data)
  }

  return(
      <div className='cardProduct'>
        {
          data.map((val, index)=>{
            return(
              <div className='dataProduct'>
              {/* <p>{index}</p> */}
              <img srcSet={`${val.urlImagem}`} className='imgProduct'/>
              <p>{val.nomeProduto}</p>
              <p>{val.precoProduto}</p>
              </div>  
            )
          })
        }
      </div>
  )
}