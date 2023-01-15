import React from "react";
export default function Form(){
    const [text,setTexte] = React.useState('')
    function handlerChange(event){
        let msg = event.target.value
        setTexte(msg)
    }
    function handlerSubmit(event){
        alert('le nom saisi est: ' + text);
        setTexte('');
        event.preventDefault();
    }
    return(
        <>
            <form  onSubmit={handlerSubmit} method='get'>
                <input onChange={handlerChange} value={text} type='text' /><br></br>
                
                <input type='submit'/>
            </form>
        </>
    )
}