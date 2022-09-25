import TopAppBar from "./view/header/top-app-bar";
import {useRoutes} from "react-router-dom";
import {routes} from "./config/routes";

function App() {
    const router = useRoutes(routes)
    return (
        <>
            <TopAppBar/>
            {router}
        </>
    );
}

export default App;
