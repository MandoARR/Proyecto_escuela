import { Autocomplete, Input } from "@mui/joy";
import { Button, Card, CardContent, Stack } from "@mui/material";
import { useState } from "react";
import { getStudents } from "../../services/studets-services";
import { getClases } from "../../services/clases-services";
import { IClases } from "../../store/IClases";

export function FormAdd() {
  const [alumnos, setAlumnos] = useState<string[]>([])
  // const [clases, setClases] = useState<IClases[]>([])
  const [clases, setClases] = useState<string[]>([])
  const [selectedClase, setSelectedClase] = useState<number>()

  getStudents()
    .then((data) => {
      const idAlumnos = data.map((element: { id: string }) => element.id)
      setAlumnos(idAlumnos)
    })

  getClases()
    .then((data) => {
      const idClases = data.map((element: { id: string }) => element.id)
      setClases(idClases)
    })

  // getClases()
  //   .then((data) => {
  //     setClases(data)
  //   })

  const handleCosto = (costo: number) => {
    setSelectedClase(costo)
  }

  return (
    <>
      <Card sx={{ maxWidth: 450 }}>
        <CardContent>
          <Stack spacing={1}>
            {/* <Input required placeholder="Alumno" name="alumno"></Input>*/}
            <Autocomplete options={alumnos} required placeholder="ID Alumno" name="alumno"></Autocomplete>
            {/* <Input required placeholder="Clase" name="clase"></Input> */}
            <Autocomplete
              options={clases}
              required
              placeholder="ID Clase"
              name="clase"
            // onChange={() => handleCosto(clases.costo)}
            >
            </Autocomplete>
            <Input required placeholder="Costo " name="costo"></Input>
            <Input required type="date" name="diaPago"></Input>
            <Button type="submit">Agregar</Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
  // return (
  //   <>
  //     <Card sx={{ maxWidth: 450 }}>
  //       <CardContent>
  //         <Stack spacing={1}>
  //           {/* <Input required placeholder="Alumno" name="alumno"></Input>*/}
  //           <Autocomplete options={alumnos} required placeholder="ID Alumno" name="alumno"></Autocomplete>
  //           {/* <Input required placeholder="Clase" name="clase"></Input> */}
  //           <Autocomplete
  //             required
  //             placeholder="Clase"
  //             name="Clase"
  //             options={clases.map((element:IClases) => {
  //               element.id
  //             })} 
  //             // onChange={() => handleCosto(clases.costo)}
  //             >
  //           </Autocomplete>
  //           <Input required placeholder="Costo " name="costo"></Input>
  //           <Input required type="date" name="diaPago"></Input>
  //           <Button type="submit">Agregar</Button>
  //         </Stack>
  //       </CardContent>
  //     </Card>
  //   </>
  // )
}




/* ::::::NOTA:::::: 
se podria intentar utilizar modal para realizar la validacion de costo al seleccionar la ID de la clase

*/