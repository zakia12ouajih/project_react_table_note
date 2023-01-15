import React from "react";

export default  function Form1(){
    const [nom, setNom]=React.useState('')
    const [prenom, setPrenom] = React.useState('')
    function handlerOnChangeNom(event){
        setNom(event.target.value)
    }
    function handlerOnChangePrenom(event){
        setPrenom(event.target.value)
    }
    function handlerSubmit(event){
        alert('salut nom: '+ nom + ' prenom: '+ prenom)
        event.preventDefault()
    }
    return(
        <div className="container">
            <form onSubmit={handlerSubmit}>
                <div className="list">
                    <h2 className="title">Formulaire Inscription</h2>
                    <div>
                        <label>Nom:</label><input type="text" onChange={handlerOnChangeNom} value={nom}/>
                    </div>
                    <div>
                        <label>Prenom:</label><input type="text" onChange={handlerOnChangePrenom} value={prenom}/>
                    </div>
                    <div>
                        <input type="submit" value="submit"/>
                    </div>
                </div>
            </form>
        </div>
    )
}