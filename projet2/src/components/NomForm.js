import React from 'react'

// export default class NomForm extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             names:['zakia ouajih'],
//             name:''
//         }
//         this.handlerChange = this.handlerChange.bind(this)
//         this.handlerClick = this.handlerClick.bind(this)
//     }
//     handlerChange(event){
//         this.setState({
//             names:[...this.state.names],
//             name:event.target.value
//         })
//     }
//     handlerClick(event){
//         this.setState({
//             names:[...this.state.names,this.state.name],
//             name:''
//         })
//         event.preventDefault()
//     }


//     render(){
//         return(
//             <>
//             <form>
//                 <input value={this.state.name} type='text' onChange={this.handlerChange}/><br></br>
//                 <input onClick={this.handlerClick} type='submit' value='envoyer'/>
//             </form>
//             <ul>{this.state.names.map((item,idx)=><li key={idx}>{item}</li>)}</ul>
//             </>
//         )
//     }
// }

export default function NomForm(){
    const [Nom,setNom] = React.useState('')
    const [Names,setNames] = React.useState(['zakia ouajih'])

    function handlerChange(event){
        setNom(event.target.value)
        
    }
    function submitHandler(event){
        setNames([...Names,Nom])
        setNom('')
        event.preventDefault()
    }

    return(
        <>
            <form>
                <input onChange={handlerChange} type='text' name='name' value={Nom} /><br></br>
                <input onClick={submitHandler} type='submit' />
                {/* <p>{Nom}</p> */}
                <ul>{Names.map((item,idx)=><li key={idx}>{item}</li>)}</ul>
            </form>
        </>
    )
}