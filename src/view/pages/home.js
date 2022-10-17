import {useDispatch, useSelector} from "react-redux";
import {Grid} from "@mui/material";
import {fetchProducts} from "../../actions/product-action";
import ProductCard from "../componets/product-card";
import {useEffect} from "react";
import CardSkeleton from "../componets/card-skeleton";

export default function Home() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts());
    }, [0]);

    if (!products.length) {
        return <Grid container spacing={3}>
            {
                Array.from(new Array(20)).map((n,i) => <Grid item xs={4}  key={i}><CardSkeleton/></Grid>)
            }
        </Grid>
    }

    return <Grid container spacing={3}>
        {
            products.map((p) => <Grid item xs={4} key={p.id}><ProductCard product={p}/></Grid>)
        }
    </Grid>;

}