import { useState } from "react"
import { AgregarEstudiante } from "./AgregarEstudiantes"

export function Form_alumnos() {
    const [banner, setBanner] = useState<boolean>(false)

    const handleNew = () => {
        setBanner(true)
    }

    const handleCancel = () => {
        setBanner(false)
    }

    return (
        <>
            <section>
                {banner === true ? <div><AgregarEstudiante /></div> : null}
                <br></br>
                {banner === false ? <button onClick={handleNew}>Nuevo</button>: null}
                <a> </a>
                {banner == true ? <button onClick={handleCancel}>Cancelar</button>: null}
            </section>

        </>
    )
}