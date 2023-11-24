import React, { useEffect, useState } from "react";
import * as C from "../containerApp/styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../services/firebase";
import Login from "../Login";
import Loading from "../Loading";
import ChatTeste from "../ChatTeste";
import Sidebar from '../SideBar'

const ContainerChat = () => {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <Login />;

  return (
    <C.Container>
      <Sidebar setUserChat={setUserChat} userChat={userChat} />
      <ChatTeste userChat={userChat} />
      
    </C.Container>
  );
};

export default ContainerChat;
