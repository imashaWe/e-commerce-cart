import {
    Button,
    ButtonGroup,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {addToCart, removeFromCart} from "../../actions/cart-action";

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    let totalAmount = 0;
    cart.forEach((item) => totalAmount += item.price * item.qty);

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell align="right">Unit Price&nbsp;($)</TableCell>
                        <TableCell align="right">Amount&nbsp;($)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        cart.map((item) =>
                            <TableRow
                                key={item.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <img src={item.thumbnail} width="50%" alt={item.title}/>
                                        </Grid>
                                        <Grid item xs={8}>
                                            {item.title}
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell>
                                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                        <Button color="success"
                                                onClick={() => dispatch(addToCart(item))}>
                                            <AddIcon/>
                                        </Button>
                                        <Button disabled={true} color="secondary">{item.qty}</Button>
                                        <Button color="error"
                                                onClick={() => dispatch(removeFromCart(item))}>
                                            <RemoveIcon/>
                                        </Button>
                                    </ButtonGroup>
                                </TableCell>
                                <TableCell align="right">
                                    {item.price.toFixed(2)}
                                </TableCell>
                                <TableCell align="right">
                                    {(item.price * item.qty).toFixed(2)}
                                </TableCell>
                            </TableRow>)
                    }
                    <TableRow
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell component="th" scope="row">
                            <Typography variant="h5">
                                Total Amount
                            </Typography>
                        </TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">
                            <Typography variant="h5">
                                {totalAmount.toFixed(2)}
                            </Typography></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}