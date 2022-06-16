import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

export default function App() {
  const [user, setUser] = useState();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/onathanmiranda")
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  useEffect(() => {
    if (!user) return;
    axios.get(user.repos_url).then((response) => {
      setRepos(response.data);
    });
  }, [user]);

  return (
    <div>
      {user && (
        <>
          <img src={user.avatar_url} alt={user.name} />
          <h1>{user.login}</h1>
          <h2>{user.name}</h2>
          <p>{user.company}</p>
          <ul>
            {repos.map((repository) => {
              return (
                <li key={repository.id}>
                  <a href={repository.html_url}>
                    <h3>{repository.name}</h3>
                    <p>{repository.description}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </>
      )}
      {!user && <p>Carregando...</p>}
    </div>
  );
}
