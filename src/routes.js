import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cabecalho from './pags/cabecalho/cabecalho';
import Home from './pags/home/home';
import Login from './pags/login/login';


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;