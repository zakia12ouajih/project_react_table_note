import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './components/App'
// import NomForm from './components/NomForm'
// import Products from './components/Products'
// import Compteur from './components/Compteur'
// import Message from './components/Messages'
// import Form from './components/Form'
// import NomForm from './components/NomForm'

const ele = document.getElementById('root')
const root = ReactDOM.createRoot(ele)


// root.render(<Products/>)
// root.render(<NomForm/>)
// root.render(<Compteur/>)
root.render(<App/>)