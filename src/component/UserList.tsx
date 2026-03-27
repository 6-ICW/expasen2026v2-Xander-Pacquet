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
        {leerlingen.map((leerling,i)=>(<li key={i}>{leerling.naam}{leerling.hobby}</li>))}
    </ul>
    </>)
}
export default UserList