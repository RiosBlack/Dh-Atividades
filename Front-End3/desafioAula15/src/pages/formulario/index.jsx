import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function IndexFormulário() {
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [curso, setCurso] = useState('');
    const [bimestre, setBimestre] = useState('');
    const { id } = useParams();
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);

    const div = 'w-2/5';
    const input = 'w-full px-2 py-1 rounded-lg mb-2';
    const h1 = 'text-lg font-semibold text-slate-300';

    const navigate = useNavigate();

    useEffect(() => {
        id !== '1' ? getEdit() : null;
    }, []);

    function validade() {
        if (nome === '') {
            alert('O campo nome não pode ser vazio.');
            setState(false);
            console.log('if nome');
            return;
        }

        if (matricula === '') {
            alert('O campo matricula não pode ser vazio.');
            setState(false);
            console.log('if matricula');
            return;
        }

        if (curso === '') {
            alert('O campo curso não pode ser vazio.');
            setState(false);
            console.log('if curso');
            return;
        }

        if (bimestre === '') {
            alert('O campo bimestre não pode ser vazio.');
            setState(false);
            console.log('if bimestre');
            return;
        }
        setState(true);
        console.log(state);
        return;
    }

    async function getEdit(e) {
        try {
            const resp = await axios.get(
                `https://api-aluno.vercel.app/aluno/${id}`
            );
            setNome(resp.data.nome);
            setMatricula(resp.data.matricula);
            setCurso(resp.data.curso);
            setBimestre(resp.data.bimestre);
        } catch (e) {
            alert('Erro ao buscar dados');
        }
    }

    async function saveEdit(e) {
        e.preventDefault();
        validade();
        try {
            if (state === true) {
                if (confirm('Quer realmente editar o Aluno?')) {
                    setLoading(true);
                    await axios.put(
                        `https://api-aluno.vercel.app/aluno/${id}`,
                        {
                            nome: nome,
                            matricula: matricula,
                            curso: curso,
                            bimestre: bimestre,
                        }
                    );
                    alert('Aluno editado com sucesso');
                    navigate('/');
                }
            }
        } catch (e) {
            alert(e);
            navigate('/formulario');
        }
    }

    async function save(e) {
        e.preventDefault();
        validade();
        try {
            if (state === true) {
                if (confirm('Quer realmente salvar o formulário?')) {
                    validade();
                    await axios.post('https://api-aluno.vercel.app/aluno', {
                        nome: nome,
                        matricula: matricula,
                        curso: curso,
                        bimestre: bimestre,
                    });
                    alert('Formulário salvo com sucesso');
                    navigate('/');
                }
            }
        } catch (e) {
            alert(e);
            navigate('/formulario');
        }
    }

    return (
        <form
            onSubmit={id !== '1' ? saveEdit : save}
            className="grid justify-items-center"
        >
            <div className={div}>
                <h1 className={h1}>Nome:</h1>
                <input
                    className={input}
                    placeholder="Digite o nome do aluno"
                    type="text"
                    value={nome}
                    onChange={event => setNome(event.target.value)}
                />
            </div>
            <div className={div}>
                <h1 className={h1}>Matricula:</h1>
                <input
                    className={input}
                    placeholder="Digite o numero da matricula"
                    type="text"
                    value={matricula}
                    onChange={event => setMatricula(event.target.value)}
                />
            </div>
            <div className={div}>
                <h1 className={h1}>Curso:</h1>
                <input
                    className={input}
                    placeholder="Digite o nome do curso"
                    type="text"
                    value={curso}
                    onChange={event => setCurso(event.target.value)}
                />
            </div>
            <div className={div}>
                <h1 className={h1}>Bimestre:</h1>
                <input
                    className={input}
                    placeholder="Digite o numero do bimestre"
                    type="text"
                    value={bimestre}
                    onChange={event => setBimestre(event.target.value)}
                />
            </div>
            {loading === false ? (
                <input
                    type="submit"
                    className="bg-green-300 text-slate-800 px-4 py-1 rounded-lg font-bold hover:bg-green-500 hover:text-slate-300"
                    value={'Salvar'}
                />
            ) : (
                <button
                    type="submit"
                    className="bg-green-300 text-slate-800 px-4 py-1 rounded-lg font-bold hover:bg-green-500 hover:text-slate-300 disabled animate-bounce"
                >
                    Enviando...
                </button>
            )}
        </form>
    );
}
