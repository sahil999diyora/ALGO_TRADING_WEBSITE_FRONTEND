import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import DownloadIcon from '@mui/icons-material/Download';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
    '& input': {
        color: 'white', // Set input text color to white
        fontSize: "14px",
    },
    '& .MuiSvgIcon-root': {
        color: '#3B90DC', // Set calendar icon color to white
    },
    '& .MuiInputLabel-root': {
        color: 'white', // Set label text color to white
        fontSize: "14px",
    },
    backgroundColor: "#0b253d",
    borderRadius: "4px",
    width: "160px",
}));

function UserUnlinked() {
    return (
        <Box sx={{ height: "100vh" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography color="white" sx={{ mr: 6 }}> Sahil S. Diyora </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CircleIcon sx={{ color: "#3B90DC", fontSize: "5px", mr: 0.8 }} />
                        <Typography sx={{ color: "#3B90DC" }}> #012345678 </Typography>
                    </Box>
                </Box>
                <Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <StyledDatePicker label="START DATE" />
                            <Typography color="white" sx={{ fontSize: "14px", mx: 1.7 }}>TO</Typography>
                            <StyledDatePicker label="END DATE" />
                        </Box>
                    </LocalizationProvider>
                </Box>
                <Box>
                    <Button variant="text" sx={{ textTransform: "none" }} startIcon={<DownloadIcon sx={{ backgroundColor: "#3B90DC", color: "black", borderRadius: "5px", height: "20px", width: "20px", p: 0.1 }} />}>
                        Download PDF
                    </Button>
                </Box>
            </Box>
            <Box sx={{ mt: 2.5 }}>
                <TableContainer component={Paper} sx={{ pt: 0.5, px: 2, pb: 2, backgroundColor: "#0b253d" }}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>Date</TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>Linked Time</TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>Kite App</TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>Un Linked Time</TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>Kite App</TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>Index</TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>Buy / Sell</TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>Reason</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ backgroundColor: "#021629" }}>
                            <TableRow>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > 10/12/2029 </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > 09:00 PM </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > Linked </TableCell>
                                <TableCell sx={{ color: "red", border: "0" }} align='center' > 12:00 PM </TableCell>
                                <TableCell sx={{ color: "red", border: "0" }} align='center' > Un Linked </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > Nifty989878988 </TableCell>
                                <TableCell sx={{ color: "#3B90DC", border: "0" }} align='center' > Buy </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > Not Executed Because of Unlinked </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > 10/12/2029 </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > 09:00 PM </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > Linked </TableCell>
                                <TableCell sx={{ color: "red", border: "0" }} align='center' > 12:00 PM </TableCell>
                                <TableCell sx={{ color: "red", border: "0" }} align='center' > Un Linked </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > Nifty989878988 </TableCell>
                                <TableCell sx={{ color: "#3B90DC", border: "0" }} align='center' > Buy </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > Not Executed Because of Unlinked </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > 10/12/2029 </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > 09:00 PM </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > Linked </TableCell>
                                <TableCell sx={{ color: "red", border: "0" }} align='center' > 12:00 PM </TableCell>
                                <TableCell sx={{ color: "red", border: "0" }} align='center' > Un Linked </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > Nifty989878988 </TableCell>
                                <TableCell sx={{ color: "#3B90DC", border: "0" }} align='center' > Buy </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > Not Executed Because of Unlinked </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > 10/12/2029 </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > 09:00 PM </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > Linked </TableCell>
                                <TableCell sx={{ color: "red", border: "0" }} align='center' > 12:00 PM </TableCell>
                                <TableCell sx={{ color: "red", border: "0" }} align='center' > Un Linked </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > Nifty989878988 </TableCell>
                                <TableCell sx={{ color: "#3B90DC", border: "0" }} align='center' > Buy </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > Not Executed Because of Unlinked </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > 10/12/2029 </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > 09:00 PM </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > Linked </TableCell>
                                <TableCell sx={{ color: "red", border: "0" }} align='center' > 12:00 PM </TableCell>
                                <TableCell sx={{ color: "red", border: "0" }} align='center' > Un Linked </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > Nifty989878988 </TableCell>
                                <TableCell sx={{ color: "#3B90DC", border: "0" }} align='center' > Buy </TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center' > Not Executed Because of Unlinked </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default UserUnlinked;
