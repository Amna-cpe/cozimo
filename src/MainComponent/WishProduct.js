import React from 'react'
import "./DisplayBanner.css"
import {useStateValue} from "../context/StateProvider"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import Button from '@material-ui/core/Button';
import axios from "axios"
function WishProduct({id,img,title,author,rating,price}) {
    const [{user},dispatch] = useStateValue()
    const deleteItem = ()=>{
        dispatch({
            type:"REMOVE_FROM_WISHLIST",
            payload:{
             id
            },
         });

         axios.post('/deleteFromWl',{    bookID:id,
            userID:user.userID})
    }
    const addToCart = ()=>{
        //ADD TO CART AND REMOVE FROM WISHLIST
        dispatch({
            type:"ADD_TO_BASKET",
            payload:{
                id,img,title,author,rating,price
            },
         });
        //  dispatch({
        //     type:"REMOVE_FROM_WISHLIST",
        //     payload:{
        //      id
        //     },
        //  });

         //same for the database 
         //add to the cart firts then 
         axios.post("/addTocart",{
            bookID:id,
            userID:user.userID
        })
         .then((res)=>{
          console.log(res.data); 
          dispatch({
            type:"CHANGE_TOTAL_CART",
            payload:{
            price:res.data[0].totalprice
            },
         });
         })
         .catch(err=>{
        
           })
         //delete from wl
         deleteItem();

    }


    return (
        <div className="checkout__product">
        <img className = "checkout__img" src={img} alt="kfmkfg"/>
        <div className="checkout__detail">
            <p className="checkout__title">{title}</p>
            <small>{author}</small>
            <strong className="checkout__price">{price} KD.</strong>
            <div className="BookGrage">
                {       rating==5?
                        Array(rating).fill().map((_)=><StarIcon className="star"/> ):(                        rating%(rating-0.5)===0.5?
                        Array(rating-0.5).fill().map((_)=><StarIcon className="star"/> ):
                        Array(rating).fill().map((_)=>(<StarIcon className="star"/>)) )
                        
                }
                {
                    rating!=5&&
                    rating%(rating-0.5)===0.5&&<StarHalfIcon className="star"/>
                }
            </div>
        </div>
        <div className="checkout__remove">
        <Button variant="contained" size="medium" color="primary" onClick={()=>addToCart()}>
          Add to Cart
        </Button>

         <IconButton aria-label="delete"  >
             <DeleteIcon fontSize="large" onClick={()=>deleteItem()}/>
         </IconButton>

        </div>

   </div>
    )
}

export default WishProduct
