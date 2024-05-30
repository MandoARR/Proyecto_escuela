import { Clases_lista } from '../components/Clases/Clases_lista';
import { Form_clases } from '../components/Clases/Form_Clases';

export default function Clases_interfaz() {

  return (
    <>
      <table>
        <td>
          <Clases_lista/>
        </td>
        <td></td>
        <td>
          <Form_clases/>
        </td>
      </table>
    </>

  )
}
