import React,{useEffect,useState} from 'react'
import "./DisplayBanner.css"
import BookComponent from "./BookComponent"
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Search() {
    let {name,type} = useParams();

    console.log(name)

    
    const[Books,SetBooks] = useState([])
    useEffect(()=>{
        if (type==='cat')
      { 
        //    axios.get(`/${name}`)
        // .then(res=>{
        //     console.log(res.data)
        //     SetBooks(res.data)
         
        // })
        // .catch(err=>(
        //     console.log(err)
        // ))

        axios.post(`/category`,{category:name})
        .then(res=>{
            console.log(res.data)
            SetBooks(res.data)
         
        })
        .catch(err=>(
            console.log(err)
        ))
    }
       else if(type==="book"){
             axios.post('/search',{search:name})
        .then(res=>{
            console.log(res.data)
            SetBooks(res.data)
         
        })
        .catch(err=>(
            console.log(err)
        ))
       }
      
   
    },[type,name])
    console.log(Books)
    return (
        <div className="f">
            <img className="homeImg" src={require('./j.jpg')}/>
            {
                    Books.length>0?
               
              
            <div className="DisplayBooks">
          
          {Books.map(b=>(<BookComponent author={b.Author}
         title={b.BookName} rating={b.Rating} price={b.price} 
         img={b.Book_img} desc={b.Description}
         />))}
             </div>
            :"No items Sorry"
             }
        </div>
    )
}

export default Search
