import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { user } = useContext(AppContext);

  return (
   <div className="container"> 
       <h2>Welcome Home, {user}!</h2>
       <p>This is your personalized HomePage.</p>
   </div>
  );
};

export default Home;
