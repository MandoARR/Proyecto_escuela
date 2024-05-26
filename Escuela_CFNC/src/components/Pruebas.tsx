import { useState } from "react"
import Barra from "./Barra"
import { AgregarEstudiante } from "./Alumnos_Estudiante/AgregarEstudiantes"

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
            <Barra />
            <h1>Componente de Pruebas</h1>
            <section>
                {banner === true ? <div><AgregarEstudiante /></div> : null}
                <br></br>
                <button onClick={handleNew}>Nuevo</button><a> </a>
                <button onClick={handleCancel}>Cancelar</button>
            </section>

        </>
    )
}