import { useState } from 'react';

function App() {
    return (
        <div className="bg-black w-full h-screen flex justify-center itens-center p-2">
            <div className='w-1/4 my-20 bg-white mr-5 rounded-lg'>
              <h1>Cadastrar tarefas</h1>
        
        <form>
              <input type="text" placeholder='Título'/>
              <input type="text" />

              <select>
                <option value="" disabled>Selecione uma categoria</option>
                <option value="Trabaho">trabaho</option>
                <option value="Lazer">lazer</option>
                <option value="Prioridade">prioridade</option>
                <option value="Outros">outros</option>
              </select>
        
                <input type="date"  placeholder='Data'/>
                <input type="text" placeholder='Descrição'/>

                <input type="submit" value="Salvar"/>
              </form>

              <ul>
                
              </ul>
            </div>
            <div className='w-1/2 bg-white rounded-lg'>itens</div>
        </div>
    );
}

export default App;
