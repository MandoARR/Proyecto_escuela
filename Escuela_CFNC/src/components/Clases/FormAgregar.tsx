import { Button, Card, CardContent, Input, Stack } from "@mui/material";

export function FormAgregar() {
  return (
    <>
      <Card sx={{ maxWidth: 450 }}>
        <CardContent>
          <Stack spacing={1}>
            <Input required placeholder="Nombre de la Clase" name="nombre"></Input>
            <Input
              required
              inputProps={{
                inputMode: 'numeric', pattern: '[0-9]*',
              }}
              placeholder="Costo"
              name="costo">
            </Input>
            <Button type="submit">Guardar</Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}