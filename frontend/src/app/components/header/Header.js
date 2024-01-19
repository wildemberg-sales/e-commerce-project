import styles from './Header.css'

export default function Header(){
return ( 
  <div className='all'>
    <div className='home'>
      <img className='imagemHome' src='./favicon.ico'></img>
      <h2>Monke</h2>
    </div>
    <div className='search'>
    <form className='busca' action="/search" method="get">
        <input className='campo' type="text" id="search" name="q" placeholder="Procurando algo ?"></input>
        <button type="submit">Buscar</button>
    </form>
    </div>
    <div className='links'>
      <h3>Carrinho</h3>
      <h3>Perfil</h3>
    </div>
  </div>
)
}