import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Update(){
    const {id}= useParams()
    const [title,setTitle] = React.useState('')
    const [userId,setUserId] = React.useState('')
    const [completed,setcompleted] = React.useState('')

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        // .then((response)=>{console.log(response.data)})
        .then((response => setTitle(response.data.title)))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
            <h1>hello user: {id}</h1>
            <p>{title}</p>
        </>
    )
}