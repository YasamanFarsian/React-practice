import React , {useState} from 'react';
import Card from '../UI/Card';
import classes from './addUser.module.css';
import Button from '../UI/Button';

const AddUser = props =>{
const [userName,setUsername]= useState('');
const [userAge,setUserAge]= useState('');

const addUserHandler = (event) =>{
    event.preventDefault();
    console.log(userName,userAge);

if(userName.trim().length === 0 || +userAge < 1 || userAge.trim().length === 0){
console.log('error darim')
return;
}
setUsername('');
    setUserAge('');
}
const userNameHandler = (event) => {
    setUsername(event.target.value);
}
const userAgeHandler = (event) => {
    setUserAge(event.target.value);
}

return(
    <Card classCssName={classes.input}>
    <form onSubmit={addUserHandler}>
<label htmlFor='user'>UserName</label>
<input type='text' id='user' value={userName} onChange={userNameHandler}/>

<label htmlFor='age'>Age</label>
<input type='number' id='age' value={userAge} onChange={userAgeHandler}/>

<Button type='submit'>Send</Button>
    </form>

    </Card>
)

};
export default AddUser;