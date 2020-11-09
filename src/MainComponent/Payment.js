import React, { useState, useEffect } from "react";
// MUI Stuff
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import Close from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Icon from "@material-ui/core/Icon";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { useStateValue } from "../context/StateProvider";
import axios from 'axios'
import IconButton from "@material-ui/core/IconButton";
import { findByLabelText } from "@testing-library/react";

import PaymentInputs from "./payementCard";
const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: "hidden",
    backgroundColor: "white",
    padding: "10px",
  },
  color: {
    backgroundColor: "white",
  },
  form: {
    width: "100%",
    marginBottom: "10px",
  },

  text: {
    border: "1px solid #a758db",
    fontSize: "12px",
  },
  divProg: {
    textAlign: "center",
    marginTop: "50",
    marginBottom: "50",
    backgroundColor: "black",
  },
  btnView: {
    display: "flex",
    justifyContent: "space-between",
  },
  btnprove: {
    backgroundColor: "#5fa4b4",
    
  },
}));

function PaymentDialog(props) {
  const [{ user }, dispatch] = useStateValue();
  const [PhoneNumber, setPhoneNumber] = useState();
  const [City, setCity] = useState();
  const [Address, setSdress] = useState();
  const [Country, setCountry] = useState();
  const [postalcode, setPostalCode] = useState();
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "PhoneNumber") {
      setPhoneNumber(value);
    }
    if (name === "City") {
      setCity(value);
    }
    if (name === "Country") {
      setCountry(value);
    }
    if (name === "postalcode") {
      setPostalCode(value);
    }
  };

  useEffect(() => {
    if (props.openDialog) {
      handleOpen();
    }
    //and clear the props
  }, []);

  const handleOpen = (e) => {
    e && e.preventDefault();
    setOpen(true);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);

    history.push("/");
  };

  const handleProceed = (e) => {
    e.preventDefault();
    setOpen(false);
      // need to add customer info address 
    axios.post('/addInfo',{
      city:City,
      country:Country,
      PhoneNum:PhoneNumber,
      address:Address,
      postalCode:postalcode,
      cid:user.userID
    }); 
      // need to add billing info
    axios.post('/addBillingInfo',{
      ccexp:'21,11,2020',
      ccnum:"2020",
      cid:user.userID
    });   
 
    //need to add cart info into the order info
     axios.post('/order',{
      ccexp:'21,11,2020',
      cid:user.userID
    });   
    // need to empty the cart 
    axios.post('/orderBooks',{
      cid:user.userID
    });   
    
    

    history.push("/");
  };
  const handelChange = (e) => {
    console.log("");
  };

  return (
    <>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        onClick={() => handleOpen()}
      >
        Continue to payment
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <div className={classes.root}>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="First Name"
                  value={user.fname}
                  label="First Name"
                  name="FirstName"
                  autoComplete="First Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="Last Name"
                  label="Last Name"
                  type="Last Name"
                  id="Last Name"
                  value={user.lname}
                  autoComplete="current-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="Country"
                  label="Country"
                  type="Country"
                  id="Country"
                  value={Country}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="City"
                  label="City"
                  type="City"
                  id="City"
                  value={City}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="Address"
                  label="Address"
                  type="Address"
                  id="Address"
                  value={Address}
                  onChange={handleChange}
                  autoComplete="current-Address"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="postalCode"
                  label="postal Code"
                  type="postalCode"
                  id="postalCode"
                  value={postalcode}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="PhoneNumber"
                  label="Phone Number"
                  type="PhoneNumber"
                  id="Phone Number"
                  value={PhoneNumber}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
          </form>

          <PaymentInputs />
        </div>

        <DialogActions className={classes.color}>
          <div className={classes.btnView}>
            <Button onClick={handleClose} id="btn">
              cancel
            </Button>
            <Button
              className={classes.btnprove}
              onClick={handleProceed}
              id="btn"
            >
              proceed
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PaymentDialog;
