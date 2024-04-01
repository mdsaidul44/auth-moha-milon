import { useContext } from "react"; 
import { AuthContext } from "../AuthProvider/AuthProvider";

  
const Home = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo)
    return (
        <div>
            <h1>This is home for : {authInfo.name}</h1>
        </div>
    );
};

export default Home;