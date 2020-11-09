import React,{useEffect, useState} from 'react'
import "./DisplayBanner.css"
import BookComponent from "./BookComponent"
import {getBooks} from "../context/actions"
import {useStateValue} from "../context/StateProvider"
import axios from "axios"
import { Book } from '@material-ui/icons'

function DisplayBanner() {
     const [{},dispatch] = useStateValue()
    const[Books,SetBooks] = useState([])
    useEffect(()=>{
        axios.get('/books')
        .then(res=>{
            SetBooks(res.data)
          console.log(res.data)
            dispatch({
                type:"SET_BOOKS",
                payload:res.data
            })
        })
        .catch(err=>(
            console.log(err)
        ))
   
    },[])
   
    return (
        <div className="f">
            <img className="homeImg" src={require('./j.jpg')}/>
            <div className="DisplayBooks">

         {Books.map(b=>(<BookComponent author={b.BookAuthor}
         title={b.BookName} rating={b.Rating} price={b.price} 
         img={b.Book_img} desc={b.Description} id={b.BookID}
         catID={b.CategoryID}
         />))}

                  
            </div>
        </div>
    )
}

export default DisplayBanner
