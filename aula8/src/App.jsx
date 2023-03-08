import { useState } from 'react';

function App() {
    const [inputName, setInputName] = useState('');
    const [inputIdade, setInputIdade] = useState();
    const [inputPokemon, setInputPokemon] = useState('');
    const [lista, setLista] = useState([]);

    function add() {
        const user = {
            name: inputName,
            idade: inputIdade,
            pokemon: inputPokemon,
        };
        setLista([...lista, add]);
        setInputIdade('');
        setInputName('');
        setInputPokemon('');
    }

    return (
        <div>
            <h1>Formulário aula 8</h1>
            <div>
                <input
                    placeholder="Nome"
                    value={inputName}
                    onChange={e => {
                        setInputName(e.target.value);
                    }}
                />
                <input
                    placeholder="Idade"
                    value={inputIdade}
                    onChange={e => {
                        setInputIdade(e.target.value);
                    }}
                />
                <input
                    placeholder="Pokemon Favorito"
                    value={inputPokemon}
                    onChange={e => {
                        setInputPokemon(e.target.value);
                    }}
                />
                <button type="button" onClick={add}>
                    Enviar
                </button>
            </div>

            <div>
                <h2>Resultados:</h2>
                <ul>
                    {lista.map(item => (
                        <li>
                            Nome: {item.name} - Idade: {item.idade} - Pokemon
                            Favorito: {item.pokemon}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
