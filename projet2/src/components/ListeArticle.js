import React from "react";
export default function ListeArticles(){
    const [id,setId]=React.useState(0)
    const [designation,setDesignation]=React.useState('')
    const [prix,setPrix]=React.useState(0)
    const [articles,setArticles]=React.useState([])
    function handlerAddArticle(){
        const x = {id0:id,designation0:designation,prix0:prix}
        setArticles([...articles,x])
    }
    function handlerOnChangeId(event){
        setId(event.target.value)
    }
    function handlerOnChangeDesignation(event){
        setDesignation(event.target.value)
    }
    function handlerOnChangePrix(event){
        setPrix(event.target.value)
    }

    return(
        <div className="container">
            <div className="list">
                <h2 className="title">Ajout d'un Article</h2>
                    <div>
                <label>Id:</label><input type="text" onChange={handlerOnChangeId} value={id}/>
                </div>
                <div>
                    <label>designation:</label><input type="text" onChange={handlerOnChangeDesignation} value={designation}/>
                </div>
                <div>
                    <label>prix:</label><input type="text" onChange={handlerOnChangePrix} value={prix}/>
                </div>
                <div>
                    <input type="button" value="Ajouter" onClick={handlerAddArticle}/>
                </div>
                <div>
                    <h3>liste Articles</h3>
                    <ul>{articles.map((item,id)=><li key={id}>{item.id0 + ' | '+ item.designation0 +' | '+ item.prix0}</li>)}</ul>
                </div>
            </div>
        </div>
    )
}

