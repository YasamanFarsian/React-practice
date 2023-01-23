import AddUser from "./component/User/addUser";
import UserList from './component/User/userList'
import './App.css';
import Card from "./component/UI/Card";
function App() {
  return (
    <Card>
   <AddUser/>
   <UserList users={[]}/>
   </Card>
  );
}

export default App;
