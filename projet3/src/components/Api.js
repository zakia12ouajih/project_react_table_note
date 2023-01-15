import React, { useEffect } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";


export default function Api(){
    const [user,setUser] = React.useState([])
    const endPoint = 'https://jsonplaceholder.typicode.com/todos'
    useEffect(()=>{
        axios.get(endPoint)
        .then((response)=>setUser(response.data))
        .catch(err=>console.log(err))
    },[])
    // useEffect(()=>{
    //     fetch(endPoint)
    //     .then(response=>(response.json()))
    //     .then((data)=>setUser(data))
    //     .catch(err=>console.log(err))
    // },[])
    return(
        <>
            <h1>nombre de user: {user.length}</h1>
            <table border='1'>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>edit</th>
                </tr>
                {user.map((use)=>{
                    return(
                        <tr key={use.id}>
                            <td>{use.id}</td>
                            <td>{use.title}</td>
                            <Link to={`/update/${use.id}`}>
                                <button>edit</button>
                            </Link>
                        </tr>
                    )
                })}
            </table>


        </>
    )
}