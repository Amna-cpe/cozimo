import React,{useState} from 'react'
import "./BookComponent.css"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from "react-router-dom"
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import {useStateValue} from "../context/StateProvider"
import axios from 'axios';

function BookComponent({id,img,title,author,rating,desc,price,catID}) {
    const [isFav,setFav] = useState(false)
    const [{basket,wishlist,user},dispatch] = useStateValue()
    
    const addToCart=()=>{
       dispatch({
           type:"ADD_TO_BASKET",
           payload:{
            id,img,title,author,rating,desc,price
           },
        });
console.log(id)
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
        
           
    };
    function addToWishList(){

        !isFav?dispatch({
            type:"ADD_TO_WISHLIST",
            payload:{
                id,img,title,author,rating,desc,price
            }
         }) :dispatch({
            type:"REMOVE_FROM_WISHLIST",
            payload:{
                id,img,title,author,rating,desc,price
            }
         });        
      setFav(prev=>!prev) 
      axios.post("/addTowl",{
        bookID:id,
        userID:user.userID
    })
     .then((res)=>{
      console.log(res.data); 
     })
     .catch(err=>{
    
       })
        
    }
    return (
        <div className="BookCard">
            <div className="bookImgDiv">
                <img  className="BookImg" src={img}/>
            </div>
            <div className="BookDetails">
               
            {/* title */}
            <div className="BookName">
            {title}
            </div>
            
            {/* Author */}
            <div className="BookAuthor">
            by {author}
            </div>
            
          
            {/* stars */}
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
          
            {/* brief description */}
            <div className="BoodStory">
                <p> {desc.substr(0, 150)}
                    <Link className="readMore">...read more</Link></p>
  

            </div>

                  {/* price */}
                  <div >
                   <h3 className="price" >{price} KD.</h3>
            </div>
            <div className="wishAdd">
         


            <Fab className="wish"  size="small" aria-label="like">
    
    
 {       isFav? <FavoriteIcon  color="secondary" onClick={()=>addToWishList()}/>:
                <FavoriteIcon onClick={()=>addToWishList()}/>
     }
     
            </Fab>
            <Fab  className="add" color="primary" size="small" aria-label="add">
            <AddIcon onClick={()=>addToCart()}/>
            </Fab>

            </div>

            </div>
            
        
            
        </div>
    )
}

export default BookComponent
