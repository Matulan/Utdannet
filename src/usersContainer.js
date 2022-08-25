import "./App.css";

function UsersContainer({ users, page, setPage, setUser, addFavourite, favs }) {
  return (
    <>
      <div className="container">
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>Email</th>
                <th>Profile</th>
                <th>Age</th>
                <th>Favourite</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>
                    <button
                      className="user-button"
                      onClick={() => setUser(user)}
                    >
                      {" "}
                      {user.name.first} {user.name.last}{" "}
                    </button>
                  </td>
                  <td>{user.location.city}</td>
                  <td>{user.email}</td>
                  <td>
                    <img src={user.picture.thumbnail} alt="" />
                  </td>
                  <td>{user.dob.age}</td>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        addFavourite(e, user.login.uuid, user.login.username)
                      }
                      checked={
                        typeof favs.find((f) => f.id === user.login.uuid) !==
                        "undefined"
                          ? true
                          : false
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="button-container">
            <button
              className="prev-button bottom-buttons"
              disabled={page === 1 ? true : false}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
            <button
              className="next-button bottom-buttons"
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
        <div className="basic-card basic-card-lips height">
          <div className="card-content">
            <span className="card-title">Favourites</span>
            <div className="card-container">
              {favs.map((fav) => (
                <span class="card-heading">{fav.username}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersContainer;
