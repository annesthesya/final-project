// import './App.css';
import { collection, getDocs, addDoc } from '@firebase/firestore';
import React, { useState, useEffect } from 'react';
import {db} from '../firebase-config'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function OldRegister() {
  const [newName, setNewName] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [newPhone, setNewPhone] = useState<string>("");
  // const [newCreated, setNewCreated] = useState<Date>(newdate);
  const [clients, setClients] = useState<any>([]);
  const clientsCollectionRef = collection(db, "clients");

  const createClient = async () => {
    await addDoc(clientsCollectionRef, {name: newName, email: newEmail, phone: newPhone, created: new Date()});
  };

  useEffect(()=>{
    const getClients = async () =>
    {
      const data = await getDocs(clientsCollectionRef);
      setClients(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      // console.log(data);
    }; 
  getClients();
  }, []);

  return (
    // <div className="App">
    <div>
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => {setNewName(event.target.value)}}></TextField>
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" onChange={(event) => {setNewPhone(event.target.value)}}></TextField>
      <TextField id="outlined-basic" label="Email Address" variant="outlined" onChange={(event) => {setNewEmail(event.target.value)}}></TextField>
      <Button variant="contained" onClick={() => {
    createClient();
  }}>Create Account</Button>

      {clients.map((client) => {
        return (
          <div> 
            {" "}
            <h1>Name: {client.name} </h1> 
            <h1>Email: {client.email} </h1> 
          </div>
        );
      })}
    </div>
  );
}

export default OldRegister;
