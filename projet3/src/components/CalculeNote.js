import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CalculeNote(props){
   
   const [moyenne,setMoyenne] = React.useState(0)

   // console.log(props.notes.map((item)=>item.note))
   function handlerClick(event){
      event.preventDefault()
      const not = props.notes.reduce((total,item)=>{
         return total + parseFloat(item.note)
      },0)
      console.log(not)
      setMoyenne(parseFloat(not)/3)
   }

   return(
      <>
         <button 
            type="button"  
            className="btn btn-lg btn-success col-12"
            onClick={handlerClick}
         >Calculer la moyenne</button>
         
         {/* <ul className="list-group">
            {props.notes.map((item)=><li className="list-group-item col-3">{item.note}</li>)}
         </ul> */}
         
         <h2>La moyenne est :{moyenne}</h2>
      </>
   )
}