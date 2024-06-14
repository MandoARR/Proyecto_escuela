import { ClasesLista } from "../components/Clases/ClasesLista";
import { FormClases } from "../components/Clases/FormClases";

export default function Clases_interfaz() {
  return (
    <section className="secIterface">
      <div className="divList">
        <ClasesLista />
      </div>
      <div className="divForm">
        <FormClases />
      </div>
    </section>
  )
}
