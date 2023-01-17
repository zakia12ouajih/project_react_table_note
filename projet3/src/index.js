import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ajoutFruit from './components/Actions';
// import { vider } from './components/Actions';
import { Provider } from 'react-redux';
import App from './components/App';

// import Message from './components/Message';
// import { BrowserRouter } from "react-router-dom";


const ele= document.getElementById('root');
const root = ReactDOM.createRoot(ele);

const initState={fruits:[]}
function reducer(state=initState,action){
        switch (action.type) {
                case "ADD_FRUIT":
                        return{...state,fruits:[...state.fruits,action.payload]};
                case "CLEAR":
                        return{...state,fruits:[]};
                default:
                        return state;
        }
}
const store = createStore(reducer)
// const subscribe = store.subscribe(()=>{
//         console.log(store.getState())
// })
// const action1 = {type:"ADD_FRUIT",payload:{id:10,nom_fruit:'fraise'}}
// const action2 = {type:"ADD_FRUIT",payload:{id:11,nom_fruit:'banane'}}
store.dispatch(ajoutFruit(10,'banane'))
store.dispatch(ajoutFruit(11,"pomme"))
// const action3 = {type:"CLEAR"}
// store.dispatch(vider)
console.log(store.getState())


// root.render(<App/>);
// root.render(
//         <App />
// )
// root.render(
//         <>
                                        
//                 <ul className="list-group">
//                         {store.getState().fruits.map((f,idx)=><li key={idx} className="list-group-item">{f.id} {f.nom_fruit}</li>)}
//                 </ul>
                
//         </>
// )
root.render(
        <Provider store={store}>
                <App/>
        </Provider>
)