import { ClasesLista } from "../components/Clases/ClasesLista";
import { FormClases } from "../components/Clases/FormClases";

export default function Clases_interfaz() {

  return (
    <section >
      <div >
        <ClasesLista />
      </div>

      <div className="divClases_interfaz">
        <FormClases />
      </div>
    </section>
  )
}
