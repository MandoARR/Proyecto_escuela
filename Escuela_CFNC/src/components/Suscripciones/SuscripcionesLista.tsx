import { FormEvent, useState } from "react"
import { ISuscripciones } from "../../store/ISuscripciones"
import { deleteSuscriptions, getSuscriptions, postSuscriptions } from "../../services/suscriptions-services"
import { ModalDialog, Sheet, Table } from "@mui/joy"
import Modal from '@mui/joy/Modal';
import IconButton from '@mui/joy/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material"
import { FormAdd } from "./FormAdd";
import { useNavigate } from "react-router-dom";

export function SuscripcionesLista() {
    const [suscripciones, setSuscripciones] = useState<ISuscripciones[]>([])
    const [showNew, setShowNew] = useState<boolean>(false)
    const navigate = useNavigate()

    getSuscriptions()
        .then(data => {
            setSuscripciones(data)
        })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const alumno = formData.get("alumno")
        const clase = formData.get("clase")
        const costo = formData.get("costo")
        const diaPago = formData.get("diaPago")

        const bodyData = {
            alumno: alumno,
            clase: clase,
            costo: costo,
            diaPago: diaPago,
            estado: '1',
        }

        postSuscriptions(bodyData)
        navigate('/admin/SuscripNav')
    }

    const handleDelete = (id:string) => {
        deleteSuscriptions(id)
    }

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
                        {suscripciones.map((suscripcion) => (
                            <tr key={suscripcion.id}>
                                <td>{suscripcion.id}</td>
                                <td>{suscripcion.alumno}</td>
                                <td>{suscripcion.clase}</td>
                                <td>{suscripcion.costo}</td>
                                <td>{suscripcion.diaPago}</td>
                                <td>{suscripcion.estado != 0 ? "ACTIVO" : "INACTIVO"}</td>
                                <td>
                                    <IconButton onClick={() => handleDelete(suscripcion.id)}>
                                        <DeleteIcon/>
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
            </Sheet>
        </>
    )
}