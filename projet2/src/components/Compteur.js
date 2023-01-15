import React from 'react'

export default class Copmteur extends React.Component{
    constructor(){
        super()
        this.state={
            Number:0
        }
        this.Incrementer = this.Incrementer.bind(this)
        this.Decrementer = this.Decrementer.bind(this)
        this.Initialiser = this.Initialiser.bind(this)
    }
    Incrementer(){
        this.setState({
            Number: this.state.Number + 1
        })
    }
    Decrementer(){
        this.setState({
            Number: this.state.Number -1
        })
    }
    Initialiser(){
        this.setState({
            Number: 0
        })
    }
    render(){
        return(
            <div>
                <p>{this.state.Number}</p>
                <button onClick={this.Incrementer}>Incrementer</button>
                <button onClick={this.Decrementer}>Decrementer</button>
                <button onClick={this.Initialiser}>Initialiser</button>
            </div>
        )
    }
}


// export default  function Compteur (){
//     const [Number,setNumber] = React.useState(0)
//     function Incrementer(){
//         setNumber((prev)=>prev+1)
//     }
//     function Decrementer(){
//         setNumber((prev)=>prev-1)
//     }
//     function Initialiser(){
//         setNumber(0)
//     }

//     return(
//         <div>
//             <p>{Number}</p>
//             <button onClick={Incrementer}>+</button>
//             <button onClick={Decrementer}>-</button>
//             <button onClick={Initialiser}>initialiser</button>
//         </div>
//     )
// }
