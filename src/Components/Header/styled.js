import styled from 'styled-components';

export const AreaHeader = styled.div`
  height: 100px;
  background-color: #040E52;
  display: flex;
  color: white;

  .container {
    padding: 5px 20px;
    display: flex;
    justify-content: space-between ; 
    width: 100%;
    

    .logo {
        flex:1;
        img{
            max-width: 100%;
            max-height: 100%;

        }
    }

 

    nav {
        display:flex;
       ul{
        display:flex;
        align-items:center;

    }
  
    li {
       list-style: none;
       margin-right: 50px;
        
       a{
        text-decoration:none;
        color:white;
        &:hover{
            color:#F7A349;
        }
       }
    }
    .avatar{
        display:flex;
        align-items:center;
    

     
        
        img {
            border-radius:20px;
            width: 5px
            height: 10px;
            heldth:10px;
            border-radius:20px;
            margin-bottom:30px
            margin-right:80px
            cursor:pointer;
        }
        label{
            font-size:14px;
            cursor:pointer
            color: #ccc;
        }
          
      
        @media screen and (max-width: 600px) {
            .container {
              padding: 5px 10px; /* Diminui o padding */
            }
        
            .logo img {
              width: 80px; /* Ajusta o tamanho da imagem */
              margin-bottom: 50px; /* Diminui a margem inferior */
            }
        
            nav {
              li {
                margin-right: 10px; /* Diminui o espaço entre os itens do menu */
              }
            }
        
            .avatar img {
              width: 30px; /* Ajusta o tamanho da imagem */
              height: 30px; /* Ajusta o tamanho da imagem */
              margin-bottom: 5px; /* Diminui a margem inferior */
              margin-right: 10px; /* Diminui a margem direita */
            }
        
            label {
              font-size: 12px; /* Diminui o tamanho da fonte */
            }
          }
        
    
`;