import { useState } from "react"
import { ISuscripciones } from "../../store/ISuscripciones"
import { getSuscriptions } from "../../services/suscriptions-services"
import { Sheet, Table } from "@mui/joy"

export function SuscripcionesLista() {
    const [suscripciones, setSuscripciones] = useState<ISuscripciones[]>([])

    getSuscriptions()
        .then(data => {
            setSuscripciones(data)
        })

    return (
        <>
            <h1>Suscripciones que saben a Inscripciones</h1>
            <div>
                <Sheet>
                    <Table aria-label="striped table">
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
                                    <td>{suscripcion.alumno}</td>
                                    <td>{suscripcion.clase}</td>
                                    <td>{suscripcion.costo}</td>
                                    <td>{suscripcion.diaPago}</td>
                                    <td>{suscripcion.estado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Sheet>

            </div>
        </>
    )
}