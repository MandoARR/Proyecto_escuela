import { useState } from "react"
import { Form_alumnos } from "./Form_alumnos"
import Barra from "./Barra"

export function Pruebas() {
    const [banner, setBanner] = useState<boolean>(true)

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
                {banner === true ? <div><Form_alumnos /></div> : ''}
                <br></br>
                <button onClick={handleNew}>Nuevo</button>
                <button onClick={handleCancel}>Cancelar</button>
            </section>

        </>
    )
}