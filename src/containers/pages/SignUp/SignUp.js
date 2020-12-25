import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import pg from '../../../img/pg.png';
import logo from '../../../img/logo.png';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        // margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        // margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        // marginTop: theme.spacing(1),
    },
    input: {
        background: 'white',
        borderRadius: '15px',
    },
    text: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '24px'
    },
    submit: {
        width: '110px',
        height: '47px',
        background: '#66bd52',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: '#32F74D',
            color: '#FFF'
        }
    },
}));

export default function SignUp() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root} alignItems='center'>
            <Grid item xs={12} sm={8} md={5} style={{padding:'40px'}}>
                <Grid container>
                    <Grid item xs>
                        <img
                        src={logo}
                        alt='logo'
                        />
                    </Grid>
                </Grid>
                <h1 className={classes.text}>JOIN US</h1>
                <div className={classes.paper}>
                    <form className={classes.form} noValidate>
                        <TextField
                            className={classes.input}
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            margin="normal"
                        />
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                        />
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="address"
                            label="Address"
                            name="address"
                            autoComplete="address"
                            autoFocus
                            multiline
                            rows={4}
                        />
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="phone"
                            label="Phone Number"
                            name="phone"
                            autoComplete="phone"
                        />
                        <TextField
                            className={classes.input}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <FormControlLabel
                            style={{ color: 'white' }}
                            control={<Checkbox label='My checkbox'
                                labelStyle={{ color: 'white' }}
                                iconStyle={{ fill: 'white' }}
                                inputStyle={{ color: 'white' }}
                                style={{ color: 'white' }} />}
                            label="I accept Doosoft terms of service, community guidelines and privacy policy."
                        />
                        <Grid container justify='center'>
                            <Grid item xs>
                                <Button variant="contained" style={{ width: '110px', height: '47px', background: '#e0e0e0', borderRadius: '10px' }}>
                                    BACK
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" className={classes.submit}>
                                    CONTINUE
                            </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
            <Grid item xs={false} sm={4} md={7} style={{padding:'40px'}}>
                <img
                src={pg}
                alt='image PG'
                />
            </Grid>
        </Grid>
    );
}