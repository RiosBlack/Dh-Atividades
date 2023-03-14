export default function Tarefas(props){
    const {key, titulo, categoria, data, descricao, editar, excluir} = props;  
    return(
        <li key={key} className="flex ">
            <h1>{titulo}</h1>
            <p>{categoria}</p>
            <p>{descricao}</p>
            <h2>{data}</h2>
            <img src="../assets/deletar.png" onClick={excluir} alt="imagem de deletar" />
            <img src="../assets/editar.png" onClick={editar} alt="imagem de editar" />
        </li>
    )
    
} 