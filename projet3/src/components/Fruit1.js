import { connect } from "react-redux";
function Fruit1(props){
    function ajouter(){
        props.addFruit({type:"ADD_FRUIT", payload:{id:14,nom_fruit:'orange'}})
    }
    
    return(
        <>
            <h3>store from Fruit1</h3>
            
            <button onClick={ajouter} type="button" class="btn btn-primary">ajouter</button>
            <button onClick={()=>props.vider({type:"CLEAR"})} type="button" class="btn btn-primary">vider</button>
            
            {props.fruits.map((f,idx)=><div key={idx}>{f.nom_fruit}</div>)}
        </>
    )
}
function mapStateToProps(state){
    return{fruits:state.fruits}
}
function mapDispatchToProps(dispatch){
    return{
        addFruit:function(action){
            dispatch(action)
        },
        vider:function(action){
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Fruit1)