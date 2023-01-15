import React from "react";
// import Select from "./Selection";
// import Form1 from "./Form1";
// import ListeArticles from './ListeArticle'
// import Coordonnee from './Coordonnee'
// import '../index.css'
import JeuDe from "./JeuDe";

// export default function App(){
    
//     const colors = [{color:'red',value:'red'},
//                     {color:'blue',value:'blue'},
//                     {color:'yellow',value:'yellow'},
//                     {color:'green',value:'green'}]
    
    
//     return(
//         <>
//             {/* <TextArea rows={4} cols={3} value={'votre message'}/> */}
//             <Select  option={colors}/>
//         </>
//     )
// }


// export default function App(){
//     return(
//         <div className="App">
//             <Form1/>
//         </div>
//     )
// }


// export default function App(){
//     return(
//         <div className="App">
//             <ListeArticles/>
//         </div>
//     )
// }
export default function App(){
    return(
        <div className="App">
            <JeuDe cashe={2}/>
        </div>
    )
}