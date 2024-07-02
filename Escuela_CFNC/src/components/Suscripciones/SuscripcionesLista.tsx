import { FormEvent, useEffect, useState } from "react"
import { ISuscripciones } from "../../store/ISuscripciones"
import { deleteSuscriptions, getSuscriptions, postSuscriptions } from "../../services/suscriptions-services"
import { ModalDialog, Sheet, Table } from "@mui/joy"
import Modal from '@mui/joy/Modal';
import IconButton from '@mui/joy/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material"
import { FormAdd } from "./FormAdd";
import { Link, useNavigate } from "react-router-dom";
import { postPayment } from "../../services/pagos-services";
import { IEstudiantes } from "../../store/IEstudiantes";

export function SuscripcionesLista() {
    const [suscripciones, setSuscripciones] = useState<ISuscripciones[]>([])
    const [showNew, setShowNew] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(() => {
        getSuscriptions()
            .then(data => {
                setSuscripciones(data)
            })
    }, [])


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const alumnoId = formData.get("alumnoId") as string
        const claseId = formData.get("claseId") as string
        const costo = formData.get("costo") as number
        const pago = formData.get("costo") as number
        const fecha = formData.get("fecha") as string

        const alumno = alumnoId.split('-')[1]
        const clase = claseId.split('-')[1]
        const diaPago = fecha.split('-')[2]
        const fechaPago = fecha.split('-').reverse().join('/')

        const bodyDataSuscriptions = {
            alumno: alumno,
            clase: clase,
            costo: costo,
            diaPago: diaPago,
            estado: '1',
        }

        const bodyDataPayment = {
            alumno: alumno,
            clase: clase,
            pago: pago,
            fechaPago: fechaPago,
        }

        postSuscriptions(bodyDataSuscriptions)
        postPayment(bodyDataPayment)
        navigate('/admin/pagos')
    }

    const handleDelete = (id: string) => {
        deleteSuscriptions(id)
    }

    // const handleInterfaceAlumno = (alumno:IEstudiantes) =>{

    // }

    return (
        <>
            <Button
                variant="contained"
                color="success"
                onClick={() => setShowNew(true)}>
                Agregar
            </Button>

            <Sheet>
                <Table stripe="odd" aria-label="striped table" sx={{ textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ALUMNO</th>
                            <th>CLASE</th>
                            <th>COSTO</th>
                            <th>DIA DE PAGO</th>
                            <th>ESTADO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {suscripciones.reverse().map((suscripcion) => (
                            <tr key={suscripcion.id}>
                                <td>{suscripcion.id}</td>
                                <td>
                                    {/* <Link overlay onClick={() => handleInterfaceAlumno(suscripcion.alumno)}> */}
                                        {suscripcion.alumno}
                                    {/* </Link> */}
                                </td>
                                <td>{suscripcion.clase}</td>
                                <td>${suscripcion.costo}</td>
                                <td>{`Los dias ${suscripcion.diaPago} del mes`}</td>
                                <td>{suscripcion.estado != 0 ? "ACTIVO" : "INACTIVO"}</td>
                                <td>
                                    <IconButton onClick={() => handleDelete(suscripcion.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Modal open={showNew} onClose={() => setShowNew(false)}>
                    <ModalDialog>
                        <form onSubmit={handleSubmit}>
                            <FormAdd />
                            <Button
                                color="error"
                                onClick={() => setShowNew(false)}>
                                Cancelar
                            </Button>
                        </form>
                    </ModalDialog>
                </Modal>
            </Sheet >
        </>
    )
}