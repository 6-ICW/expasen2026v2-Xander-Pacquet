import { useState } from "react"
import UserList from "./component/UserList"
import UserForm from "./component/UserForm"

function App() {

  interface Leerlingen{
    id:number
    naam:string
    hobby:string
  }

  const [leerlingen,setLeerlingen] = useState([
    { id: 1, naam: "Karel", hobby: "voetbal" },
    { id: 2, naam: "Els", hobby: "tennis" },
    { id: 2, naam: "Els", hobby: "voetbal" },
  ])

  const onAdd = (naam:string, hobby:string)=>{
    const newId= Math.max(...leerlingen.map((lln)=>lln.id))+1
    const newLeerling: Leerlingen = ({id: newId, naam, hobby}) 
    setLeerlingen([...leerlingen, newLeerling])
  }

  return (
    <>
    <UserForm onAdd={onAdd}/>
    <UserList leerlingen={leerlingen}/>

    </>
  )
}

export default App
