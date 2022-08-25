import "./App.css";

function UserDetails({ user, setUser }) {
  return (
    <div className="detail-container">
      <button
        className="next-button bottom-buttons"
        onClick={() => setUser(null)}
      >
        Back
      </button>
      <div className="basic-card basic-card-lips">
        <div className="card-content">
          <span className="card-title">User Details</span>
          <div className="card-container">
            <span className="card-heading">Name</span>
            <p class="card-text">
              {user.name.first} {user.name.last}{" "}
            </p>
            <span class="card-heading">City</span>
            <p class="card-text">{user.location.city}</p>
            <span class="card-heading">Email</span>
            <p class="card-text">{user.email}</p>
            <span class="card-heading">Profile</span>
            <p class="card-text">
              <img src={user.picture.thumbnail} alt="" />
            </p>
            <span class="card-heading">Age</span>
            <p class="card-text">{user.dob.age}</p>
            <span class="card-heading">UserName</span>
            <p class="card-text">{user.login.username}</p>
            <span class="card-heading">Full Address</span>
            <p class="card-text">
              {user.location.street.number},&nbsp;&nbsp;
              {user.location.street.name},&nbsp;&nbsp;
              {user.location.city},&nbsp;&nbsp;{user.location.state}
              ,&nbsp;&nbsp;{user.location.country}
              ,&nbsp;&nbsp;{user.location.postcode}
            </p>
            <span class="card-heading">Date of Birth</span>
            <p class="card-text">
              {new Date(user.dob.date).toLocaleDateString("no-NO", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <span class="card-heading">Registration Date</span>
            <p class="card-text">
              {new Date(user.registered.date).toLocaleDateString("no-NO", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <span class="card-heading">Unique ID</span>
            <p class="card-text">{user.login.uuid}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
