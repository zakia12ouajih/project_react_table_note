import React from "react";
export default function JeuDe (props){
    const [play,setPlay]=React.useState({ face: null, compteur: 0, fin: false })
    const styleImage = { width: "60px", height: "60px" };
    function jouer(){
        const valeur = Math.floor(Math.random() * 6) + 1;
        let c = play.compteur +1;
        let fin = valeur == props.cache ? true: false
    }
    function initialiser(){
        props.initialiser()
        setPlay({ face:null, compteur: 0, fin: false })
    }
    function getImage(){
        let image = "images/vide.png";
        switch (this.state.face) {
            case 1:
                image = "images/face1.png";
                break;
            case 2:
                image = "images/face2.png";
                break;
            case 3:
                image = "images/face3.png";
                break;
            case 4:
                image = "images/face4.png";
                break;
            case 5:
                image = "images/face5.png";
                break;
            case 6:
                image = "images/face6.png";
                break;
        }
        return image;
    }

    return(
            

        <div className="container">
            <img src='images/face1.png' />
            <h1>Jeu de Dé...</h1>
            <h2>face:{play.face}</h2>
            <img src={this.getImage()} style={styleImage}/>
            <h2>nombre d'essais: {play.compteur}</h2>
            {!play.fin && <button onClick={() => this.jouer()}>lancer...</button>}
            {play.fin && <p>Bravo vous avez trouvez la face cachée.....</p>}
            {play.fin && <button onClick={() => this.initialiser()}>Initialiser</button>}
            {/* <button onClick={jouer}>jouer</button>
            <p>Bravo vous avez trouvez la face cachée.....</p>
            <button onClick={initialiser}>Initialiser</button> */}
        </div>
    )
    
}
// export default class JeuDe extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { face: null, compteur: 0, fin: false };
//     }
//     jouer() {
//         const valeur = Math.floor(Math.random() * 6) + 1;
//         //completer le code
//     }
//     initialiser(){
//         this.setState({ face:null, compteur: 0, fin: false });
//     }
//     render() {
//     return (
//         <div>
//             <img src="images/Dé.PNG" />
//             <h1>Jeu de Dé...</h1>
//             <h2>face:….. h2</h2>
//             <h2h2>nombre d'essais…..</h2h2>
//             <button onClick={() => this.jouer()}>jouer</button>
//             <p>Bravo vous avez trouvez la face cachée.....</p>
//             <button onClick={() => this.initialiser()}>Initialiser</button>
//         </div>
//     )
//     }
// }
