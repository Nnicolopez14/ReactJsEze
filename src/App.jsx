import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from './components/NavBar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Count from './components/Count'
import './App.css'

function App() {


  return (
    <div className='container'>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Kloudd"}/>

      <ItemDetailContainer />
    </div>
  )
}

export default App
