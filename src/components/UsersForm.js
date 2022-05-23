import React from 'react';
import { useEffect, useState } from 'react';
import './UsersForm.css';

const UsersForm = ({addUser, selectedUser, unselectedUser, editUser}) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');

    
useEffect(() => {
    if(selectedUser !== null) { 
        setName(selectedUser.first_name);
        setLastName(selectedUser.last_name);
        setEmail(selectedUser.email);
        setPassword(selectedUser.password);
        setBirthday(selectedUser.birthday);
    } else {
        
        reset()
    }

}, [selectedUser])



    const submit = (e) => {
        e.preventDefault();

        const user = {
            id: Date.now(),
            first_name: name,
            last_name: lastName,
            email: email,
            password: password,
            birthday: birthday

        }
        if(selectedUser === null) {
            addUser(user);
             reset();
        } else {
            editUser(user);
            unselectedUser();
        }
    

    }

    const reset = () => {
        setName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setBirthday('');
    }




    return ( 
      <form className='form' onSubmit={submit}>
        <div className='form-control first-name'>
            <h2>New User</h2>
            <label><i class="fa-solid fa-user"></i></label>
            <input 
            onChange={(e) => setName(e.target.value)} 
            value={name} 
            type="text" 
            placeholder='First Name'
             />
        </div>
        <div className='form-control last-name'>
            <label></label>
            <input 
            onChange={(e) => setLastName(e.target.value)} 
            type="text" 
            value={lastName}
            placeholder='Last Name'
            />
        </div>
        <div className='form-control email'>
            <label><i class="fa-solid fa-envelope"></i></label>
            <input 
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Email'
            />
        </div>
        <div className='form-control'>
            <label><i class="fa-solid fa-key"></i></label>
            <input 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Password'
            type="password" />
            
        </div>
        <div className='form-control'>
            <label><i class="fa-solid fa-cake-candles"></i></label>
            <input 
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
            type="date" 
            placeholder='Birthday'
            />
        </div>
        <button>Submit</button>
      </form>
    );
};

export default UsersForm;