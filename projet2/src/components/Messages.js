import React from "react";

export default function Message(){
    const [MsgH1,setMsgH1] = React.useState('hello, fell free to register!')
    const [MsgBtn,setMsgBtn] = React.useState('REGISTER')
    function handlerClick(){
        setMsgH1('thank you the registarion is done')
        setMsgBtn('THANK YOU')
    }
    return(
        <div>
            <h1>{MsgH1}</h1>
            <button onClick={handlerClick}>{MsgBtn}</button>
        </div>
    )
}