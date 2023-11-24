import React from "react";
import { AreaChat } from "./styled";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";
import ChatHeader from "./ChatHeader";
import Chat from "./ChatTeste";
import ContainerChat from "./containerApp";



export const ChatRoom = () => {
    const [user] = useAuthState(auth);

    return (
        <>
        <ContainerChat/>
        </>
    );
};
export default ChatRoom;