import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Chip, Grid, IconButton} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function ProductCard(props) {
    const product = props.product;
    return (
        <Card sx={{ maxWidth: 345  ,marginY:2}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={product.thumbnail}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Chip label={`$ ${product.price}`} color="primary" />
                    </Grid>
                    <Grid>
                        <Button variant="outlined">Add to cart <AddShoppingCartIcon /></Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}
