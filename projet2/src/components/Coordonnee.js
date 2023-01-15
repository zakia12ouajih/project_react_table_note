import React from "react";
export default function Coordonnee(){
    const [x,setX]=React.useState(0)
    const [y,setY]=React.useState(0)
    React.useEffect(()=>{
        window.addEventListener("mousemove",handleMouseMove)
        return(()=>{window.removeEventListener("mousemove",handleMouseMove)})
    },[])
    function handleMouseMove(event){
        const n = event.clientX
        const y = event.clientY
        setX(n)
        setY(y)
    }
    return(
        <div className="container">
            <h4 className="title">recuperation des coordonnes de la souris</h4>
            <h5> coordonnes x: {x} y: {y}</h5>
        </div>
    )
}

