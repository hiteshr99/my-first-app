import UserProfile from "./components/UserProfile";

function Dashboard() {
  return (
    <>
      <h2>User Dashboard</h2>

      <UserProfile username="Hitesh" age={25} isAdmin={true} />
      <UserProfile username="Rahul" age={22} isAdmin={false} />
      <UserProfile username="Ankit" age={28} />
    </>
  );
}

export default Dashboard;