import styled from "styled-components";
import { AreaHeader } from "../../Components/Header/styled";

export const Container = styled.div`

background-color:#040E52;
padding:30px;
max-width:300px;
margin:auto;
margin-top: 3px;
text-align:center;
border-radius:5px;
box-shadow:0px 0px 10px #ccc;
color:white;


h1{
    font-size:24px;
    color:red;
}
.form-input{
    text-align:left;
    

    
    }
    label{
        display: block;
        text-align:left;
        
    }
    input{
        margin-bottom: 20px;
        padding: 10px;
        font-size: 12px;
        outline: none;
        border:1px solid black;
        border-radius:5px;
        width:280px;
        transition:0.3s;

        &:hover{
            border:1px solid #F7A349;
        }
}
p{
    color:white;
    font-size: 10px;
}
.footerLogin{

    a{
        font-weight:bold;
        margin-left:5px
        color:#F7A349;
        cursor:pointer;
        text-decoration:none;
        color:red;
    
        &:hover{
            color:#F7A349;
        }
    }
    
}
.organize{
    display:flex;
    a{
        color:#F7A349;
    }
}
`;
