import TopAppBar from "./view/header/top-app-bar";
import {useRoutes} from "react-router-dom";
import {routes} from "./config/routes";
import {Container} from "@mui/material";

function App() {
    const router = useRoutes(routes)
    return (
        <>
            <TopAppBar/>
            <Container fixed sx={{pt:10,bgcolor:'background.main'}}>
                {router}
            </Container>

        </>
    );
}

export default App;
