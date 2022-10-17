import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Avatar, Chip, Grid} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../actions/cart-action";


export default function ProductCard(props) {
    const product = props.product;
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }

    const cartRef = cart.find((item) => item.id === product.id);
    const qty = !cartRef ? 0 : cartRef.qty;

    return (
        <Card sx={{maxWidth: 345, marginY: 2}}>
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
                        <Chip variant="outlined" color="secondary" avatar={<Avatar>$</Avatar>}
                              label={`${product.price}`}/>
                    </Grid>
                    <Grid>
                        {
                            qty ?
                                <Button color="secondary" onClick={handleAddToCart} variant="outlined">
                                   Cart ({qty})
                                    <ShoppingCartIcon sx={{ml: 2}}/>
                                </Button>
                                :
                                <Button color="secondary" onClick={handleAddToCart} variant="contained">
                                    Add to cart <AddShoppingCartIcon sx={{ml: 2}}/>
                                </Button>
                        }
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}
