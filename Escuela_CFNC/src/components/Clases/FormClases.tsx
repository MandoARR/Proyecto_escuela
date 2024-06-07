import { useState } from "react"
import { Agregar_clases } from "./Agregar_Clases"
import { Button } from "@mui/material";

export function FormClases() {
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
                {banner === true ? <div><Agregar_clases /></div> : null}
                <br></br>
                {banner === false ? <button onClick={handleNew}>Nuevo</button>: null}
                <a> </a>
                {banner == true ? <Button onClick={handleCancel}>Cancelar</Button>: null}
            </section>

        </>
    )
}