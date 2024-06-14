import { Alumnos_lista } from "../components/Alumnos_Estudiante/Alumnos_lista";
import { Form_alumnos } from "../components/Alumnos_Estudiante/Form_alumnos";

export function Alumnos_interfaz() {
    return (
        <section className="secIterface">
            <div className="divList">
                <Alumnos_lista />
            </div>
            <div className="divForm">
                <Form_alumnos />
            </div>
        </section>
    )
}
