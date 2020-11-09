import axios from 'axios';

export const getBooks = ()=>(dispatch)=>{
   
    axios.get('/books')
         .then(res=>{
             dispatch({
                 type:"SET_BOOKS",
                 payload:res.data
             })
         })
         .catch(err=>{
            console.log(err);
         })
}


export const loginUser = (userData)=>(dispatch)=>{
  console.log("here in loign")
    axios.post("/login",userData)
    //IF OK RETURN TOKEN 
    .then((res)=>{
      console.log("user data",res.data)
        dispatch({
            type:"SET_USER",
            payload:{
             fname:res.data.fname,
             lname:res.data.lname
            }
         });
          
    })
    .catch(err=>{
   
      })
}