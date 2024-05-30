import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { postClases } from "../../services/clases-services";
import { useNavigate } from "react-router-dom";
import { Form_agregar } from "./Form_agregar";

export function Agregar_clases() {

    const [loading, setLoading] = useState<Boolean>(false)


    const navigate = useNavigate()


    const agregar_clases = (body: any) => {
        postClases(body)
    }

    const handleAgregarDB = (e: any) => {

        e.preventDefault();

        setLoading(true)

        const formData = new FormData(e.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        agregar_clases(formJson)
        setLoading(false)

        navigate('/admin')
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