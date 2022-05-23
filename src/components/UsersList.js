import React from 'react';
import './UsersList.css';

const UsersList = ({ users, removeUser,selectUser }) => {
    
  
    return (
        <ul className='card-container'>
            {
                users.map(user => (
                    <li key={user.id} className='card'>
                        <h2>{user.first_name}, {user.last_name}</h2>
                        <h3>Email</h3>
                        <p><i class="fa-solid fa-envelope"></i> {user.email}</p>
                        <h3>Birthday</h3>
                        <p> <i className="fa-solid fa-cake-candles cake"></i> {user.birthday}</p>
                        <button onClick={() => removeUser(user.id)} className='delete'><i className="fa-solid fa-user-xmark"></i></button>
                        <button onClick={() => selectUser(user)}   className='edit'><i className="fa-solid fa-user-pen"></i></button>
                       
                    </li> 
                    
                ))
              
            }
            
        </ul>
            
    
    );
};

export default UsersList;