import React from "react";
import { AreaHeader } from "./styled";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../../firebaseConfig";

function Header(props) {
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                console.log('Logout bem-sucedido');
                // Chame a função de navegação passada como propriedade
                props.navigateToLogin('register');
            })
            .catch((error) => {
                console.error('Erro durante o logout:', error);
            });
    };

    return (
        <AreaHeader>
            <div className="container">
                <div className="logo">
                  <img src="../../../Samu-logo.png" alt="SAMU_MOB" />
                </div>
                <nav>
                    <div className="avatar">
                        <img src={props.user.avatar} alt="Avatar do usuário" />
                        <label>{props.user.name}</label>
                    </div>
                    <ul>
                        <li  onClick={handleLogout}>Sair</li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Header;
