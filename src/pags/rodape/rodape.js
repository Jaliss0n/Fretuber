import React from 'react';
import './rodape.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';


const theme = createTheme({
    palette: {
      secondary:{
        main:'#44749d'
      }
    }
})

function Rodape () {

    return (
        <div id='footer-menu'>
            <div id='footer-links'>
                <p>
                    There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected humour, 
                    or randomised words which don't look even slightly believable.
                </p>
            
                <ul>
                    <l1>Sobre nos</l1>
                    <li>Abreviaturas</li>
                    <l1>Curiosidades</l1>
                    <li>Palavra do dia</li>
                </ul>
                <ul>
                    <l1>Sobre nos</l1>
                    <li>Abreviaturas</li>
                    <l1>Curiosidades</l1>
                    <li>Palavra do dia</li>
                </ul>
                <ul>
                    <l1>Sobre nos</l1>
                    <li>Abreviaturas</li>
                    <l1>Curiosidades</l1>
                    <li>Palavra do dia</li>
                </ul>
                
            </div>
            <hr/>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>

                <h4>© 2022 - Jalisson Santos, Apenas um estudante tentando conseguir uma chance no mercado de trabalho.</h4>

                <ThemeProvider theme={theme}>

                    <IconButton size='large' color='secondary'>
                        <FacebookIcon/>
                    </IconButton>
                    <IconButton size='large' color='secondary'>
                        <InstagramIcon/>
                    </IconButton>
                    <IconButton size='large' color='secondary'>
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton size='large' color='secondary'>
                        <TwitterIcon/>
                    </IconButton>
                    <IconButton size='large' color='secondary'>
                        <WhatsAppIcon/>
                    </IconButton>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Rodape;