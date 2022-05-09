import React, {useState} from 'react';
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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm , Controller} from "react-hook-form";
import Teste from '../teste/teste';




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
    const { control, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    return(
        <div className='geral'>
            <div className="corpo">

                <div id='menu-inicial'>

                    <div id='pesquisa'>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                name='cidadeSelecionada'
                                control={control}
                                render={({field: {onChange, value } }) => (
                                    <Autocomplete
                                        disablePortal
                                        id='selecaoCidade'
                                        options={cidades}
                                        sx={{ width: 300 }}
                                        renderInput={(params) => 
                                            <TextField 
                                                {...params} 
                                                label="Qual Cidade?" 
                                                inputProps={{
                                                    ...params.inputProps,
                                                    autoComplete: "disabled" // disable autocomplete and autofill
                                                }}
                                            />
                                        }
                                        onChange={(_,data) => {
                                            onChange(data);
                                            return data;
                                        }}
                                    />
                                )}
                            />

                            <Controller
                                name='facuSelecionada'
                                control={control}
                                render={({field: {onChange, value } }) => (
                                    <Autocomplete
                                        disablePortal
                                        options={universidades}
                                        sx={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="Qual Faculdade?" />}
                                    
                                        onChange={(_,data) => {
                                            onChange(data);
                                            return data;
                                        }}
                                    />
                                )}
                            />

                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack spacing={3}>
                                <Controller
                                    name='dataSelecionada'
                                    control={control}
                                    render={({field: {onChange, value} }) =>(
                                        <DatePicker
                                            label="Data da ida"
                                            openTo="year"
                                            views={['year', 'month', 'day']}
                                            value={value}
                                            
                                            renderInput={(params) => <TextField {...params} />} 
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                                onChange(newValue);
                                                return newValue;

                                            } }
                                            
                                        />
                                    )}
                                    
                                />
                                </Stack>
                            </LocalizationProvider>
                          
                            <IconButton
                                aria-label="delete"
                                onClick={() => console.log('CLOKADA')}
                                type='submit'
                            >
                                <SearchSharpIcon />
                            </IconButton>
                              
                        </form>
                        
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

                
                    
            </div>
        </div>
    );
}



export default Home;