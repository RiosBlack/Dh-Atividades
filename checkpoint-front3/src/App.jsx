import { useState } from 'react';

function App() {
    return (
        <div className="bg-black w-full h-screen flex justify-center itens-center p-2">
            <div className="w-1/4 my-20 bg-white mr-5 rounded-lg grid justify-center content-center">
                <h1 className="mb-5">Cadastrar tarefas</h1>

                <form className="grid">
                    <input
                        type="text"
                        placeholder="Título"
                        className="border border-slate-400 rounded-md"
                    />
                    <div className="text-xs text-red-600 mb-3">
                        Campo Obrigatório
                    </div>

                    <select className="mb-3 border border-slate-400 rounded-md">
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
                        placeholder="Data"
                    />
                    <input
                        className="mb-3 h-20 text-justify border border-slate-400 rounded-md"
                        type="text"
                        placeholder="Descrição"
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
    );
}

export default App;
