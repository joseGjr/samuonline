import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Api from "../../Api";
import { Container } from '../Login/styled';
import { BtnDefault, BtnDefautIcons } from "../../Components/Styled";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';




export default ({onReceiveGoogle}) => {

   

    const actionLoginGoole = async () =>{
      let result = await Api.googleLogar();

      if (result) {
        onReceiveGoogle(result.user);
        
      } else{
        alert('Error');
      }
    }

    

    return (
        <BrowserRouter>
            <Routes >

                <Route exact path="/registrar" element={
                    <Container>
                        <img src="../../../Samu-logo.png" alt="SAMU_MOB " />
                        <h1 className="organize">
                            <Link to="/"><NavigateBeforeIcon /></Link>
                            Crie sua conta</h1>
                        <p>
                            Crie sua conta, é gratuita!
                        </p>
                        <form>
                            <div className="form-imput">
                                <label>Nome </label>
                                <input type="text" />

                            </div>
                            <div className="form-imput">
                                <label>E-mail </label>
                                <input type="email" />

                            </div>

                            <div className="form-imput">
                                <label>Senha </label>
                                <input type="password" />
                        

                            </div>
                            <BtnDefault>
                                Comece agora!
                            </BtnDefault>
                            <div className="footerLogin">
                            Já possui contar ?
                            <Link to="/"> faça o Login</Link>
                        </div>
                        </form>
                    </Container>
                }>
                </Route>

                <Route exact path="*" element={
                    <Container>

                        <img src="../../../Samu-logo.png" alt="SAMU_MOB " />
                        
                        <BtnDefautIcons>

                            <FacebookIcon />
                            <div className="center"> Fazeer login com o Facebook</div>
                        </BtnDefautIcons>

                        <BtnDefautIcons onClick={actionLoginGoole}>
                            <GoogleIcon />
                            <div className="center"> Fazer login com o Google </div>
                        </BtnDefautIcons>
                        <p>
                            OU
                        </p>
                        <form>
                            <div className="form-imput">
                                <label>E-mail </label>
                                <input type="email" />

                            </div>

                            <div className="form-imput">
                                <label>Senha </label>
                                <input type="password" />

                            </div>
                            <BtnDefault>
                                Entrar
                            </BtnDefault>
                        </form>

                        <div className="footerLogin">
                            Não possui cadastro?
                            <Link to="/registrar"> Registre-se</Link>
                        </div>

                    </Container>
                }>
                </Route>

            </Routes>

        </BrowserRouter>
    );
}