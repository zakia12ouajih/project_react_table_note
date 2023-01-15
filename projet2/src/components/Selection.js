import React from "react";
export default function Select(props){
    const [color,setColor] = React.useState('')
    function handlerChange(event){
        setColor(event.target.value)
        console.log(color)
    }
    
    return(
        <>
        <select onChange={handlerChange}>
            {props.option.map((op,id)=><option key={id} value={op.value}>{op.color}</option>)}
        </select>
        <p style={{backgroundColor:color}}>hello</p>
        </>
    )
}