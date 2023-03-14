import { useState } from 'react';
import Tarefas from './components/Tarefas';

export default function App() {
    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [data, setData] = useState('');
    const [descricao, setDescricao] = useState('');

    const [listaToDo, setListaToDo] = useState([]);
    
    function addTarefa(event) {
      event.preventDefault();
      
      if(titulo === "" || categoria === "" || data === "" || descricao == ""){
          alert("PREENCHA TODAS AS INFORMAÇÕES")
          return;
        }
        
        if(id){
            // const copiaListaToDo = [...listaToDo];
            // const index = copiaListaToDo.findIndex((tarefa) => tarefa.id === id);
            // copiaListaToDo[index].titulo = titulo;
            // copiaListaToDo[index].categoria = categoria;
            // copiaListaToDo[index].data = data;
            // copiaListaToDo[index].descricao = descricao;
            // console.log(copiaListaToDo);
            const copiaListaToDo = JSON.parse(JSON.stringify(listaToDo))
            const index = copiaListaToDo.findIndex((tarefa)=>tarefa.id === id)
            copiaListaToDo[index].titulo = titulo
            copiaListaToDo[index].categoria = categoria
            copiaListaToDo[index].data = data
            copiaListaToDo[index].descricao = descricao
            setListaToDo(copiaListaToDo)
            console.log(listaToDo);
        }else{
            setListaToDo([...listaToDo, {
                id: Date.now(), 
                titulo, 
                categoria, 
                data, 
                descricao
            }]);
            console.log(listaToDo);     
        }
    
    setTitulo("");
    setCategoria("");
    setData("");
    setDescricao("");

    }

//FUNÇÃO EDITAR TAREFA ESTÁ PRONTA MAS NÃO VINCULADA A BOTÕES
    // function editarTarefa(tarefa){
    //     setTitulo(tarefa.titulo);
    //     setCategoria(tarefa.categoria);
    //     setData(tarefa.data);
    //     setDescricao(tarefa.descricao)
    // }

//FUNÇÃO APAGAR TAREFA ESTÁ PRONTA MAS NÃO VINCULADA A BOTÕES
    // function apagarTarefa(id){
    //     if(confirm("Deseja apagar tarefa?")){
    //         const result = listaToDo.filter((tarefa) => tarefa.id !== id);
    //         setListaToDo(result);;
    //     }
    // }

    return (
        <div className="bg-black w-full h-screen flex justify-center itens-center p-2">
            <div className="w-1/4 my-20 bg-white mr-5 rounded-lg grid justify-center content-center">
                <h1 className="mb-5">To Do List</h1>
                <div className="w-1/4 my-20 bg-white mr-5 rounded-lg">
                    <form className="grid" onSubmit={addTarefa}>
                        <input
                            value={titulo}
                            placeholder="Título"
                            className="border border-slate-400 rounded-md" 
                            onChange={(event) => setTitulo (event.target.value)}
                        />
                        <div className="text-xs text-red-600 mb-3">
                            Campo Obrigatório
                        </div>

                        <select className="mb-3 border border-slate-400 rounded-md" 
                        value={categoria}
                        onChange={(event) => setCategoria (event.target.value)}>
                            <option value="" disabled>Selecione uma categoria</option>
                            <option value="trabaho">Trabaho</option>
                            <option value="lazer">Lazer</option>
                            <option value="prioridade">Prioridade</option>
                            <option value="outros">Outros</option>
                        </select>

                        <input
                            className="mb-3 border border-slate-400 rounded-md"
                            type="date"
                            value={data}
                            placeholder="Data" 
                            onChange={(event) => setData (event.target.value)}
                        />
                        <input
                            className="mb-3 h-20 text-justify border border-slate-400 rounded-md"
                            value={descricao}
                            placeholder="Descrição" 
                            onChange={(event) => setDescricao (event.target.value)}
                        />

                        <input
                            className="bg-slate-500 rounded hover:bg-slate-400 hover:text-slate-500"
                            type="submit"
                            value={id ? "Salvar" : "Cadastrar Tarefa"}
                        />
                    </form>

                    {/* <ul>Lista de Tarefas</ul> */}
                    <h2>Lista de Tarefas</h2>
                    <ul>
                        {
                            listaToDo.map((tarefa)=>(
                                <Tarefas 
                                    key={Tarefas.id}
                                    titulo={tarefa.titulo}
                                    categoria={tarefa.categoria}
                                    data={tarefa.data}
                                    descricao={tarefa.descricao}
                                />
                            ))
                        }
                    </ul>
                    
                </div>
                <div className="w-1/2 bg-white rounded-lg">itens</div>
            </div>
        </div>
    );
}

