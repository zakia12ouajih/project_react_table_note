import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Note from "./Note";
// import { Routes, Route } from 'react-router-dom';
import '../style/App.css'
import Exercice from "./Exercice";
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
export default function App(){
    return(
        <>
            <Exercice/>
        </>
    )
}