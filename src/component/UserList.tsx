interface Leerlingen{
    id:number
    naam:string
    hobby:string
}


interface Props{
    leerlingen: Leerlingen[]
}

function UserList({leerlingen}:Props){

    return (<>
    <ul>
        {leerlingen.map((leerling,i)=>(<li key={i}>{leerling.naam.charAt(0).toUpperCase() + String(leerling).slice(1)}, {leerling.hobby}</li>))}
    </ul>
    </>)
}
export default UserList