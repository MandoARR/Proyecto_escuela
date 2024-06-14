import { Button, Card, CardContent, Input, Stack } from "@mui/material";

export function Form_agregar() {
  return (
    <>
      <Card sx={{ maxWidth: 450 }}>
        <CardContent>
          <Stack spacing={1}>
            <Input required placeholder="Nombre" name="nombre"></Input>
            <Input required placeholder="Apellido" name="apellido"></Input>
            <Button type="submit">Agregar</Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}