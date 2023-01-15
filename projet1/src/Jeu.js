import React from "react";
export default class JeuDe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { face: null, compteur: 0, fin: false };
    }
    jouer() {
        const valeur = Math.floor(Math.random() * 6) + 1;
        
    }
    initialiser(){
        this.setState({ face:null, compteur: 0, fin: false });
    }
    render() {
        return (
            <div>
                <img src="images/Dé.PNG" alt=""/>
                <h1>Jeu de Dé...</h1>
                <h2>face:….. </h2>
                <h2h2>nombre d'essais…..</h2h2>
                <button onClick={() => this.jouer()}>jouer</button>
                <p>Bravo vous avez trouvez la face cachée.....</p>
                <button onClick={() => this.initialiser()}>Initialiser</button>
            </div>
        );
    }
}