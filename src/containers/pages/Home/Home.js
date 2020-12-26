import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button, makeStyles, Typography } from '@material-ui/core';
import logo from '../../../img/logo.png'


const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
    },
    mt:{
        marginTop:'20px',
    },
    btnNormal: {
        width: '110px',
        height: '47px',
        background: '#66bd52',
        borderRadius: '10px',
        color: 'white',
        '&:hover': {
            backgroundColor: '#32F74D',
        }
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div style={{ background: '#232323' }}>
            <Container maxWidth="lg" >
                <Grid container component="main" alignItems='center' className={classes.root}>
                    <Grid item xs={false} sm={4} md={7}>
                        <img
                            src={logo}
                            width='80%'
                            alt='logo'
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} elevation={6} square style={{ color: 'white' }}>
                        <Typography variant="h1" component="h1">
                            "
                        </Typography>
                        <Typography variant="h3" component="h3">
                            DOOSOFT
                        </Typography>
                        <Typography variant="h3" component="h3" className={classes.mt}>
                            CTO AS SERVICE
                        </Typography>
                        <Typography variant="p" component="p" className={classes.mt}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Grid container justify='center' className={classes.mt}>
                            <Grid item xs>
                                <Button variant="contained" className={classes.btnNormal}>
                                    BACK
                                </Button>
                            </Grid>
                            <Grid item>
                                <Typography variant="h1" component="h1">
                                    "
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
