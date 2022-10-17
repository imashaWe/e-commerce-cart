import TopAppBar from "./view/header/top-app-bar";
import {useRoutes} from "react-router-dom";
import {routes} from "./config/routes";
import {Box, Grid} from "@mui/material";

function App() {
    const router = useRoutes(routes)
    return (
        <>
            <TopAppBar/>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item>
                    <Box fixed sx={{pt:10,px:5,overflow: 'auto',bgcolor:'background.main'}} height="88vh" width="80vw">
                        {router}
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default App;
