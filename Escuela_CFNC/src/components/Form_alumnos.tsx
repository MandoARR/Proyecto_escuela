import { Button, Card, CardContent, Input, Stack } from "@mui/material";

export function Form_alumnos() {
  return (
    <>
      <br></br>
      <form>
        <Card sx={{ maxWidth: 450 }}>
          <CardContent>
            <Stack spacing={1}>
              <Input placeholder="Nombre" name="nombre"></Input>
              <Input placeholder="Apellido" name="apellido"></Input>
              <Button type="submit">Agregar</Button>
            </Stack>
          </CardContent>
        </Card>
      </form>
    </>
  )
}