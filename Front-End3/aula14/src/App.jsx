import { useState, useEffect } from 'react'

export default function App() {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  async function getUsers() {
      setLoading(true);
      try {
          const response = await fetch(`https://dummyjson.com/users`);
          const data = await response.json();
          setUsers(data.users);
      } catch (erro) {
          alert('Erro ao buscar dados');
      } finally {
          setLoading(false);
      }
  }

  useEffect(() => {
      getUsers();
  }, []);

  return (
      <div>
          <h1>Usuários</h1>

          {loading === true ? 'Carregando...' : null}

          {loading === false && users.length < 1
              ? 'Nenhum usuário encontrado'
              : null}

          <ul>
              {users.map(user => (
                  <li
                      key={user.id}
                      style={{ border: '1px solid red', marginBottom: 20 }}
                  >
                      <h3>{user.firstName}</h3>
                      <p>{user.age}</p>
                      <p>{user.email}</p>
                      <img src={user.image} width={300} />
                  </li>
              ))}
          </ul>
      </div>
  );
}
