import UserProfile from "./UserProfile";
import { useState, useEffect } from "react";

const users = [
  {
    name: "Vaishnav",
    age: 24,
    gender: "Male",
  },
  {
    name: "Chotya",
    age: 21,
    gender: "Male",
  },
  {
    name: "Omkar",
    age: 24,
    gender: "Male",
  },
];

const UserProfiles = () => (
  <div>
    {users.map((user, index) => {
      return (
        <UserProfile key={index} name={user.name} age={user.age}></UserProfile>
      );
    })}
  </div>
);

function App() {
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (loading) {
    return "loading...!";
  }

  return (
    <div>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 2)}>
        Increament Counter
      </button>
      <h1>{counter}</h1>
      <UserProfiles />
    </div>
  );
}

export default App;
