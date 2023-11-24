import React, { useState } from "react";
import * as C from "./styles";
import { MdSend } from "react-icons/md";
import { auth, db } from "../../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import SpeechRecognitionComponent from "../../SpeechRecognator/Speech";

const ChatFooter = ({ chatId }) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");
  const [recognizedText, setRecognizedText] = useState(""); // Novo estado para armazenar o texto reconhecido

  const handleSendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      message: message || recognizedText, // Usar o texto reconhecido se a mensagem estiver vazia
      user: user.email,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage("");
    setRecognizedText(""); // Limpar o texto reconhecido após enviar a mensagem
  };

  return (
    <>
     <C.Container>
      <C.Form onSubmit={handleSendMessage}>
        <C.Input
          placeholder="Digite sua mensagem"
          onChange={(e) => setMessage && setRecognizedText (e.target.value)}
          value={message || recognizedText}
        />
        <MdSend onClick={handleSendMessage} />
        <SpeechRecognitionComponent onRecognizedTextChange={setRecognizedText} />
      </C.Form>
    </C.Container>
    </>
  );
};

export default ChatFooter;