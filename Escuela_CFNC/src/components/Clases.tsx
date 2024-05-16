import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ClasesE() {
  return (
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
  );
}
