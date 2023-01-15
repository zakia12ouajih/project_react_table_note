// import React from "react";
// export default function Register(){
//     const[info,setInfo] = React.useState({
//         first_name : '',
//         last_name : '',
//         email : '',
//         password : ''
//     })
//     function handlerSubmit(event){
//         console.log(info);
//         event.preventDefault();
//     }
//     function handlerChange(event){
        
//         setInfo(prevState=> {
//             return{
//             ...prevState,
//             [event.target.name]:event.target.value
//             }
//         })
//     }

//     return(
//         <form onSubmit={handlerSubmit}>
//             <input
//                 type='text' 
//                 name="first_name" 
//                 placeholder="enter first name"
//                 onChange={handlerChange}
//             /><br></br>


//             <input 
//                 type='text' 
//                 name="last_name" 
//                 placeholder="enter last name"
//                 onChange={handlerChange}
//             /><br></br>


//             <input 
//                 type='email' 
//                 placeholder="enter email"
//                 onChange={handlerChange}
//             /><br></br>

//             <input 
//                 type='password' 
//                 placeholder="enter password"
//                 onChange={handlerChange}
//             /><br></br>

//             <input type='submit' value='register'/>
//         </form>
//     )
// }