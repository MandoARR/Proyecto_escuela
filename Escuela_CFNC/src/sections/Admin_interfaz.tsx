import Barra from "../components/Barra"
import { useLoginStore } from "../store/useLoginStore"

export function Admin_portal() {
    const { user } = useLoginStore()

    return (
        <>
            <Barra />
            <h1>Interfaz del Administrador</h1>
            <h2>Bienvenido: {user}</h2>
        </>
    )
}
