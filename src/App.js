import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await fetch("https://api.github.com/users");
    const json = await data.json();
    setUsers(json);
  };

  if (!users) {
    return null;
  }

  return (
    <div className="App">
      <h1>Users</h1>
      <div className="container">
        {users.map((user) => {
          return (
            <div className="userCard" key={user.id}>
              <img
                className="profile-img"
                alt="profile-img"
                src={user.avatar_url}
              />
              <h3>{user.login}</h3>
              <a href={user.html_url}>GitHub</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
