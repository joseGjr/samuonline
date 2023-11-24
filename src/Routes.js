import React from "react";
import { Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';

export default () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            
           
           
            <Route exact path="/sobre">
                pagina de sobre

            </Route>
        </Routes>
    );
}