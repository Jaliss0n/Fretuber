import React from "react";
import TextField from '@mui/material/TextField';
import car from '../../img/car.mp4';
import './login.css'


function Login () {
    return(
        <div id="login-geral">

            <video autoPlay='true' muted loop>
                <source src={car} type='video/mp4' />
            </video>

            <div id="cx-login">
                <div id='cx-login-top'>
                    <h4>Acesso</h4>
                </div>
                <div id='cx-login-menu'>
                    <TextField id="filled-basic" label="Login" variant="filled" />
                    <TextField id="filled-basic" label="Senha" variant="filled" />
                    <button className="btn-login" >Login</button>
                    <h5>Novo por aqui? Crie um Login click <a>aqui</a></h5>
                </div>
                
            </div>
            
        </div>
    )
}

export default Login;