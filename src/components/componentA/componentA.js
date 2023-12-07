import '../componentA/component.css';
import {useEffect, useState} from 'react';
import { addId, deleteId, getdata, updateId } from '../axios/axios';
 const ComponentA =() =>{
   const [users, setUsers] = useState([])
   const getalldata = async() =>{
    const response = await getdata();
    console.log('user: ', response)
    setUsers(response.data);
   };

   const addnewUser = async() =>{
     const payload ={
        "name": "Nithish Kumar",
        "username": "NewBie",
        "email": "officialnithish13@gmail.com",
        "address": {
            "street": "1st Main Road, Mathur, Manali.",
            "city": "Chennai",
            "zipcode": "600068",
            "geo": {
                "lat": "-33.9509",
                "lng": "-74.4618"
            }
        },
        "phone": "9360716755",
        "website": "officialNK.com",
        "company": {
            "name": "startUp-Grow",
            "catchPhrase": "contingency",
            "bs": "synergize scalable supply-chains"
        }
    }
     const newUser= await addId(payload);
     alert('New User Added Check It In Console :)')
     console.log("New User Added:", newUser);
     setUsers((users) => [...users, newUser]);
     };

   const updateUser = async() => {
    const payload ={
      "name": "Nithish Kumar",
      "username": "NewBie",
      "email": "officialnithish13@gmail.com",
      "address": {
          "street": "1st Main Road, Mathur, Manali.",
          "city": "Chennai",
          "zipcode": "600068",
          "geo": {
              "lat": "-33.9509",
              "lng": "-74.4618"
          }
      },
      "phone": "9360716755",
      "website": "officialNK.com",
      "company": {
          "name": "startUp-Grow",
          "catchPhrase": "contingency",
          "bs": "synergize scalable supply-chains"
      }
  }
   const updateUser= await updateId(1, payload);
   alert('User Updated Check It In Console :)')
   console.log("Updated User:", updateUser);
   };

   const deleteUser = async() => {
    const deletedUser= await deleteId(1);
    alert('User Deleted Check It In Console :)')
    console.log("User Deleted:", deletedUser);
   };

   useEffect(() => {
    console.log(users)
   }, [users])
   useEffect(() => {
    getalldata();
   }, [])
    return(
      <div>
        <h1>AXIOS</h1>
        <h1>Users List</h1>
        <button onClick={addnewUser}>Add New User</button>
        <button onClick={updateUser}>Update A User</button>
        <button onClick={deleteUser}>Delete A User</button>
        <div className='container'>{users.map((user, index) => (
          <div className='user' key={index}>
           <div className='name'>Name: {user.name}</div>
           <div className='email'>Username: {user.username}</div>
           <div className='phone'>Phone: {user.phone}</div>
           <div className='email'>Email: {user.email}</div>
          </div>
        ))}</div>
      </div>
    )
 };

 export default ComponentA; 