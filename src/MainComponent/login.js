import React,{useEffect,useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {useStateValue} from "../context/StateProvider"
import {loginUser} from "../context/actions"
import axios from 'axios';
import {useHistory  } from "react-router-dom"

import './login.css';

import CircularProgress from "@material-ui/core/CircularProgress"

 function Login({useStyles,Copyright}){
    const [{user},dispatch] = useStateValue()

    const [email,setEmail] = useState("")
    const [password,setPass] = useState("")
   const history =useHistory ()

    useEffect(() => {
     
       
        
    }, [user.userID])
    function handlechange(event){
        const {name,value}= event.target
       if(name==="email"){
           setEmail(value)
       }
       if(name==="password"){
           setPass(value)
      }
    }

     const handleSubmit = (e)=>{
         e.preventDefault()
         console.log("loginnngng .. ")

         axios.post("/login",{
            email,
            password
        })
         .then((res)=>{
           console.log("user data",res.data[0])
             dispatch({
                 type:"SET_USER",
                 payload:{
                  fname:res.data[0].fname,
                  lname:res.data[0].lname,
                  userID:res.data[0].cid
                 }
              });
              axios.post('/cartbooks',{userID: res.data[0].cid})
              .then((ress)=>{
             
                  console.log("user basket is ",ress.data)
               dispatch({
                   type:"SET_USER_BASKET_NEW",
                   payload:{
                    books:ress.data
                   }
                });
              })
              axios.post('/gettotal',{userID: res.data[0].cid})
              .then((res3)=>{
             
                  console.log("user tot is ",res3.data)
               dispatch({
                   type:"SET_USER_BASKET_TOTPRICE",
                   payload:{
                    price:res3.data[0].totalprice                   }
                });
              })
              //wlbooks
              axios.post('/wlbooks',{userID: res.data[0].cid})
              .then((res4)=>{
             
                  console.log("user wl is ",res4.data)
               dispatch({
                   type:"SET_USER_WL_NEW",
                   payload:{
                    books:res4.data
                   }
                });
              })
           
         })
         .catch(err=>{
        
           })
        
         
           history.push('/')   
         
         //if succedd then add 
     
        
        
     }

 
 
    const classes = useStyles();

     return(
        <Container component="main" maxWidth="xs"> 
        <div className={classes.paper}>
                    <div >
                        <img className="img_login"  src="https://fontmeme.com/permalink/201028/9df9a332470fff49f8d0b4dbc24f64b6.png"alt="logo"/>
                       
                    </div>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <form className={classes.form} noValidate>
                     <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                value={email}
                                onChange={handlechange}
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                             
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlechange}
                               
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
               

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                      
                   

                    >
                    Log In
                   
                    </Button>

                    <Grid container justify="flex-end">
                    <Grid item>
                    <Link href="/signup" variant="body2">
                        Dont have an account? Sign Up
                    </Link>
                    </Grid>
                    </Grid>
                    </form>
            </div>
            <Box mt={5}>
            <Copyright />
            </Box>
         
            </Container>
     );

    
}


export default Login