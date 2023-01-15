import React from "react";

export default function Note(){
    const[name,setName]= React.useState('')
    const[physique,setPhysique] = React.useState(0)
    const[math,setMath] = React.useState(0)
    const[francais,setFrancais] = React.useState(0)
    const[moyenne,setMoyenne] = React.useState(0)

    function handlerChange(event){
        const id = event.target.id
        
        switch (id) {
            case 'nom':
                setName(event.target.value)
                break;
            case 'ph':
                if(parseFloat(event.target.value)> 20){
                    alert('la note  doit etre inferieur a 20')
                    setPhysique(0)
                    return;
                }
                setPhysique(event.target.value)
                break;
            case 'math':
                if(parseFloat(event.target.value)> 20){
                    alert('la note  doit etre inferieur a 20')
                    setMath(0)
                    return;
                }
                setMath(event.target.value)
                break;
            case 'fr':
                if(parseFloat(event.target.value)> 20){
                    alert('la note  doit etre inferieur a 20')
                    setFrancais(0)
                    return;
                }
                setFrancais(event.target.value)
                break;
            default:
                break;
        }
    }
    function handlerSubmit(event){
        event.preventDefault()
        const sum = parseFloat(physique) + parseFloat(francais) +parseFloat(math)
        setMoyenne(parseFloat((sum/3).toFixed(2)))
        

    }

    return(
        <>
            
                nom: <input id="nom" onChange={handlerChange} type='text' /><br></br><br></br>
                note physique/20 : <input value={physique} id="ph" onChange={handlerChange} type='number'/><br></br><br></br>
                note math/20 : <input value={math} id="math" onChange={handlerChange} type='number'/><br></br><br></br>
                note francais/20 : <input value={francais} id="fr" onChange={handlerChange} type='number'/><br></br><br></br>
                <input onClick={handlerSubmit} type='submit' value='calculer'/>
            <h1>{name} {moyenne}  </h1>
            {/* <h1 style={{color:color}}>{message}</h1> */}
            {/* {moyenne < 9 && <p style={{ color: 'red'}}>faible</p>}
            {moyenne >= 9 && moyenne < 11 && <p style={{ color: 'yellow'}}>passable</p>}
            {moyenne >= 11 && moyenne < 13 && <p style={{ color: 'green'}}>bien</p>}
            {moyenne >= 14 && moyenne < 16 && <p style={{ color: 'blue'}}>t.bien</p>}
            {moyenne >= 16 && <p style={{ color: 'orange'}}>exellent</p>} */}

            {moyenne <9 && <p style={{ color:'red' }}>faible</p>}
            {moyenne >= 9 && moyenne <11 && <p style={{ color:'yellow' }}>passable</p>}
            {moyenne >= 11 && moyenne <= 13 && <p style={{ color:'green' }}>bien</p>}
            {moyenne >=14 && moyenne <16 && <p style={{ color:'blue' }}>t.bien</p>}
            {moyenne >= 16 && <p style={{ color:'orange' }}>exellent</p>}

        </>
    )
}