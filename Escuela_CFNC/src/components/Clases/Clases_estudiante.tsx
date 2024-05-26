import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export function Clases_estudiante() {
    return (
        <>
            <br></br>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://png.pngtree.com/png-clipart/20200709/original/pngtree-modern-guitar-music-logo-png-image_3570998.jpg"
                        alt="Guitarra"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Clases de Guitarra
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li>Status</li>
                                <li>Dia de pago</li>
                                <li>Costo</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}