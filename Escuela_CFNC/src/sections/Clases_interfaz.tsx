import { ClasesLista } from "../components/Clases/ClasesLista";
import { FormClases } from "../components/Clases/FormClases";

export default function Clases_interfaz() {

  return (
    <section className="SecClases_interfaz">
      <div>
        <ClasesLista />
      </div>

      <div>
        <FormClases />
      </div>
    </section>
  )
}
