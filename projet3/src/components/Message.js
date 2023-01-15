import React from "react";


// export default class Message extends React.Component{
//     constructor(){
//         super()
//         this.handlerChange = this.handlerChange.bind(this)
//         this.handlerClick = this.handlerClick.bind(this)
//         this.state={message0:'',message1:'',message2:'',Color:'yellow'}
//     }
//     handlerChange(event){
//         let msg = event.target.value
//         this.setState(prevState=>({
//             ...prevState,
//             message0 : msg
//         }))

//         msg.length >= 10? 
//             this.setState(prevState => ({
//                 ...prevState,
//                 message1 : 'vous avez bien siasir 10 lettre'
//             })):
//             this.setState(prevState => ({
//                 ...prevState,
//                 message1 : 'saisir au moins 10 lettre'
//             }))
            
//         msg.length >= 10?
//         this.setState(prevState=>({
//             ...prevState,
//             Color : 'green'
//         })):
//         this.setState(prevState=>({
//             ...prevState,
//             Color : 'red'
//         }))
//         console.log(this.state.Color)

//     }
//     handlerClick(){
//         this.setState(prevState=>({
//             ...prevState,
//             message2: ('vous avez bien saisi: ' + this.state.message0)

//         }))
        
//     }
//     render(){
//         return(
//             <>
//             <input onChange={this.handlerChange} type='text' value={this.state.message0}  placeholder="enter message"/><br></br>
//             <input onClick={this.handlerClick} type='submit'/>
//             <p style={{color:this.state.Color}}>{this.state.message1}</p>
//             <p>{this.state.message2}</p>
//         </>
//         )
//     }
// }



export default function Message(){
    const [message,setMessage] = React.useState({
        message0:'',
        message1:'',
        message2:''
    });
    
    const [color,setColor] = React.useState('black');
    
    
    function handlerChange(event){
        let msg = event.target.value;
        setMessage(prevState=>({
            ...prevState,
            message0:msg
        }))
        console.log(message.message0)
        msg.length >= 10 ? setMessage(prevState=>({
            ...prevState,
            message1:'vous avez bien siasir 10 lettre'
        })): 
        setMessage(prevState=>({
            ...prevState,
            message1:'saisir au moins 10 lettre'
        }))
        msg.length >= 10 ? setColor('green') : setColor('red')
    }
    
    function handlerClick(){
        setMessage(prevState=>({
            ...prevState,
            message2:'vous avez bien saisi: ' + message.message0
        }))
        console.log(message)
    }

    return(
        <>
            <input onChange={handlerChange} type='text' value={message.message0}  placeholder="enter message"/><br></br>
            <input onClick={handlerClick} type='submit'/>
            <p style={{color:color}}>{message.message1}</p>
            <p>{message.message2}</p>
        </>
    )
}