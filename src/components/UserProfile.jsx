function UserProfile({ username, age, isAdmin = false }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{username}</h3>
      <p>Age: {age}</p>
      <p>{isAdmin ? "Admin User" : "Regular User"}</p>
    </div>
  );
}

export default UserProfile;