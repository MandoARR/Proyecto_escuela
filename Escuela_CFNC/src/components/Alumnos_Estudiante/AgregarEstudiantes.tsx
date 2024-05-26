import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { postStudents } from "../../services/studets-services";
import { redirect, useNavigate } from "react-router-dom";
import { Form_agregar } from "./Form_agregar";


export function AgregarEstudiante() {

    const [loading, setLoading] = useState<Boolean>(false)


    const navigate = useNavigate()


    const agregarEstudiante = (body: any) => {
        postStudents(body)
    }

    const handleAgregarDB = (e: any) => {

        e.preventDefault();

        setLoading(true)

        const formData = new FormData(e.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        formJson.uuid = crypto.randomUUID()
        agregarEstudiante(formJson)
        setLoading(false)

        //navigate('/admin/pagina_de_carga') Preguntar como mandar una pagina con tiempo para fingi que esta cargando
        navigate('/admin')
        // cambiar el componente para fingir que esta cargando
    }

    return (
        <>
            <br></br>
            <form onSubmit={handleAgregarDB}>
                <Form_agregar />
            </form>
            {loading && <CircularProgress />}
        </>
    )
}