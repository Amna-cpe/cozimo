import React,{useEffect , useState} from 'react'
import "./DisplayBanner.css"
import {useStateValue} from "../context/StateProvider"
import CheckoutProduct from "./CheckoutProduct"
import PaymentDialog from "./Payment"
function Checkout() {
    const [{basket,cart_price},dispatch] = useStateValue()
    const [TotPrice,setTot] = useState(0)
console.log(cart_price)
   
     
  
    useEffect(() => {
        setTot(cart_price)
        console.log(cart_price+" and "+TotPrice)
    }, [cart_price,basket])
console.log(basket)
    return (
        <div className="f">
               <img className="homeImg" src={require('./j.jpg')}/>
               {
                   basket.length===0?<h1 className="h1_empty_msg">Your Shopping basket is empty</h1>:(
                   <div >
                       <h1 className="h1_empty_msg" >Your Shopping basket</h1>
                         
                           <div className="checkout__products">
                            {basket.map(product=>(<CheckoutProduct img={product.Book_img} title={product.BookName} 
                            id ={product.BookID} author={product.BookAuthor} rating={product.Rating} price = {product.price}
                            
                            
                            
                            />)                            
                            )}
                           
                           </div>
                           <div className="checout__subtotal">
                            <p>your subtotal is: {TotPrice}</p> 
                    <PaymentDialog/>
           </div>
                   </div>
               
          
                    )
               }
           
            

        </div>
    )
}

export default Checkout

