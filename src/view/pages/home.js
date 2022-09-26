import {useDispatch} from "react-redux";
import {Button} from "@mui/material";
import {fetchProducts} from "../../actions/product-action";

export default function Home() {
    const dispatch = useDispatch()
    return <><Button variant="contained" onClick={()=>dispatch(fetchProducts())}>Click Me</Button> </>
 }