import { useState } from "react"

export function Pruebas() {
    const [banner, setBanner] = useState(Boolean)
    
    const handleForm = () => {
        setBanner(true)
    }

    return (
        <>

            <h1>Componente de Pruebas</h1>
            <button onClick={handleForm}>Nuevo</button>
            {banner === true ? <div>Se Muestra el formulario</div> :''}
        </>
    )
}