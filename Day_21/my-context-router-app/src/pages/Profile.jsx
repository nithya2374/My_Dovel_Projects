import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Profile = () => {
  const { user, setUser } = useContext(AppContext);

  return (
    <div className="container">
      <h2>Profile Page</h2>
      <p>Current User: {user}</p>
      <button onClick={() => setUser("Nathiya")}>Change User</button>
    </div>
  );
};

export default Profile;

