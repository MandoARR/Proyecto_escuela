import { Autocomplete, Input } from "@mui/joy";
import { Button, Card, CardContent, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { getStudents } from "../../services/studets-services";
import { getClases } from "../../services/clases-services";
import { IClases } from "../../store/IClases";
import { IEstudiantes } from "../../store/IEstudiantes";

interface IOptions {
  id: string,
  label: string
}

export function FormAdd() {
  const [alumnos, setAlumnos] = useState<string[]>([])
  const [clases, setClases] = useState<IClases[]>([])
  const [clasesOptions, setClasesOptions] = useState<IOptions[]>([])
  const [selectedClase, setSelectedClase] = useState<number>(0)

  useEffect(() => {
    getStudents()
      .then((data: IEstudiantes[]) => {
        const idEstudiantes = data.map((element: IEstudiantes) =>
          (element.id + "-" + element.nombre))
        setAlumnos(idEstudiantes)
      })

    getClases()
      .then((data: IClases[]) => {
        const idClases = data.map((element: IClases) =>
          ({ id: element.id, label: element.id + "-" + element.nombre }))
        setClasesOptions(idClases)
        setClases(data)
      })
  }, [])

  const handleClaseChange = (e: any, newValue: IOptions) => {
    console.log(newValue)
    const selectedClaseS = clases.find((clase: IClases) => clase.id === newValue.id)
    setSelectedClase(selectedClaseS?.costo)
  }

  return (
    <>
      <Card sx={{ maxWidth: 450 }}>
        <CardContent>
          <Stack spacing={1}>
            <Autocomplete options={alumnos} required placeholder="ID Alumno" name="alumno"></Autocomplete>
            <Autocomplete
              options={clasesOptions}
              required
              placeholder="ID Clase"
              name="clase"
              onChange={handleClaseChange}
            >
            </Autocomplete>
            <div key={selectedClase}>
              <Input defaultValue={selectedClase} required placeholder="Costo" name="costo"></Input>
            </div>
            <Input required type="date" name="fecha"></Input>
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
  //             // onClick={() => handleCosto(clases.costo)}
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