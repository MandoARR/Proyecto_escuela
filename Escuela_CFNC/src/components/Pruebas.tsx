import { useState } from "react"
import { Form_alumnos } from "./Form_alumnos"

export function Pruebas() {
    const [banner, setBanner] = useState(Boolean)
    
    const handleForm = () => {
        setBanner(true)
    }

    return (
        <>

            <h1>Componente de Pruebas</h1>
            <button onClick={handleForm}>Nuevo</button>
            {banner === true ? <div><Form_alumnos/></div> :''}
        </>
    )
}