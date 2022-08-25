import "./App.css";
import { useState, useEffect } from "react";
import UsersContainer from "./usersContainer";
import UserDetails from "./userDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [user, setUser] = useState(null);
  const [favs, setFavs] = useState(null);

  useEffect(() => {
    fetch(`https://randomuser.me/api?seed=00000&page=${page}&results=10`)
      .then((response) => response.json())
      .then((parsedResponse) => setUsers(parsedResponse.results));
  }, [page]);

  const addFavourite = (e, id, username) => {
    if (!id) return;
    const favourites = JSON.parse(localStorage.getItem("favourites"));

    if (e.target.checked) {
      if (favourites === null) {
        localStorage.setItem("favourites", JSON.stringify([{ id, username }]));
        setFavs([{ id, username }]);
      } else {
        favourites.push({ id, username });
        localStorage.setItem("favourites", JSON.stringify(favourites));
        setFavs(favourites);
      }
    } else {
      const newFavs = favourites.filter((f) => f.id !== id);
      localStorage.setItem("favourites", JSON.stringify(newFavs));
      setFavs(newFavs);
    }
  };

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites"));
    if (favourites === null) {
      setFavs([]);
    } else {
      setFavs(favourites);
    }
  }, []);

  return (
    <div className="App">
      {!user && favs && (
        <UsersContainer
          users={users}
          page={page}
          setPage={setPage}
          setUser={setUser}
          addFavourite={addFavourite}
          favs={favs}
        />
      )}
      {user && <UserDetails user={user} setUser={setUser} />}
    </div>
  );
}

export default App;
