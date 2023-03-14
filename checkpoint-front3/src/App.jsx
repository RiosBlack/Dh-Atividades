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
        }

        setTitulo('');
        setCategoria('');
        setData('');
        setDescricao('');
        setId('');
    }

    //FUNÇÃO EDITAR TAREFA ESTÁ PRONTA MAS NÃO VINCULADA A BOTÕES
    function preencherTarefa(tarefa) {
        setId(tarefa.id);
        setTitulo(tarefa.titulo);
        setCategoria(tarefa.categoria);
        setData(tarefa.data);
        setDescricao(tarefa.descricao);
    }

    //FUNÇÃO APAGAR TAREFA ESTÁ PRONTA MAS NÃO VINCULADA A BOTÕES
    function apagarTarefa(id) {
        if (titulo || categoria || data || descricao) {
            alert('Por favor salvar informações para após excluir.');
            return;
        }

        if (confirm('Deseja apagar tarefa?')) {
            const result = listaToDo.filter(tarefa => tarefa.id !== id);
            setListaToDo(result);
        }

        console.log(id);
    }

    return (
        <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black w-full h-screen flex justify-center items-center p-2">
            <div className="w-1/5 h-2/4 bg-gradient-to-b from-rose-100 to-teal-100 mr-5 rounded-lg grid justify-center content-center">
                <h1 className="mb-5 text-lg font-bold grid justify-center">
                    {id ? 'Editar tarefas' : 'Cadastrar Tarefas'}
                </h1>
                <form
                    className="w-full h-full grid overflow-hidden"
                    onSubmit={id ? editarTarefas : addTarefa}
                >
                    <input
                        value={titulo}
                        placeholder="Título"
                        className="border border-slate-400 rounded-md placeholder:text-sm  border-orange-300 "
                        onChange={event => setTitulo(event.target.value)}
                    />
                    {titulo === '' ? (
                        <div className="text-xs text-red-600 mb-3 animate-pulse">
                            Campo Obrigatório
                        </div>
                    ) : (
                        <div className="mb-3"></div>
                    )}

                    <select
                        className="mb-3 border border-slate-400 rounded-md placeholder:text-sm  border-orange-300"
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
                        className="mb-3 border border-slate-400 rounded-md placeholder:text-sm  border-orange-300"
                        type="date"
                        value={data}
                        placeholder="Data"
                        onChange={event => setData(event.target.value)}
                    />
                    <textarea
                        className="mb-3 h-20 text-justify border border-slate-400 rounded-md placeholder:text-sm border-orange-300 align-top resize-none"
                        value={descricao}
                        type="area"
                        placeholder="Descrição"
                        onChange={event => setDescricao(event.target.value)}
                    />

                    <input
                        className="bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 rounded-md hover:brightness-50 cursor-pointer font-semibold text-white hover:animate-pulse"
                        type="submit"
                        value={id ? 'Salvar' : 'Cadastrar Tarefa'}
                    />
                </form>
            </div>
            <div className="w-1/2 h-5/6 bg-gradient-to-b from-rose-100 to-teal-100 rounded-lg p-2 justify-items-center overflow-hidden">
                <h1 className="text-lg font-bold">Minhas Tarefas</h1>
                <ul className="w-full h-24">
                    {listaToDo.map(tarefa => (
                        <Tarefas
                            editar={() => preencherTarefa(tarefa)}
                            excluir={() => apagarTarefa(tarefa.id)}
                            key={tarefa.id}
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
