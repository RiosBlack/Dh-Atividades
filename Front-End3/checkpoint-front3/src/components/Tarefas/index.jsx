export default function Tarefas(props) {
    const { key, titulo, categoria, data, descricao, editar, excluir } = props;
    const converteData = (data) => {
        const ano = data.slice(0,4)
        const mes = data.slice(5,7)
        const dia = data.slice(8,10)
        const formatada = dia + '/' + mes + '/' + ano
        return formatada
        } 

    return (
        <li
            key={key}
            className="flex justify-between text-white bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 rounded-md mb-2"
        >
            <div className="p-2 w-3/4">
                <h1 className="text-xl font-semibold">{titulo}</h1>
                <p>{categoria}</p>
                <p>{descricao}</p>
            </div>
            <div className="p-2 grid justify-items-center">
                <h2 className="text-xl font-semibold">{converteData( data)}</h2>
                
                <div className="flex justify-center items-center">
                    <img
                        className="w-6 h-6 mr-4 hover:bg-slate-400 rounded-md"
                        src="./assets/deletar.png"
                        onClick={excluir}
                        alt="imagem de deletar"
                    />
                    <img
                        className="w-5 h-5 hover:bg-slate-400 rounded-sm"
                        src="./assets/editar.png"
                        onClick={editar}
                        alt="imagem de editar"
                    />
                </div>
            </div>
        </li>
    );
}
