import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Switch,Route,Link} from "react-router-dom"
import Header from "./MainComponent/Header"
import SideSection from "./MainComponent/SideSection"
import DisplayBanner from "./MainComponent/DisplayBanner"
import Checkout from "./MainComponent/checkout"
import WishList from './MainComponent/WishList';
import Search from "./MainComponent/search"
import Login from "./MainComponent/login"
import SignUp from "./MainComponent/signup"
import axios from "axios"


import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
function App() {


  function Copyright() {
    return (
      <Typography variant="body2" align="center" style={{color:"rgba(65,181,191,0.63)"}}>
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
         COZIMO 
        </Link>{' '}Made By Amna Jaaser{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(12),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor:" rgb(230, 241, 230); ",
      borderRadius:"1.2rem",
      boxShadow: "27px 5px 59px 0px rgba(65,181,191,0.63)",
      color:"#524e94"
      
    }, 
    form: {
      width: '90%', // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


  // axios.post('/api/add',{id:9090,name:"amna"})
  // .then(()=>{
  //    alert("okk")
  // }).catch(err=>{
  //   console.log(err)
  // });
  return (
    <Router>

      <div className="app">

        <Switch>
           {/* localhost/checkout */}
          <Route path="/checkout">
            <Header/> 
            <SideSection/>
            <Checkout/>
            
          </Route>
          <Route path="/wishlist">
            <Header/> 
            <SideSection/>
            <WishList/>
            
          </Route>
            {/* localhost/login */}
          <Route path="/login">
           <Login  Copyright = {Copyright} useStyles={useStyles}/>
          </Route>
          <Route path="/signup">
           <SignUp  Copyright = {Copyright} useStyles={useStyles}/>
          </Route>

          <Route path="/search/:type/:name">
          <Header/> 
            <SideSection/>
           <Search arrayOfSearchResults={[]}/>
          </Route>

            {/* localhost main page */}
          <Route path="/">
            <Header/> 
            <SideSection/>
            <DisplayBanner/>
          </Route>

        </Switch>
       
       
       
       
    </div>
    </Router>

  );
}

export default App;
