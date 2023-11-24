import styled from 'styled-components';


export const AreaChat = styled.div`

body {
    background-color: #282c34;
  }
  
  .App {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .App header {
    background-color: #181717;
    height: 10vh;
    min-height: 50px;
    color: white;
    position: fixed;
    width: 100%;
    max-width: 600px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
    padding: 10px;
    box-sizing: border-box;
  }
  
  .App section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
    background-color: rgb(40, 37, 53);
  }
  
  main {
    padding: 10px;
    height: 80vh;
    margin: 10vh 0 10vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }
  
  main::-webkit-scrollbar {
    width: 0.25rem;
  }
  
  main::-webkit-scrollbar-track {
    background: #1e1e24;
  }
  
  main::-webkit-scrollbar-thumb {
    background: #6649b8;
  }
  
  form {
    height: 10vh;
    position: fixed;
    bottom: 0;
    background-color: rgb(24, 23, 23);
    width: 100%;
    max-width: 900px;
    display: flex;
    font-size: 1.5rem;
  }

  
  input {
    line-height: 1.5;
    width: 100%;
    font-size: 1.5rem;
    background: rgb(58, 58, 58);
    color: white;
    outline: none;
    border: none;
    padding: 0 10px;
  }
  
 
  
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .sign-in {
    color: #282c34;
    background: white;
    max-width: 400px;
    margin: 0 auto;
  }
  
  ul,
  li {
    text-align: left;
    list-style: none;
  }
  
  p {
    max-width: 500px;
    margin-bottom: 12px;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    color: white;
    text-align: center;
  }
  
  .message {
    display: flex;
    align-items: center;
  }
  
  .sent {
    flex-direction: row-reverse;
  }
  
  .sent p {
    color: white;
    background: #0b93f6;
    align-self: flex-end;
  }
  .received p {
    background: #e5e5ea;
    color: black;
  }
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 2px 5px;
  }


  form .buttonRecordVoice{
    background-color: none;
    border:none;
    outilene:none;
  }
}
`;