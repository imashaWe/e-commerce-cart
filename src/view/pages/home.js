import {useDispatch, useSelector} from "react-redux";
import {Button, Grid} from "@mui/material";
import {fetchProducts} from "../../actions/product-action";
import ProductCard from "../componets/product-card";
import {useEffect} from "react";

export default function Home() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    useEffect(() => {
        dispatch(fetchProducts());
    }, [0])
    if (!products.length) {
        return <h1>No data</h1>;
    }
    return <>
        <Grid container>
            {
                products.map((p) => <Grid xs={4}><ProductCard product={p}/></Grid>)
            }
        </Grid>
    </>
}