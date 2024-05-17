import { useLoginStore } from "../store/useLoginStore"

export function Admin() {
    const { user } = useLoginStore()

    return (
        <>
            <h1>ADMIN View</h1>
            <h2>Bienvenido: {user}</h2>
        </>

    )

}