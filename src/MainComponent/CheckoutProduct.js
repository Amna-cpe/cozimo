import React from 'react'
import "./DisplayBanner.css"
import {useStateValue} from "../context/StateProvider"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import axios from "axios"

function CheckoutProduct({id,img,title,author,rating,price}) {
    console.log("id of the nookd", id)
    const [{user},dispatch] = useStateValue()
    const deleteItem = ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            payload:{
             id
            },
         });

         axios.post("/deleteFromcart",{
            bookID:id,
            userID:user.userID
        })
       

         



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
         <IconButton aria-label="delete"  color='white' className="delet_img"  >
             <DeleteIcon fontSize="large" color='white' className="delet_img"  onClick={()=>deleteItem()}/>
         </IconButton>

        </div>

   </div>
    )
}

export default CheckoutProduct
