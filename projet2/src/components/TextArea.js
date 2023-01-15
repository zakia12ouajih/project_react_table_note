import React from "react";
export default function TextArea(props){
    const [message,setMessage] = React.useState(props.value)
    function handlerChange(event){
        setMessage(()=>event.target.value)
    }
    function handlerFocus(){
        setMessage(()=>'')

    }
    return(
        <>
            <textarea
                rows={props.rows} 
                cols={props.cols} 
                value={message}
                onFocus={handlerFocus}
                onChange={handlerChange}
            />
        </>
    )
} 