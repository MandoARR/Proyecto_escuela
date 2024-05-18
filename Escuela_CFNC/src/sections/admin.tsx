import Barra from "../components/Barra"
import { useLoginStore } from "../store/useLoginStore"

export function Admin() {
    const { user } = useLoginStore()

    return (
        <>
            <Barra/>
            <h1>ADMIN View</h1>
            <h2>Bienvenido: {user}</h2>
        </>
    )
}