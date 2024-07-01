import { useEffect, useState } from "react"
import { IPagos } from "../../store/IPagos"
import { deletePayment, getPayment } from "../../services/pagos-services"
import { IconButton, Sheet, Table } from "@mui/joy"
import DeleteIcon from '@mui/icons-material/Delete';

export function PagosList() {
    const [pagos, setPagos] = useState<IPagos[]>([])

    useEffect(() => {
        getPayment()
            .then(data => {
                setPagos(data)
            })
    })

    const handleDelete = (id: string) => {
        deletePayment(id)
    }

    return (
        <Sheet>

            <Table stripe="odd" aria-label="striped table" sx={{ textAlign: 'left' }}>
                <thead>
                    <th>ID</th>
                    <th>ALUMNO</th>
                    <th>CLASE</th>
                    <th>PAGO</th>
                    <th>FECHA DE PAGO</th>
                </thead>
                <tbody>
                    {pagos.reverse().map((pago) => (
                        <tr key={pago.id}>
                            <td>{pago.id}</td>
                            <td>{pago.alumno}</td>
                            <td>{pago.clase}</td>
                            <td>${pago.pago}</td>
                            <td>{pago.fechaPago}</td>
                            <td>
                                <IconButton onClick={() => handleDelete(pago.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Sheet>
    )
}