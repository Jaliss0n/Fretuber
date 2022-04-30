import React from "react";
import './cadastro.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import cadastro_img from '../../img/cadastro.jpg'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Cadastro () {

    return(
        <div id='cadastro-backgroud'>
            <img src={cadastro_img}/>
            <div id="cadastro-geral">

                <div id='cadastro-geral-top'>
                    <h1>Cadastro de Usuario</h1>
                </div>

                <div id='cadastro-formulario'>
                    

                    <TextField
                        required
                        id="filled-required"
                        label="Digite um Login"
                        variant="filled"
                    />
                    <TextField
                        required
                        type='password'
                        id="filled-disabled"
                        label="Crie uma senha"
                        variant="filled"
                    />
                    <TextField
                        required
                        type='password'
                        id="filled-disabled"
                        label="Repita a senha"
                        variant="filled"
                    />
                    <TextField
                        required
                        id="filled-required"
                        label="Digite seu E-mail"
                        variant="filled"
                    />
                    <div>
                        <h5>
                            <Checkbox {...label} defaultChecked />
                            Voce concorda com os termos de usuario?
                        </h5>

                        <div>
                            <button className="btn-login">Enviar</button>
                        </div>
                    </div>

                    

                </div>                       
            </div>
        </div>
       
    )
}

export default Cadastro;