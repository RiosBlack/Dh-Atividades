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

        if (
            titulo === '' ||
            categoria === '' ||
            data === '' ||
            descricao == ''
        ) {
            alert('PREENCHA TODAS AS INFORMAÇÕES');
            return;
        }

        {
            setListaToDo([
                ...listaToDo,
                {
                    id: Date.now(),
                    titulo,
                    categoria,
                    data,
                    descricao,
                },
            ]);
        }

        setTitulo('');
        setCategoria('');
        setData('');
        setDescricao('');
        setId('');
        console.log(id);
    }

    function editarTarefas(e) {
        e.preventDefault();

        if (id) {
            const copiaListaToDo = JSON.parse(JSON.stringify(listaToDo));
            const index = copiaListaToDo.findIndex(tarefa => tarefa.id === id);
            copiaListaToDo[index].titulo = titulo;
            copiaListaToDo[index].categoria = categoria;
            copiaListaToDo[index].data = data;
            copiaListaToDo[index].descricao = descricao;
            setListaToDo(copiaListaToDo);
            console.log(listaToDo);
        }
    }

    //FUNÇÃO EDITAR TAREFA ESTÁ PRONTA MAS NÃO VINCULADA A BOTÕES
    function preencherTarefa(tarefa) {
        setTitulo(tarefa.titulo);
        setCategoria(tarefa.categoria);
        setData(tarefa.data);
        setDescricao(tarefa.descricao);
    }

    //FUNÇÃO APAGAR TAREFA ESTÁ PRONTA MAS NÃO VINCULADA A BOTÕES
    function apagarTarefa(id) {
        if (confirm('Deseja apagar tarefa?')) {
            const result = listaToDo.filter(tarefa => tarefa.id !== id);
            setListaToDo(result);
        }
    }

    return (
        <div className="bg-black w-full h-screen flex justify-center itens-center p-2">
            <div className="w-1/4 my-20 bg-white mr-5 rounded-lg grid justify-center content-center">
                <h1 className="mb-5">Cadastrar Tarefas</h1>
                <div className="w-1/4 bg-white mr-5 rounded-lg">
                    <form
                        className="grid"
                        onSubmit={id ? editarTarefas : addTarefa}
                    >
                        <input
                            value={titulo}
                            placeholder="Título"
                            className="border border-slate-400 rounded-md"
                            onChange={event => setTitulo(event.target.value)}
                        />
                        {titulo === '' ? (
                            <div className="text-xs text-red-600 mb-3">
                                Campo Obrigatório
                            </div>
                        ) : (
                            <div className="mb-3"></div>
                        )}

                        <select
                            className="mb-3 border border-slate-400 rounded-md"
                            value={categoria}
                            onChange={event => setCategoria(event.target.value)}
                        >
                            <option value="" disabled>
                                Selecione uma categoria
                            </option>
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
                            onChange={event => setData(event.target.value)}
                        />
                        <input
                            className="mb-3 h-20 text-justify border border-slate-400 rounded-md"
                            value={descricao}
                            placeholder="Descrição"
                            onChange={event => setDescricao(event.target.value)}
                        />

                        <input
                            className="bg-slate-500 rounded hover:bg-slate-400 hover:text-slate-500"
                            type="submit"
                            value={id ? 'Salvar' : 'Cadastrar Tarefa'}
                        />
                    </form>
                </div>
            </div>
            <div className="w-1/2 bg-white rounded-lg p-2">
                <h1>Minhas Tarefas</h1>
                <ul className="w-full bg-orange-500 rounded-md">
                    {listaToDo.map(tarefa => (
                        <Tarefas
                            editar={() => preencherTarefa(tarefa)}
                            excluir={() => apagarTarefa(tarefa.id)}
                            key={Tarefas.id}
                            titulo={tarefa.titulo}
                            categoria={tarefa.categoria}
                            data={tarefa.data}
                            descricao={tarefa.descricao}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
