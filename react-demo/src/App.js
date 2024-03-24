import './App.css';
import UserProfile from "./UserProfile";
import {useState, useEffect} from "react";

const users = [{
    name: "vaishnav", age: 25, gender: "men"
}, {
    name: "aditya", age: 22, gender: "women"
}, {
    name: "nanya", age: 13, gender: "women"
},]

const Users = () => (
    <div>
        {users.map((user, index) => (
            <UserProfile
                key={index}
                name={user.name}
                age={user.age}
                gender={user.gender}
                indexNumber={index}
            />
        ))}
    </div>
)

function App() {

    const [counter, setCounter] = useState(0);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setIsLoading(false)
        }, 4000)
    }, []);

    if (isLoading){
        return "loading..."
    }

    return (
        <div>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>
                increment counter
            </button>
            <h1>{counter}</h1>
            <Users/>
        </div>
    );
}

export default App;
