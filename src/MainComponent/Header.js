import React,{useState,useEffect} from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {useStateValue} from "../context/StateProvider"
  import { useHistory } from "react-router-dom";
  function Header() {
    const [{basket,wishlist,loggedIn,user},dispatch] = useStateValue()
    const [search,setSearch] = useState();
    let history = useHistory();
    function handlechange(event){
        const {name,value}= event.target
     
        setSearch(value)
    }
  const searchEngin=()=>{
    history.push(`/search/book/${search}`)
  }
  useEffect(() => {
    
    
  }, [basket])

    return (
        <nav className="header">
            {/* logo on the left img */}
            <Link to="/">
             <img className="header__img" src={require("./cozimo.PNG")}/>
            </Link>
            {/* seacrch box */}
            <div  className="header__search">
            <input  value={search}
                                onChange={handlechange}
                                className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" onClick={()=>searchEngin()}/>

            </div>
          
            {/* sign in  */}
            <div className="header_nav">
                {/* login */}
             <div className="header__link">
 <div className="header__option">
                        {loggedIn?
                        <span className="header__optionOne">Hello {user.fname}</span>   :
                        <Link className="header__link" to="/login">
                        <span className="header__optionTwo">Sign in </span> 
                        </Link>
                        }
                    </div>    
             </div>
                         
               
            </div>
                {/* basket icon with number */}
                <Link to="wishlist" className="header__link">
                    <div className="header__optionBasket">
                    {/* shooping basket icon */}

                    {/* number items icons */}
                    <span className="header__optionTwo basketCount">{wishlist.length}</span>
                    <FavoriteBorderIcon className="basketIcon"/>
                    </div>
                </Link>
            {/* basket icon with number */}
            <Link to="checkout" className="header__link">
                <div className="header__optionBasket">
                  {/* shooping basket icon */}
                   
                  {/* number items icons */}
                  <span className="header__optionTwo basketCount">{basket.length}</span>
                  <ShoppingBasketIcon className="basketIcon"/>
                </div>
            </Link>
            
        </nav>
    )
}

export default Header
