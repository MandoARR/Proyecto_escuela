import { ClasesLista } from "../components/Clases/ClasesLista";
import { FormClases } from "../components/Clases/FormClases";

export default function Clases_interfaz() {

  return (
    <>
      <table>
        <td >
          <ClasesLista />
        </td>

        <td className="tdClases_interfa">
          <FormClases />
        </td>
      </table>
    </>
  )
}
