import React ,{useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress'
import './login.css';
import axios from 'axios';
import {useHistory  } from "react-router-dom"
import {useStateValue} from "../context/StateProvider"

function SignUp({useStyles,Copyright}){
    const [{},dispatch] = useStateValue()

   const [lastName,setLastName] = useState("")
   const [firstName,setfirstName] = useState("")
   const [email,setEmail] = useState("")
   const [password,setPass] = useState("")
   const [confirmPassword,setconfirmPassword] = useState("")
   const classes = useStyles();
   const history =useHistory ()


 

  function handlechange(event){
      const {name,value}= event.target
     if(name==="email"){
         setEmail(value)
     }else if(name==="firstName"){
        setfirstName(value)
     }
     else if(name==="password"){
         setPass(value)
    }
    else if(name==="lastName"){
        setLastName(value)
    }
    else if(name==="confirmPassword"){
        setconfirmPassword(value)
    }
  
  }

  function signUp(event){
      // sign up and then redirect to home page 
      console.log('sjif')
     event.preventDefault()
     axios.post("/signup",{
        email,
        password,
        firstName,
        lastName
    })
     .then((res)=>{
       console.log("user data",res.data)
         dispatch({
             type:"SET_USER",
             payload:{
              fname:res.data.fname,
              lname:res.data.lname
             }
          });
          history.push('/')    
     })
     .catch(err=>{
    
       })
  }


    return(
            <Container component="main" maxWidth="xs">
           
                <div className={classes.paper}>
                    <div>
                    <img  className="img_login" src="https://fontmeme.com/permalink/201028/9df9a332470fff49f8d0b4dbc24f64b6.png"alt="logo"/>

                    </div>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                     <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="firstName"
                                name="firstName"
                                autoComplete="firstName"
                                value={firstName}
                                onChange={handlechange}
                                autoFocus
                        
                                />
                            </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="last Name"
                                name="lastName"
                                value={lastName}
                                onChange={handlechange}
                                autoComplete="lname"
                          
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={email}
                                onChange={handlechange}
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
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="confirm Password"
                                type="password"
                                id="password"
                                value={confirmPassword}
                                onChange={handlechange}
                                autoComplete="current-password"
                      
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
        

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={signUp}
                       
                    >
                    Sign Up
                  
                    </Button>

                    <Grid container justify="flex-end">
                    <Grid item>
                    <Link href="/login" variant="body2">
                        Already have an account? Sign in
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


export default SignUp