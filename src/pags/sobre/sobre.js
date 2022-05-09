import React from "react";
import './sobre.css';
import sobre from '../../img/sobre.mp4';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import sobre_1 from '../../img/sobre_1.jpg';
import sobre_2 from '../../img/sobre_2.jpeg';
import sobre_3 from '../../img/sobre_3.webp';


  
 
  
   

function Sobre () {

   

    return(
        <div className="sobre-corpo">

            <div id='sobre-banner1'/>

            <div id='sobre-bloco1'>
                <div id='sobre-texto'>

                <h5>Sobre Nos</h5>
                    
                    <p>
                        There are many variations of passages of Lorem Ipsum available, 
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

                    <p>
                        There are many variations of passages of Lorem Ipsum available, 
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

                    <p>
                        There are many variations of passages of Lorem Ipsum available, 
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

                <div>
                    <video autoPlay='true' muted loop width={'100%'}> 
                        <source src={sobre} type='video/mp4'/>
                    </video>
                </div>

            </div>

            <div id='sobre-banner2'/>

            <div id='sobre-cards'>

                <h2>Confira nosso trabalho ao decorrer dos anos</h2>
                
                <div id ='sobre-cards-row'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={sobre_1}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    What is Lorem Ipsum?
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={sobre_2}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    What is Lorem Ipsum?
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={sobre_3}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    What is Lorem Ipsum?
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </div>
                
            </div>
        </div>
    )
}

export default Sobre;
    