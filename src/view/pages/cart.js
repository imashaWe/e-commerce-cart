import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export default function Cart() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Unit Price&nbsp;(g)</TableCell>
                        <TableCell align="right">Amount&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow
                        // key={row.name}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell component="th" scope="row">
                            iPhone 9
                        </TableCell>
                        <TableCell align="right">3</TableCell>
                        <TableCell align="right">200.00</TableCell>
                        <TableCell align="right">600.00</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}