import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import logo from '../../../img/logo.png';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  table: {
    minWidth: 650,
  },
  toolbar: {
    background: '#66bd52',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [rows, setRows] = useState([])

  const getUser = async () =>{
    await axios.get(`http://localhost:5555/getAllUser`)
     .then(res => {
         setRows(res.data);
     })
     .catch(err => {
         alert('Something went wrong!!!');
     });
 }

 useEffect(() => {
     getUser();
 }, [])

 if(!rows){
     return<h1>Loading ....</h1>
 }

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolbar}>
            <img
            width='100px'
            src={logo}
            alt="logo"
            />
          <Typography variant="h6" className={classes.title} style={{marginLeft:'20px'}}>
            DASHBOARD
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <PersonOutlineIcon />
          </IconButton>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        ข้อมูลผู้ใช้
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
      อัพเดทล่าสุด {new Date().toLocaleString()}
      </Typography>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ชื่อ</TableCell>
            <TableCell align="center">นามสกุล</TableCell>
            <TableCell align="center">ที่อยู่</TableCell>
            <TableCell align="center">เบอร์โทร</TableCell>
            <TableCell align="center">อีเมล์</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,idx) => (
            <TableRow key={idx}>
              <TableCell align="center">{row.fname}</TableCell>
              <TableCell align="center">{row.lname}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.tel}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Container>
    </div>
  );
}
