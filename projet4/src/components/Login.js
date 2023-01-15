import React from "react";
export default function Login(){
    const error={
        msg_error:'identifier non valid',
        pwd_error:'password non valid'
    }
    const [formError,setFormError]= React.useState({
        msg_error:'',
        pwd_error:''
    }) 
    const database = [
        {
            identifier : 'zakia',
            password : 'zakia'
        },
        {
            identifier : 'jin',
            password : 'jin'
        }
    ]
    const[login,setLogin] = React.useState({
        identifier:'',
        password:''
    })

    function handlerChange(event){
        setLogin(prevState=>({
            ...prevState,
            [event.target.name]:event.target.value
        }))

        
        
        
        
    }
    function handlerSubmit(event){
        event.preventDefault();
        
        
    }



    return(
        <>
            <h1>Connexion</h1>
            <form onSubmit={handlerSubmit}>
                <div>
                    <input 
                        type='text' 
                        placeholder="identifier"
                        name="identifier"
                        onChange={handlerChange}
                        required
                    />
                </div>

                <div>
                    <input 
                        type='password'
                        name="password"
                        placeholder="password"
                        required
                        onChange={handlerChange}
                    />
                </div>


                <input 
                    type='submit' 
                    value='LOGIN'
                />
            </form>
        </>
    )
}