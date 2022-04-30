import logo from '../../img/logo.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './cabecalho.css';

const theme = createTheme({
  palette: {
    secondary:{
      main:'#44749d'
    }
  }
})

function Cabecalho() {
  return (
    <div>
      <header id="cabecalho">
        <a href='/'><img src={logo} width='120px' height='70px' /></a>
        
        <ThemeProvider theme={theme}>
          <button className='btn-cabecalho'>Buscar</button>
          <button className='btn-cabecalho'>Promoções</button>
          <button className='btn-cabecalho'><a href='/sobre'>Quem Somos</a></button>

          <aside id='login'>
            <button className='btn-cabecalho-att'><a href='/login'>Login</a></button>
            <button className='btn-cabecalho-att'><a href='/cadastro'>Cadastre-se</a></button>
          </aside>
        </ThemeProvider>
        
      </header>
    </div>
  );
}

export default Cabecalho;
