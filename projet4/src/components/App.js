import React from "react";
// import '../styles/style1.css'
// import Register from "./Register";
// import Login from "./Login";

// export default function App(){
//     return(
//         <>
//             <Login/>
//         </>
//     )
// }

// export default function App(){
//     const [name, setName] = React.useState('');
//     const [errorMessages, setErrorMessages] = React.useState({});
//     const [isSubmitted, setIsSubmitted] = React.useState(false);

//     const renderErrorMessage = (name) =>
//         name === errorMessages.name && (
//             <div className="error">{errorMessages.message}</div>
//     );

    
//     const renderForm = (
//         <div className="login-form">
//             <div className="title">Connexion</div>
//                 <div className="form">
//                     <form onSubmit={handleSubmit}>
//                         <div className="input-container">
//                             <label>L'identifiant </label>
//                             <input type="text" name="uname" required />
//                             {renderErrorMessage("uname")}
//                         </div>
//                         <div className="input-container">
//                             <label>Mot de passe </label>
//                             <input type="password" name="upass" required />
//                             {renderErrorMessage("upass")}
//                         </div>
//                         <div className="button-container">
//                             <input type="submit" value="Se connecter" />
//                         </div>
//                     </form>
//                 </div>
//         </div>
        
//     );

//     const database = [
//         { username: "user1", password: "pass1" },
//         { username: "user2", password: "pass2" }
//     ];
//     const errors = { 
//         uname: "Votre identifiant est incorrect.", 
//         upass: "Votre mot de passe est incorrect."
//     };
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         var { uname, upass } = document.forms[0];
//         setName(uname.value);
//         const userData = database.find((user) => user.username === uname.value);
//         if (userData) {
//             if (userData.password !== upass.value) {
//                 setErrorMessages({ name: "upass", message: errors.upass });
//             } else {
//                 setIsSubmitted(true);
//             }
//         } else {
//             setErrorMessages({ name: "uname", message: errors.uname });
//         }
//     };

//     return (
//         <div className="app">
//             {isSubmitted ? 
//             <div>
//                 <div className="title">Accueil</div>
//                 <div>Bonjour {name}</div>
//             </div> : 
//             renderForm}
//         </div>
// );

    
// }


export default function App(){
    const [isSubmitted,setIsSubmitted] = React.useState(false)
    const [user,setUser] = React.useState({
        identifier : '',
        password : ''
    })
    const [showError, setShowError] = React.useState({
        name:'',
        message: ''
    })
    const database = [
        { identifier: "user1", password: "pass1" },
        { identifier: "user2", password: "pass2" }
    ];
    const renderErrorMessage = (name) =>
        name === showError.name && (
            <div className="error">{showError.message}</div>
        );
    


    function handlerSubmit(event){
        event.preventDefault()
        const userData = database.find((use) => use.identifier = user.identifier)
        console.log(userData)
        if (userData){
            if (userData.password !== user.password){
                setShowError({name:'password', message:'mot de passe invalide'})
            }else{
                setIsSubmitted(!isSubmitted)
            }
        }else{
            setShowError({name:'identifier', message:'identifier invalide'})
        }
        console.log(showError)
        
    }
    function handlerChange(event){
        setUser(prevState => ({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }

    return(
        <div className="login-form">
            {!isSubmitted ? 
            <div >
                <h1 className="title">Connexion</h1>
                <div className="form">
                <form  onSubmit={handlerSubmit}>
                    <div className="input-container">
                        <input 
                            type="text"
                            placeholder="identifier" 
                            name="identifier"
                            onChange={handlerChange}
                        />
                        {renderErrorMessage('identifier')}
                    </div>
                    <div className="input-container">
                        <input 
                            type='password' 
                            placeholder="password" 
                            name="password"
                            onChange={handlerChange}
                        />
                        {renderErrorMessage('password')}
                    </div >
                    <div className="button-container">
                    <input  type='submit' value='LOGIN'/>
                    </div>
                </form>
                </div>
            </div>:
            <div className="app">
                <div>
                    <div className="title">Accueil</div>
                    <h2>welcome: {user.identifier}</h2>
                </div>
                
                
            </div>
        }
        </div>
    )
}