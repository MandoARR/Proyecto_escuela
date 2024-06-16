import { Input } from "@mui/joy";
import { Button, Card, CardContent, Stack } from "@mui/material";


export function FormAdd() {
  return (
    <>
      <Card sx={{ maxWidth: 450 }}>
        <CardContent>
          <Stack spacing={1}>
            <Input required placeholder="Alumno" name="alumno"></Input>
            <Input required placeholder="Clase" name="clase"></Input>
            <Input required placeholder="Costo " name="costo"></Input>
            <Input required type="date" name="diaPago"></Input>
            <Button type="submit">Agregar</Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}