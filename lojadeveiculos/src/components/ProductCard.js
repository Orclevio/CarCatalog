import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';


const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={product.image}
          alt={product.name}
          style={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <Button variant="contained" color="primary" style={{ margin: 10 }}>
        VER VERSÕES
      </Button>
    </Card>
  );
};

export default ProductCard;
