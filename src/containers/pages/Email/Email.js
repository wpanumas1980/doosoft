import React,{useEffect,useState, useContext} from 'react';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { Box, makeStyles } from '@material-ui/core';
import logo from '../../../img/logo.png'
import UserContext from '../../components/UserContext/UserContext'
import axios from 'axios';
const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        background: '#232323'
    },
    bodyContainer: {
        height:'70%',
        display:'flex',
        flexDirection:'column', 
        justifyContent:'space-between', 
        alignItems:'center'
    },
    user: {
        display: "flex",
        padding: '50px'
    },
    textTitle: {
        color: 'white',
    },
}));

export default function Home() {
    const classes = useStyles();
    const [user, setUser] = useState({});
    const { email } = useContext(UserContext);
    
    const getUser = async () =>{
       await axios.get(`http://localhost:5555/getUserByEmail/${email}`)
        .then(res => {
            setUser(res.data);
        })
        .catch(err => {
            alert('Something went wrong!!!');
        });
    }

    useEffect(() => {
        getUser();
    }, [])

    if(!user){
        return<h1>Loading ....</h1>
    }

    console.log(email);
    console.log(user);
    return (
        <div>
            <Container maxWidth="md" className={classes.root} >
                <Box className={classes.user}>
                    <Avatar >
                        <PermIdentityOutlinedIcon />
                    </Avatar>
                    <Box ml={2}>
                        <Typography variant="subtitle2" component="p" className={classes.textTitle}>
                            {'Doosoft <doosoft.tech>'}
                        </Typography>
                        <Typography variant="subtitle2" component="p" className={classes.textTitle}>
                            {'1:29 AM (14 hours ago)'}
                        </Typography>
                        <Typography variant="subtitle2" component="p" className={classes.textTitle}>
                            {'to me'}
                        </Typography>
                    </Box>
                </Box>
                <div className={classes.bodyContainer}>
                    <div>
                        <img
                            src={logo}
                            alt='logo'
                        />
                    </div>
                    <div>
                        <Typography variant="body2" gutterBottom className={classes.textTitle}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                        <Typography variant="body2" gutterBottom className={classes.textTitle}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                    </div>
                    <div>
                        <img
                            src={user.qrUrl}
                            alt='logo'
                        />
                    </div>
                    <div>
                        <Typography variant="caption" display="block" gutterBottom className={classes.textTitle}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                    </div>
                </div>
            </Container>
        </div>
    )
}
