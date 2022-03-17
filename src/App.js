import './App.css';
import UserCard from './Components/UserCard';
import Users from './Components/Users';

function App() {

  let persons = [
    {name:"Dali", email:"dali@gmail.com", phone:123456},
    {name:"Othmen", email:"othmen@gmail.com", phone:1111111},
    {name:"Ghassen", email:"ghassen@gmail.com", phone:22222},
  ]

  let name = "Jack"

  const Speak = () => {
    alert('hello')
  }

  return (
    <div className="App">
      {/* <UserCard name={name} email='jack@gmail.com' phone={"123456"} age={25} say={Speak} > */}
      {/* <UserCard  age={25} say={Speak} > */}
        {/* <h1>Welcome</h1>
      </UserCard> */}
      <Users persons={persons} />
    </div>
  );
}

export default App;
