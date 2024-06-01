import { Button, Card, CardContent, Input, Stack } from "@mui/material";

export function FormAgregar() {
  return (
    <>
      <Card sx={{ maxWidth: 450 }}>
        <CardContent>
          <Stack spacing={1}>
            <Input placeholder="Nombre de la Clase" name="nombre"></Input>
            <Input placeholder="Costo" name="costo"></Input>
            <Button type="submit">Agregar</Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}