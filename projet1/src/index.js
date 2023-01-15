// import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import JeuDe from './Jeu';
// import App from './App';
// import Products from './Products';


// const myVoiture={matricule:'19873X9',
// marque:'Toyota',
// chevaux:8}
const ele= document.getElementById('root');
const root = ReactDOM.createRoot(ele);
// injecter dans index.html
// ctrl + j : couverture de cmd local vscode
// class Voiture extends React.Component{
//     constructor(matricule,marque,chevaux){
//         super()
//         this.matricule='19873X9';
//         this.marque = 'Toyota';
//         this.chevaux = 8;
//     }
//     render(){
//         return(
//             <div>
//                 <h1 style={{color:'green'}}>information Voiture</h1>
//                 <p>voiture matricule: <span style={{color:'red'}}>{this.matricule}</span></p>
//                 <p>marque: {this.marque} nombre de cheveaux: {this.chevaux}</p>
//             </div>
//         )
//     }
// }
// function App() {
//     const [cache,setCache]=useState(1)
//     const [jouer,setJouer] = useState(false)
//     function handlerChange(event){
//         setCache(event.target.value)
//     }
//     function handlerClick (){
//         setJouer(true)
//     }
//     function initialiser(){
//         setJouer(false)
//     }
//     return(
//         <div>
//             {!jouer &&
//             <div className='container'>
//                 <h2>jeu de de joueur1</h2>
//                 <label>donner le numero cache entre 1 et 6 :{cache}</label>
//                 <input type="number" min='1' max='6' value={cache} onChange = {handlerChange}/>
//                 <input type = 'button' value= 'jouer' onClick={handlerClick}/></div>}
//                 {jouer && <JeuDe cache={cache} initialiser = {initialiser}/>}
//         </div>
//     )

// }
function App() {
    return (
        <div>
            <JeuDe cache={2}/>
        </div>
    );
}

root.render(<App />)
// root.render(<Voiture/>)










