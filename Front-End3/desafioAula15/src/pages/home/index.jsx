import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function IndexHome() {
    const h2 = 'font-bold flex mb-1';
    const p = 'font-normal pl-2';

    const navigate = useNavigate();

    const [data, setdata] = useState([]);

    async function getdata() {
        try {
            const resp = await axios.get('https://api-aluno.vercel.app/aluno');
            setdata(resp.data);
        } catch (e) {
            alert('Erro ao buscar dados');
        }
    }

    async function deleteData(resposta) {
        try {
            if (
                confirm(
                    `Quer realmente excluir o aluno ${JSON.stringify(
                        resposta.nome
                    )}`
                )
            ) {
                await axios.delete(
                    `https://api-aluno.vercel.app/aluno/${resposta._id}`
                );
                getdata();
                alert('Aluno excluido com sucesso');
            }
        } catch (e) {
            alert('Não foi possivel excluir o aluno');
        }
    }

    function sendData(id) {
        navigate(`/formulario/${id}`);
    }

    useEffect(() => {
        getdata();
    }, []);

    return (
        <>
            <div className="w-full overflow-y-scroll">
                <button
                    onClick={() => navigate('/formulario/1')}
                    className="bg-cyan-400 rounded-md p-1 px-2 font-semibold text-sm text-slate-50 hover:bg-cyan-600 mb-2 ml-2 animate-pulse"
                >
                    Cadastrar novo aluno
                </button>
                <ul className="p-2 grid grid-cols-3 gap-3">
                    {data.map(resposta => (
                        <li
                            key={resposta._id}
                            className="mb-2 border border-orange-700 p-2 bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg"
                        >
                            <h2 className={h2}>
                                Nome: <p className={p}>{resposta.nome}</p>
                            </h2>
                            <h2 className={h2}>
                                Matrícula:
                                <p className={p}>{resposta.matricula}</p>
                            </h2>
                            <h2 className={h2}>
                                Curso: <p className={p}>{resposta.curso}</p>
                            </h2>
                            <h2 className={h2}>
                                Bimestre:
                                <p className={p}>{resposta.bimestre}</p>
                            </h2>
                            <div>
                                <button
                                    onClick={() => sendData(resposta._id)}
                                    className="bg-green-400 rounded-md p-1 px-3 font-semibold text-sm text-slate-50 hover:bg-green-600 mr-2"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => deleteData(resposta)}
                                    className="bg-red-400 rounded-md p-1 px-2 font-semibold text-sm text-slate-50 hover:bg-red-600"
                                >
                                    Apagar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
