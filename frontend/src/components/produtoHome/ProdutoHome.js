export default function ProdutoHome(props){
    
    return(
        <div style={{width: '24%'}}>
            <img src={props.url} />
            <p>{props.nome}</p>
            <p>{props.preco}</p>
        </div>
    )
}