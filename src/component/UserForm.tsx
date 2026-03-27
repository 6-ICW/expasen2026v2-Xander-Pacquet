import { useRef, useState } from "react"

interface Props{
    onAdd: (naam:string, hobby:string)=>void
}

function UserForm({onAdd}:Props){
    const [newLeerling,setNewLeerling] = useState("")
    const [newHobby,setNewHobby] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const hanldeSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        if(!newLeerling) return
        onAdd(newLeerling,newHobby)
        setNewLeerling("")
        setNewHobby("")
        inputRef.current?.focus()

        
    }


    return (<>
    <form onSubmit={hanldeSubmit}>
        <input type="text" placeholder="naam" value={newLeerling} onChange={(e)=>setNewLeerling(e.target.value)} />
        <input type="text" placeholder="hobby" value={newHobby} onChange={(e)=>setNewHobby(e.target.value)} />
        <button type="submit">toevoegen</button>
    </form>
    </>)

}

export default UserForm