import { useState } from "react"
import { IPagos } from "../../store/IPagos"
import { getPayment } from "../../services/pagos-services"
import { Sheet, Table } from "@mui/joy"

export function PagosList() {
    const [pagos, setPagos] = useState<IPagos[]>([])

    getPayment()
        .then(data => {
            setPagos(data)
        })

    return (
        <Sheet>

            <Table stripe="odd" aria-label="striped table" sx={{ textAlign: 'left' }}>
                <thead>
                    <th>ID</th>
                    <th>ALUMNO</th>
                    <th>CLASE</th>
                    <th>PAGO</th>
                    <th>DIA DE PAGO</th>
                </thead>
                <tbody>
                    {pagos.map((pago) => (
                        <tr key={pago.id}>
                            <td>{pago.id}</td>
                            <td>{pago.alumno}</td>
                            <td>{pago.clase}</td>
                            <td>{pago.pago}</td>
                            <td>{pago.fechaPago}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Sheet>
    )
}