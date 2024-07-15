import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CompanyCard = ({ company }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={company.image}
                alt={company.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {company.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {company.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">VER MODELOS</Button>
                <Button size="small">MAIS INFO</Button>
            </CardActions>
        </Card>
    );
};

export default CompanyCard;



