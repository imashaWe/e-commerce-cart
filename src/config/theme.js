import * as React from 'react';
import {createTheme} from "@mui/material";
import {Link as RouterLink} from 'react-router-dom';

const LinkBehavior = React.forwardRef((props, ref) => {
    const {href, ...other} = props;
    // Map href (MUI) -> to (react-router)
    return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#00ABB3',
        },
        secondary: {
            main: '#3C4048',
        },
        background: {
            main: "#F7F7F7"
        },
        text: {
            main: "#fff"
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            },
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
    },
});

export default theme;
