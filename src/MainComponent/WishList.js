import React from 'react'
import "./DisplayBanner.css"
import {useStateValue} from "../context/StateProvider"
import WishProduct from "./WishProduct"
function WishList() {
    const [{wishlist},dispatch] = useStateValue()

    return (
        <div className="f">
               <img className="homeImg" src={require('./j.jpg')}/>
               {
                   wishlist.length===0?<h1 className="h1_empty_msg" >Your wishlist is empty</h1>:(
                   <div >
                       <h1 className="h1_empty_msg">Your wishlist</h1>
                         
                           <div className="checkout__products">
                            {wishlist.map(product=>(<WishProduct img={product.Book_img} title={product.BookName} 
                            id ={product.BookID} author={product.BookAuthor} rating={product.Rating} price = {product.price}
                            
                            
                            
                            />)                            
                            )}
                           
                           </div>
                   </div>
                   
                    )
               }
            

        </div>
    )
}

export default WishList

