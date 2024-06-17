import React from 'react';
import { Box, TextField, Typography, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
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

function TicketsPage() {
  return (
    <Box height={{ xl: "100vh", lg: "100vh" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Box>
          <Typography color="white" variant='h6'> Tickets </Typography>
        </Box>
        <Box>
          <TextField id="" label="" placeholder="Search Here" focused sx={{ width: "350px", '& .MuiInput-underline:before': { borderBottom: 'none' } }}
            InputProps={{
              style: { color: 'white', caretColor: 'white', padding: '0px 15px' },
              startAdornment: (<SearchIcon style={{ color: 'white', marginRight: "13px" }} />)
            }} />
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
          <Box sx={{ minWidth: 210 }}>
            <FormControl fullWidth sx={{ backgroundColor: "#0b253d", borderRadius: "4px" }}>
              <InputLabel id="demo-simple-select-label1" sx={{ color: "white" }}>All Tickets</InputLabel>
              <Select labelId="demo-simple-select-label1" id="demo-simple-select1" label="All Tickets" IconComponent={ExpandMoreIcon}
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
      </Box>
      <Box sx={{ mb: 3 }}>
        <TableContainer component={Paper} sx={{ pt: 0.5, px: 2, pb: 1.3, backgroundColor: "#0b253d" }}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white", border: "0" }} align='center'>S.No</TableCell>
                <TableCell sx={{ color: "white", border: "0" }} align='center'>Ticket ID</TableCell>
                <TableCell sx={{ color: "white", border: "0" }} align='center'>Name</TableCell>
                <TableCell sx={{ color: "white", border: "0" }} align='center'>Email ID</TableCell>
                <TableCell sx={{ color: "white", border: "0" }} align='center'>Subject</TableCell>
                <TableCell sx={{ color: "white", border: "0" }} align='center'>Category</TableCell>
                <TableCell sx={{ color: "white", border: "0" }} align='center'>Status</TableCell>
                <TableCell sx={{ color: "white", border: "0" }} align='center'>Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: "#021629" }}>
              <TableRow>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' >01 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' >#12345678 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > Sahil S Diyora </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > SahilDiyora123@gmail.com. </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > Lorem ipsum dolor sit. </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > Bug </TableCell>
                <TableCell sx={{ color: "green", borderBottom: "5px solid #0b253d" }} align='center' > In Progress </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > 2 Hours Ago </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' >02 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' >#12345678 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > Sahil S Diyora </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > SahilDiyora123@gmail.com. </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > Lorem ipsum dolor sit. </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > Support </TableCell>
                <TableCell sx={{ color: "red", borderBottom: "5px solid #0b253d" }} align='center' > Closed </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > 5 Days Ago </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' >03 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' >#12345678 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > Sahil S Diyora </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > SahilDiyora123@gmail.com. </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > Lorem ipsum dolor sit. </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > General </TableCell>
                <TableCell sx={{ color: "#3B90DC", borderBottom: "5px solid #0b253d" }} align='center' > On Hold </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > 2 Aug , 2022 </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' >04 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' >#12345678 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > Sahil S Diyora </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > SahilDiyora123@gmail.com. </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > Lorem ipsum dolor sit. </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > General </TableCell>
                <TableCell sx={{ color: "#3B90DC", borderBottom: "5px solid #0b253d" }} align='center' > On Hold </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "5px solid #0b253d" }} align='center' > Jan 20 , 2024 - 06:56 </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default TicketsPage;