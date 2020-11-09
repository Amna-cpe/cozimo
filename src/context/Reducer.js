//DATA LAYER LOGIC STUFF..

import { Route } from "react-router-dom";

export const initialState={
    basket:[],
    wishlist:[],
    Books:[],
    user:{
        fname:"",
        lname:"",
        userID:0
    },
    loggedIn:false,
    cart_price:0,
    user_cart_tot_items:0

};

function Reducer(state,action){
  
    switch(action.type){
        case "ADD_TO_BASKET":
            //ADD TO BASKET
            return {...state,
            basket:[...state.basket,action.payload]
            }
            break;
        case "REMOVE_FROM_BASKET":
            //REMOVE FROM BASKET
            let indexDelet= state.basket.findIndex(product=>product.id===action.payload.id);
            state.basket.splice(indexDelet,1)
            return {
                ...state                
            }
          
            break;
        case "ADD_TO_WISHLIST":
            //ADD TO WISHLIST
            return {...state,
            wishlist:[...state.wishlist,action.payload]
            }
            break;
        case "REMOVE_FROM_WISHLIST":
            //REMOVE FROM WISHLIST
            let indexDeletWish= state.wishlist.findIndex(product=>product.id===action.payload.id);
            state.wishlist.splice(indexDeletWish,1)
            return {
                ...state                
            }
          
            break;
        case "SET_BOOKS":
            //ADD BOOKS 
           
            return {...state,
                Books:[...state.Books,action.payload]
                }
                break;
        case "SET_USER":
   
            return {...state,
                user:{
                    fname:action.payload.fname,
                    lname:action.payload.lname,
                    userID:action.payload.userID
                },
                loggedIn:"true"
            }
            break;
        case "CHANGE_TOTAL_CART":

        return {...state,
            cart_price:action.payload.price
            
        }
        break;

        case "SET_USER_BASKET_NEW":

            return {...state,
                basket:action.payload.books
                }
            break;
            //SET_USER_WL_NEW
            case "SET_USER_WL_NEW":

                return {...state,
                    wishlist:action.payload.books
                    }
                break;
            case "SET_USER_BASKET_TOTPRICE":

                return {...state,
                    cart_price:action.payload.price
                    
                }
                break;
        
            

        default: return state;
        
    }
}
export default Reducer