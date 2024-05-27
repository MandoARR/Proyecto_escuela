import { useState } from "react"
import { AgregarAlumnos } from "./Alumnos_Estudiante/AgregarAlumnos"

export function Pruebas() {
    const [banner, setBanner] = useState<boolean>(false)

    const handleNew = () => {
        setBanner(true)
    }

    const handleCancel = () => {
        setBanner(false)
    }

    return (
        <>
            <h1>Componente de Pruebas</h1>
            <section>
                {banner === true ? <div><AgregarAlumnos /></div> : null}
                <br></br>
                <button onClick={handleNew}>Nuevo</button><a> </a>
                <button onClick={handleCancel}>Cancelar</button>
            </section>

        </>
    )
}