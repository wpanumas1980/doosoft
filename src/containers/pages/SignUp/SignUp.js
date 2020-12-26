import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import pg from '../../../img/pg.png';
import logo from '../../../img/logo.png';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
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
            color: 'white'
        }
    },
}));

export default function SignUp() {
    const classes = useStyles();

    const [fname, setFname] = useState('');
    const [sname, setSname] = useState('');
    const [address, setAdress] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [check, setCheck] = useState(false);

    const handleFname = (e) => {
        setFname(e.target.value);
    }
    const handleSname = (e) => {
        setSname(e.target.value);
    }
    const handleAdress = (e) => {
        setAdress(e.target.value);
    }
    const handleTel = (e) => {
        setTel(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleCheck = (e) => {
        setCheck(e.target.checked);
    }
    return (
        <div style={{ background: '#232323' }}>
            <Container maxWidth="lg" >
                <Grid container component="main" className={classes.root} alignItems='center'>
                    <Grid item xs={12} sm={8} md={5} style={{ padding: '40px' }}>
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
                                    label="Name"
                                    autoFocus
                                    margin="normal"
                                    onChange={handleFname}
                                />
                                <TextField
                                    className={classes.input}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="lastName"
                                    label="Surame"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={handleSname}
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
                                    onChange={handleAdress}
                                />
                                <TextField
                                    className={classes.input}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="phone"
                                    label="Tel."
                                    name="phone"
                                    autoComplete="phone"
                                    onChange={handleTel}
                                />
                                <TextField
                                    className={classes.input}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={handleEmail}
                                />
                                <FormControlLabel
                                    style={{ color: 'white' }}
                                    control={<Checkbox label='My checkbox'
                                        labelStyle={{ color: 'white' }}
                                        iconStyle={{ fill: 'white' }}
                                        inputStyle={{ color: 'white' }}
                                        style={{ color: 'white' }} 
                                        onChange={handleCheck}
                                        />}
                                    label="I accept Doosoft terms of service, community guidelines and privacy policy."
                                />
                                <Grid container justify='center'>
                                    <Grid item xs>
                                        <Button variant="contained" style={{ width: '110px', height: '47px', background: '#e0e0e0', borderRadius: '10px' }}>
                                            BACK
                                </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" className={classes.submit} style={{ color: 'white' }}>
                                            CONTINUE
                            </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={false} sm={4} md={7} style={{ padding: '40px' }}>
                        <img
                            src={pg}
                            alt='imagepg'
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}