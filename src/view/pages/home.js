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
        return <Grid container>
            {
                Array.from(new Array(20)).map((n,i) => <Grid xs={4} spacing={3} key={i}><CardSkeleton/></Grid>)
            }
        </Grid>
    }

    return <Grid container>
        {
            products.map((p) => <Grid xs={4} spacing={3} key={p.id}><ProductCard product={p}/></Grid>)
        }
    </Grid>;

}