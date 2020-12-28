import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
    },
    textMsg: {
        color: 'white'
    },
    textBox: {
        background:'#66bd52',
        width:'500px',
        height:'500px',
        borderRadius:'100%'
    }
}));

export default function Complete() {
    const classes = useStyles();
    const history =useHistory();
    return (
        <div style={{ background: '#232323' }}>
            <Container maxWidth="lg">
                <Grid container component="main" justify='center' alignItems='center' className={classes.root}>
                    <Grid item >
                        <Grid container direction='column' justify='center' alignItems='center' className={classes.textBox}>
                            <Grid item >
                                <Typography variant="h5" className={classes.textMsg} gutterBottom>
                                    SIGN UP COMPLETE
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography variant="h5" className={classes.textMsg} gutterBottom>
                                    GET START
                                </Typography>
                            </Grid>
                                <Button 
                                style={{display:'block',color:'white'}}
                                onClick={() => history.push('/email')}
                                >{'>> QR Code <<'}</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
