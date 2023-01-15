import React from 'react'


export default class Product extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div className="col">
            <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top"
                    src={`../pictures/${this.props.thumbnail}`} alt="" />
                <div className="card-body">
                    <p className="card-title">{this.props.title}</p>
                    <p className="card-text">{this.props.price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


// export default  function Product(props){
//     return(
//         <div className="col">
//             <div className="card shadow-sm">
//                 <img className="bd-placeholder-img card-img-top"
//                     src={`../pictures/${props.thumbnail}`} alt="" />
//                 <div className="card-body">
//                     <p className="card-title">{props.title}</p>
//                     <p className="card-text">{props.price}</p>
//                     <div className="d-flex justify-content-between align-items-center">
//                         <div className="btn-group">
//                             <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }