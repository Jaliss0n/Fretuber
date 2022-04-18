import * as React from 'react';
import unip from '../../img/unip.jpg';
import unisanta from '../../img/unisanta.jpg';
import esamc from '../../img/esamc.jpeg';
import banner from '../../img/banner.webp';
import './home.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import IconButton from '@mui/material/IconButton';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
    palette: {
      secondary:{
        main:'#44749d'
      }
    }
})

const cidades = ['Santos', 'Guaruja','São Vicente','Itariri'];
const universidades = ['Unip', 'Unisanta','Unimes','Esamc'];

function Home() {


    const [value, setValue] = React.useState(new Date());

    return(
        <div className='geral'>
            <div className="corpo">

                <div id='menu-inicial'>

                    <div id='pesquisa'>
                        <Autocomplete
                            disablePortal
                            options={cidades}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Qual Cidade?" />}
                        />

                        <Autocomplete
                            disablePortal
                            options={universidades}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Qual Faculdade?" />}
                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                                <DatePicker
                                disableFuture
                                label="Data da ida"
                                openTo="year"
                                views={['year', 'month', 'day']}
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>

                        <IconButton aria-label="delete">
                            <SearchSharpIcon />
                        </IconButton>
                    </div>

                    <div id='cards'>
                        <Card sx={{ maxWidth: 345}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={unip}
                                    alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Unip
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={unisanta}
                                    alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Unisanta
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={esamc}
                                    alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Esamc
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                            </CardActions>
                        </Card>
                    </div>

                </div>


                <div id='paragrafo-1'>
                    <p>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected humour, 
                        or randomised words which don't look even slightly believable. If you are going 
                        to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                        hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to 
                        repeat predefined chunks as necessary, making this the first true generator on the 
                        Internet. It uses a dictionary of over 200 Latin words, combined with a handful of 
                        model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated 
                        Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic 
                        words etc.
                    </p>

                    <p>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected humour, 
                        or randomised words which don't look even slightly believable. If you are going 
                        to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                        hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to 
                        repeat predefined chunks as necessary, making this the first true generator on the 
                        Internet. It uses a dictionary of over 200 Latin words, combined with a handful of 
                        model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated 
                        Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic 
                        words etc.
                    </p>

                </div>

                <div id='paragrafo-2'>
                    <p>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected humour, 
                        or randomised words which don't look even slightly believable. If you are going 
                        to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                        hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to 
                        repeat predefined chunks as necessary, making this the first true generator on the 
                        Internet. It uses a dictionary of over 200 Latin words, combined with a handful of 
                        model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated 
                        Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic 
                        words etc.
                    </p>

                    <p>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected humour, 
                        or randomised words which don't look even slightly believable. If you are going 
                        to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                        hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to 
                        repeat predefined chunks as necessary, making this the first true generator on the 
                        Internet. It uses a dictionary of over 200 Latin words, combined with a handful of 
                        model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated 
                        Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic 
                        words etc.
                    </p>
                </div>
            </div>

            <div id='footer'>

                <div id='footer-promocoes'>
                    <p>hThere are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected humour, 
                        or randomised words which don't look even slightly believable. If you are going 
                        to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                        hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to 
                        repeat predefined chunks as necessary, making this the first true generator on the 
                        Internet. It uses a dictionary of over 200 Latin words, combined with a handful of 
                        model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated 
                        Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic 
                        words etc.
                    </p>

                    <img src={banner}/>
                </div>

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
                    
            </div>
        </div>
    );
}



export default Home;