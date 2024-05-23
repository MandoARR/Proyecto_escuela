import { useEffect, useState } from "react"
import { getStudents } from "../../services/students-service"
import { IEstudiantes } from "./IEstudiantes"
import { Box, Button } from "@mui/joy"
import { useNavigate } from "react-router-dom"

export function Estudiantes() {

    const [students, setStudents] = useState<[IEstudiantes] | null>([])
    const navigate = useNavigate()

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const data = await getStudents()
        setStudents(data)
    }

    const handleAgregarClick = () => {
        navigate('/agregar')
    }



    return (
        <>
            <Box alignItems="center">
                <ul>
                    {students?.map((st) => (
                        <li key={st.id}>{st.nombre}</li>
                    ))}
                </ul>
                <Button onClick={handleAgregarClick}>Agregar Alumno</Button>
            </Box>
            


        </>
    )
}