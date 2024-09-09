import { Appbar } from "../component/Appbar";
import { Balance } from "../component/Balance";
import { Users } from "../component/User";
import React , {useState,useEffect} from "react";

const Dashboard = () => {
    const [username, setUsername] = useState(''); 

    useEffect(() => {
        // Fetch username from the backend
        fetch('http://localhost:3000/user/name')
            .then((res) => res.json())
            .then((data) => {   
                if (data.username) {
                    setUsername(data.username); // Set username state
                    console.log(data);
                }
            })
    }, []);


  return (
    <div>
      <Appbar username={username} />
      <div className="m-8">
        <Balance value={"10,000"} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;   