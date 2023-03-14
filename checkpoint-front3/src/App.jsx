import { useState } from 'react';

function App() {
    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [data, setData] = useState('');
    const [descricao, setDescricao] = useState('');

    const [listaToDo, setListaToDo] = useState([]);
    
    function addTarefa(event) {
      event.preventDefault();
      setListaToDo([...listaToDo, {id: Date.now(), titulo, categoria, data, descricao}]);
      setTitulo("");
      setCategoria("");
      setData("");
      setDescricao("");
      console.log(listaToDo)
    }

    return (
        <div className="bg-black w-full h-screen flex justify-center itens-center p-2">
            <div className="w-1/4 my-20 bg-white mr-5 rounded-lg grid justify-center content-center">
                <h1 className="mb-5">Cadastrar tarefas</h1>
                <div className="w-1/4 my-20 bg-white mr-5 rounded-lg">
                    <form className="grid" onSubmit={addTarefa}>
                        <input
                            type="text"
                            placeholder="Título"
                            className="border border-slate-400 rounded-md" onChange={(event) => setTitulo (event.target.value)}
                        />
                        <div className="text-xs text-red-600 mb-3">
                            Campo Obrigatório
                        </div>

                        <select className="mb-3 border border-slate-400 rounded-md" onChange={(event) => setCategoria (event.target.value)}>
                            <option value="" disabled>
                                Selecione uma categoria
                            </option>
                            <option value="Trabaho">trabaho</option>
                            <option value="Lazer">lazer</option>
                            <option value="Prioridade">prioridade</option>
                            <option value="Outros">outros</option>
                        </select>

                        <input
                            className="mb-3 border border-slate-400 rounded-md"
                            type="date"
                            placeholder="Data" onChange={(event) => setData (event.target.value)}
                        />
                        <input
                            className="mb-3 h-20 text-justify border border-slate-400 rounded-md"
                            type="text"
                            placeholder="Descrição" onChange={(event) => setDescricao (event.target.value)}
                        />

                        <input
                            className="bg-slate-500 rounded hover:bg-slate-400 hover:text-slate-500"
                            type="submit"
                            value="Salvar"
                        />
                    </form>

                    <ul></ul>
                </div>
                <div className="w-1/2 bg-white rounded-lg">itens</div>
            </div>
        </div>
    );
}

export default App;
