import Home from "../view/pages/home";
import Cart from "../view/pages/cart";

export const routes = [
    {
        index: true,
        element: <Home/>
    },
    {
        path:'/cart',
        element: <Cart/>
    }
]