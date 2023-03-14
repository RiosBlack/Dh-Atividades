import { useState } from 'react';

function App() {
    return (
        <div className="bg-black w-full h-screen flex justify-center itens-center p-2">
            <div className='w-1/4 my-20 bg-white mr-5 rounded-lg'>
              <h1>Cadastrar tarefas</h1>
              <input type="text" />
            </div>
            <div className='w-1/2 bg-white rounded-lg'>itens</div>
        </div>
    );
}

export default App;
