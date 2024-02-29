import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function Homework({ headers, data }) {
    return (
        <TableContainer className='px-4 pt-1' component={Paper} sx={{
            backgroundColor: 'var(--card_background)',
            borderRadius: '16px',
            boxShadow: 'var(--card-shadow)',
            height: '100%',
            width: '100%',
            color: 'var(--card_text_color)'
        }}>
            <h1 className='text-xl text-center font-semibold my-4'>Pending Homework</h1>
            <Table size="small" aria-label="a dense table" >
                <TableHead>
                    <TableRow>
                        {
                            headers.map((header, index) => {
                                return (
                                    <TableCell sx={{
                                        color: 'var(--card_text_color)',
                                        borderColor: 'rgba(145, 158, 171, 0.2)'
                                    }} key={index}>
                                        <span className='text-base font-medium'>{header.title}</span>
                                    </TableCell>
                                )
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {
                                headers.map((header, index) => {
                                    return (
                                        <TableCell sx={{
                                            color: 'var(--card_text_color)',
                                            borderColor: 'rgba(145, 158, 171, 0.2)'
                                        }} key={index}>
                                            <span className={`text-xs font-light ${row[header.dataKey] === 'pending' && 'pending-chip'}`}>
                                                {row[header.dataKey]}
                                            </span>

                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Homework