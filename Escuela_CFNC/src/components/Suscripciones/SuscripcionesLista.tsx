import { useState } from "react"
import { ISuscripciones } from "../../store/ISuscripciones"
import { getSuscriptions } from "../../services/suscriptions-services"
import { Sheet, Table } from "@mui/joy"
import { Button } from "@mui/material"

export function SuscripcionesLista() {
    const [suscripciones, setSuscripciones] = useState<ISuscripciones[]>([])

    getSuscriptions()
        .then(data => {
            setSuscripciones(data)
        })

    return (
        <>
            <Button>Agregar</Button>
            <div>
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
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Sheet>

            </div>
        </>
    )
}