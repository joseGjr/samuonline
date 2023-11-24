import styled from 'styled-components';



export const BtnDefautIcons = styled.button`
    display:flex;
    align-items: center;
    padding:10px;
    width: 100%;
    border-radius:5px;
    border:0px;
    outline:none;
    font-size:16px;
    font-weight:bold;
    margin-bottom:15px;
    transition: 0.4s;
    color:#040E52;
    

    &:hover{
        color:#F7A349;
        
    }
    .center{
        text-align:center;
        width:100%
    }
`;
export const BtnDefault = styled(BtnDefautIcons)`
    backgroud-color:#7d2ae8;
    color:#040E52;;
    display:inline;

    &:houver{
        backgroud-color: #4e129c;
    }

`;