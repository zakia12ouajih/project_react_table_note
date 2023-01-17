import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Note from "./Note";
// import { Routes, Route } from 'react-router-dom';
import '../style/App.css'
import Fruit1 from "./Fruit1";
// import Exercice from "./Exercice";
// import Blog from "./Blog";
// import Home from "./Home";
// import About from "./About";
// import Menu from "./Menu";
// import App from "./Api";
// import Api from "./Api";
// import Menu from "./Menu";
// import Menu from "./Menu";
// import Update from "./Update";
// import Connecte from "./Connect";
// import Anonymous from "./Annonnymous";
// // import '../style/style.css';
// // import MyStyle from "./MyStyle";
// // import img1 from '../image/img1.jpg'

// // export default function App(){
// //     return(
// //         <>
// //             <MyStyle />
// //             <img src='../image/img1.jpg' alt=""/>
// //             <img src={img1} alt=''/>

// //         </>
// //     )
// // }
// export default function App(props){

// const isLoggedIn = props.isLoggedIn;
// // if (isLoggedIn) {
// // return <Connecte />;
// // }
// // return <Anonymous />;
// return(
//     // <>
//     // {isLoggedIn?<Connecte/>:<Anonymous/>}
//     // </>
//     <>
//     {isLoggedIn && <Connecte/>}
//     {!isLoggedIn && <Anonymous/>}
//     </>
// )


// }
// export default function App(){
//     return(
//         <div>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                     <Link to="/blog">Blog</Link>
//                 </li>
//             </ul>
//             <div className="main-route-place">
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/blog" element={<Blog />} />
//                 </Routes>
//             </div>
//         </div>
//     );
// }


// export default function App(){
//     return(
//         <>
//             <Menu/>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/blog" element={<Blog />} />
//             </Routes>
//         </>
//     )
// }

// export default function App(){
//     return(
//         <>
//             <Api/>
//         </>
//     )
// }

// export default function App(){
//     return(
//         <>
//             <Note/>
//         </>
//     )
// }
// export default function App(){
//     return(
//         <>
//             <Exercice/>
//         </>
//     )
// }

// function App(props){
//     function ajouter(){
//         props.addFruit({type:"ADD_FRUIT", payload:{id:14,nom_fruit:'orange'}})
//     }
//     function vider(){
//         props.CLEAR()
//     }
//     return(
//         <>
//             <h3>store from App</h3>
            
//             <button onClick={ajouter} type="button" class="btn btn-primary">ajouter</button>
//             <button onClick={()=>props.vider({type:"CLEAR"})} type="button" class="btn btn-primary">vider</button>
            
//             {props.fruits.map((f,idx)=><div key={idx}>{f.nom_fruit}</div>)}
//         </>
//     )
// }
// function mapStateToProps(state){
//     return{fruits:state.fruits}
// }
// function mapDispatchToProps(dispatch){
//     return{
//         addFruit:function(action){
//             dispatch(action)
//         },
//         vider:function(action){
//             dispatch(action)
//         }
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(App)
export default function App(){
    return(
        <Fruit1/>
        
    )
}