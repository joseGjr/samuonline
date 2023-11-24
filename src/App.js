import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Login from './pages/Login';

import './App.css';

function App() {

  const [user, setUser] = useState(null);

  const actionLoginDataGoogle =async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar:u.photoURL
    }

    setUser(newUser)

  }


  if (user === null) {
    return (
      <Login onReceiveGoogle={actionLoginDataGoogle} />
    );
  }
  return (

    <BrowserRouter>

      <Header user = {user} />

      <Routes />

      <Footer />
    </BrowserRouter>
  );

}


export default App;
