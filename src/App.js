import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {


const [users, setUsers] = useState([]);
const [selectedUser, setSelectedUser] = useState(null);


useEffect(() => {
axios.get('https://users-crud1.herokuapp.com/users/')
.then(res => setUsers(res.data))
.catch(err => console.log(err))
},[]);

const getUsers = () => {
  axios.get('https://users-crud1.herokuapp.com/users/')
.then(res => setUsers(res.data))
.catch(err => console.log(err))

}

const addUser = (user) => {
  axios.post('https://users-crud1.herokuapp.com/users/', user)
  .then(() => getUsers())
  .catch(err => console.log(err))


}

const removeUser = (id) => {
  axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
  .then(() => getUsers())
  .catch(err => console.log(err))
}

const editUser = (editedUser) => {
axios.put(`https://users-crud1.herokuapp.com/users/${selectedUser.id}/`, editedUser)
.then(() => getUsers())

}
 
const unselectedUser = () => setSelectedUser(null);

const selectUser = (user) => setSelectedUser(user);

const [isShowing, setIsShowing] = useState(false);


  return (
    <div className="App">
      <h1>Crud Master</h1>
      <button onClick={() => setIsShowing(!isShowing)} className='add-user'><i class="fa-solid fa-plus"></i> Add New User</button>
      {

        isShowing ? 
        <UsersForm addUser={addUser} 
        unselectedUser={unselectedUser} 
        selectedUser={selectedUser}/> : null

      }
       <UsersList 
      removeUser={removeUser}
      users={users} 
      selectUser={selectUser}
      />
    </div>
  );
}

export default App;
