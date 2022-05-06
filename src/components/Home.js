import React from 'react'
import { Typography, Card, CardActions, CardContent, CardMedia, Button, Grid, Container, CssBaseline } from '@material-ui/core';
import { shadows } from '@mui/system';
// import { PhotoCamera } from '@material-ui/icons';
// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   container:{
//     backgroundColor: theme.pallette.background.paper,
//     padding: theme.spacing(8,0,6)
//   }

// }));

const Cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Home = () => {

    // const classes = useStyles();

    return (
        <>
            <CssBaseline />

            <div style={{ marginTop: '30px' }}>
                <Container maxWidth="sm">
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Galleria</Typography>
                    <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        Hello everyone, this is a blog-photo album!
                    </Typography>
                    <div>
                        <Grid container spacing={2} justify='center' style={{ marginTop: '20px'}}>
                            <Grid item>
                                <Button variant='contained' color='Primary' style={{color:'white' }}>
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='Primary'>
                                    See pictures
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container maxWidth='md' style={{ padding: "50px 0" }}>
                <Grid container spacing={4}>
                    {Cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card 
                            style={{ 
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius:'18px',
                                boxShadow: 'rgba(0, 0, 0, 0.24) 3px 7px 12px'
                                }}>
                                <CardMedia image='https://source.unsplash.com/random' title='image title' style={{ paddingTop: '56.25%' }} />
                                <CardContent style={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant='h5'>
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use it to describe the content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        View
                                    </Button>
                                    <Button size='small' color='primary'>
                                        Edit
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default Home;

