import { Table, TableContainer } from "@mui/material"
import { TabelaMedidasHead } from "./TabelaMedidasHead"
import { TabelaMedidasBody } from "./TabelaMedidasBody"

export const TabelaMedidas = () => {
    return (
        <TableContainer sx={{ marginBottom: '2em' }}>
            <Table>
                <TabelaMedidasHead />
                <TabelaMedidasBody />
            </Table>
        </TableContainer>
    )
}