import React from "react";
import TextField from '@mui/material/TextField';
import car from '../../img/car.mp4';
import { useForm , Controller} from "react-hook-form";
import './login.css'


function Login () {

    const{control, handleSubmit} = useForm()
    const onSubmit = data => console.log(data)

    return(
        <div id="login-geral">

            <video autoPlay='true' muted loop>
                <source src={car} type='video/mp4' />
            </video>

            <div id="cx-login">
                <div id='cx-login-top'>
                    <h4>Acesso</h4>
                </div>
                <form id='cx-login-menu' onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name='loginUsuario'
                        control={control}
                        render={({field: {onChange,value} }) => (
                            <TextField id="filled-basic" label="Login" variant="filled" 
                            onChange={(data) => {
                                onChange(data) 
                                return data
                            }}/>

                        )}
                    />

                    <Controller
                        name='senhaUsuario'
                        control={control}
                        render={({field: {onChange,value} }) => (
                            <TextField id="filled-basic" label="Senha" variant="filled"
                            onChange={(data) => {
                                onChange(data) 
                                return data
                            }}/>

                        )}
                    />



                    <button className="btn-login" type="submit">Login</button>
                    <h5>Novo por aqui? Crie um Login click <a>aqui</a></h5>
                </form>
                
            </div>
            
        </div>
    )
}

export default Login;