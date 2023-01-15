import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Exercice(){
    const [nom,setNom] = React.useState('')
    const [matiere,SetMatiere] = React.useState('')
    const [note,setNote] = React.useState(0)
    const [serie,setSerie] = React.useState([])
    const [id,setId] = React.useState(1)
    const obj = {}
    
    
    function handlerChange(event){
        const id = event.target.id
        switch (id) {
            case 'nom':
                setNom(event.target.value)
                break;
            case 'matiere':
                SetMatiere(event.target.value)
                
                break;
            case 'note':
                setNote(event.target.value)
                break;
        
            default:
                break;
        }
        
        
    }
    function handlerClick(event){
        event.preventDefault()
        setId(prev=> prev +1)
        obj.id = id
        obj.matiere = matiere
        obj.note = note
        setSerie([...serie,obj])
        
        console.log(nom, matiere, note)
    }
    function supprimer(event){
        setSerie(serie.filter((item)=>item.id !== parseFloat(event.target.id)))
    }
    
            

    return(
        
        <div className="container">
            
            
            <form >
                <legend>Exercice</legend>
            
                <div className="form-group">
                    <label htmlFor="nom">nom</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nom" 
                        placeholder="entrer le nom"
                        onChange={handlerChange}
                    />
                </div>
                <div className="form-group">
                    <div className="mb-3">
                        <label htmlFor="matiere" className="form-label">matiere</label>
                        <select 
                                className="form-select form-select-lg" 
                                name="matiere" id="matiere"
                                onChange={handlerChange}
                        >
                            <option value='physique'>Physique</option>
                            <option value="math">Math</option>
                            <option value="francais">Francais</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">Note</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="note" 
                        placeholder="entrer la note"
                        onChange={handlerChange}
                    />
                </div>
            
                <input className="btn btn-primary mt-2" type='submit' value='ajouter' onClick={handlerClick}/>
            </form>
            
            
            <div className="table-responsive mt-4 mx-3">
                <h1 className="text">bonjour {nom}</h1>
                <table className="table table-light text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Matiere</th>
                            <th>Note</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {serie.map((item)=>{
                    return(
                        <tr key={item.id}
                            >
                            <td>{item.id}</td>
                            <td>{item.matiere}</td>
                            <td>{item.note}</td>
                            <td>
                                <button 
                                    id={item.id}
                                    className="btn btn-danger"
                                    onClick={supprimer}
                                    >supprimer
                                </button>
                            </td>
                        </tr>
                    )
                })}
                    </tbody>
                </table>
            </div> 
            
            
        </div>
        
    )
}
// <div className="container">
        //     nom: <br></br><br></br>
        //     <input type='text' onChange={handlerChange} value={nom} id='nom'/><br></br><br></br>
            
        //     matiere: <br></br><br></br>
        //     <select name="matiere" id="matiere" onChange={handlerChange}>
        //         <option value="math">MATH</option>
        //         <option value='physique'>PHYSIQUE</option>
        //         <option value='francais'>FRANCAIS</option>
        //     </select> <br></br><br></br>
        //     note: <br></br><br></br>
        //     <input type='number' onChange={handlerChange} id="note" name="note"/><br></br><br></br>
        //     <input type='submit' onClick={handlerClick} value='ajouter'/>

            

        //     <table>
        //         <thead>
        //         <tr>
        //             <th>matiere</th>
        //             <th>note</th>
        //             <th>supprimer</th>
        //         </tr>
        //         </thead>
        //         <tbody>
        //         {serie.map((item)=>{
        //             return(
        //                 <tr key={item.id}>
        //                     <td>{item.matiere}</td>
        //                     <td>{item.note}</td>
        //                     <td><button onClick={supprimer}>supprimer</button></td>
        //                 </tr>
        //             )
        //         })}
        //         </tbody>
        //     </table>
            
        // </div>