import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { postClases } from "../../services/clases-services";
import { useNavigate } from "react-router-dom";
import { FormAgregar } from "./FormAgregar";
import { IClases } from "../../store/IClases";

export function Agregar_clases() {

    const [loading, setLoading] = useState<boolean>(false)


    const navigate = useNavigate()


    const agregar_clases = (body: IClases) => {
        postClases(body)
    }

    const handleAgregarDB = (e: any) => {

        e.preventDefault();

        setLoading(true)

        const formData = new FormData(e.currentTarget);
        const formJson = Object.fromEntries((formData).entries());
        agregar_clases(formJson)
        setLoading(false)

        //navigate('/admin/pagina_de_carga') Preguntar como mandar una pagina con tiempo para fingi que esta cargando
        navigate('/admin/pruebas')
        // cambiar el componente para fingir que esta cargando
    }

    return (
        <>
            <br></br>
            <form onSubmit={handleAgregarDB}>
                <FormAgregar />
            </form>
            {loading && <CircularProgress />}
        </>
    )
}