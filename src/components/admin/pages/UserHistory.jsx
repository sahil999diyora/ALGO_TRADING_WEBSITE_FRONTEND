import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import DownloadIcon from '@mui/icons-material/Download';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function UserHistory() {
    return (
        <Box sx={{ height: "100vh" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
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
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ minWidth: 160, mr: 4 }}>
                        <FormControl fullWidth sx={{ backgroundColor: "#0b253d", borderRadius: "4px" }}>
                            <InputLabel id="demo-simple-select-label0" sx={{ color: "white" }} >Select P / L</InputLabel>
                            <Select labelId="demo-simple-select-label0" id="demo-simple-select0" label="Select P / L" IconComponent={ExpandMoreIcon}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        color: '#3B90DC',
                                        fontSize: "30px"
                                    },
                                    '& .MuiSelect-select': {
                                        color: 'white',
                                    },
                                }}
                            >
                                <MenuItem value="ONE">ONE</MenuItem>
                                <MenuItem value="TWO">TWO</MenuItem>
                                <MenuItem value="THREE">THREE</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 180 }}>
                        <FormControl fullWidth sx={{ backgroundColor: "#0b253d", borderRadius: "4px" }}>
                            <InputLabel id="demo-simple-select-label1" sx={{ color: "white" }}>Select Order Type</InputLabel>
                            <Select labelId="demo-simple-select-label1" id="demo-simple-select1" label="Select Order Type" IconComponent={ExpandMoreIcon}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        color: '#3B90DC',
                                        fontSize: "30px"
                                    }, '& .MuiSelect-select': {
                                        color: 'white',
                                    },
                                }}
                            >
                                <MenuItem value="HI">HI</MenuItem>
                                <MenuItem value="HELLO">HELLO</MenuItem>
                                <MenuItem value="GOOD MORNING">GOOD MORNING</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box>
                    <Button variant="text" sx={{ textTransform: "none" }} startIcon={<DownloadIcon sx={{ backgroundColor: "#3B90DC", color: "black", borderRadius: "5px", height: "20px", width: "20px", p: 0.1 }} />}>
                        Download PDF
                    </Button>
                </Box>
            </Box>
            <Box sx={{ mb: 3 }}>
                <TableContainer component={Paper} sx={{ pt: 0.5, px: 2, pb: 1.3, backgroundColor: "#0b253d" }}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>Date</TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>Stock Name</TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>Buy Price</TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>Sell Price</TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>Buy Status</TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>Sell Status</TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>P / L</TableCell>
                                <TableCell sx={{ color: "white", border: "0" }} align='center'>Reason</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ backgroundColor: "#021629" }}>
                            <TableRow>
                                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' >02/08/2004 </TableCell>
                                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' >Nifty13022024 </TableCell>
                                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > ₹100,00 </TableCell>
                                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > - </TableCell>
                                <TableCell sx={{ color: "red", borderBottom: "5px solid #0b253d" }} align='center' > Cancelled </TableCell>
                                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > - </TableCell>
                                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > - </TableCell>
                                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > Lorem ipsum dolor sit amet consectetur. </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' >02/08/2004 </TableCell>
                                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' >Nifty13022024 </TableCell>
                                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > ₹100,00 </TableCell>
                                <TableCell sx={{ color: "red", borderBottom: "5px solid #0b253d" }} align='center' > ₹110,00 </TableCell>
                                <TableCell sx={{ color: "green", borderBottom: "5px solid #0b253d" }} align='center' > Executed </TableCell>
                                <TableCell sx={{ color: "green", borderBottom: "5px solid #0b253d" }} align='center' > Executed </TableCell>
                                <TableCell sx={{ color: "#3B90DC", borderBottom: "5px solid #0b253d" }} align='center' > +₹10 </TableCell>
                                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > Lorem ipsum dolor sit amet consectetur. </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' >02/08/2004 </TableCell>
                                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' >Nifty13022024 </TableCell>
                                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > ₹100,00 </TableCell>
                                <TableCell sx={{ color: "red", borderBottom: "5px solid #0b253d" }} align='center' > ₹110,00 </TableCell>
                                <TableCell sx={{ color: "green", borderBottom: "5px solid #0b253d" }} align='center' > Executed </TableCell>
                                <TableCell sx={{ color: "green", borderBottom: "5px solid #0b253d" }} align='center' > Executed </TableCell>
                                <TableCell sx={{ color: "#3B90DC", borderBottom: "5px solid #0b253d" }} align='center' > +₹10 </TableCell>
                                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > Lorem ipsum dolor sit amet consectetur. </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                <Button variant="contained" color="primary" sx={{ textTransform: "none" }}>
                    Total P / L : + ₹20
                </Button>
            </Box>
        </Box>
    )
}

export default UserHistory;