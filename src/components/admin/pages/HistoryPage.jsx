import React from 'react';
import { Avatar, Box, Button, TextField, Typography, styled } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
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
import LogoImage from '../../../assets/LogoImage.jpg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


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


function HistoryPage() {

  const history = useHistory();
  return (
    <Box sx={{ height: "100vh" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography color="white" variant='h6'> History Details </Typography>
        <Button variant="text" sx={{ textTransform: "none" }} startIcon={<DownloadIcon sx={{ backgroundColor: "#3B90DC", color: "black", borderRadius: "5px", height: "20px", width: "20px", p: 0.1 }} />}>
          Download PDF
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Box>
          <TextField id="" label="" placeholder="Search Here" focused sx={{ mb: 3, '& .MuiInput-underline:before': { borderBottom: 'none' }, height: "30px" }}
            InputProps={{
              style: { color: 'white', caretColor: 'white', padding: '0px 15px' },
              startAdornment: (<SearchIcon style={{ color: 'white', marginRight: "13px" }} />)
            }} />
        </Box>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <StyledDatePicker label="START DATE" />
              <Typography color="white" sx={{ fontSize: "14px", mx: 2 }}>TO</Typography>
              <StyledDatePicker label="END DATE" />
            </Box>
          </LocalizationProvider>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ minWidth: 180, mr: 5.5 }}>
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
          <Box sx={{ minWidth: 200 }}>
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
      </Box>
      <Box>
        <TableContainer component={Paper} sx={{ pt: 0.5, px: 2, pb: 1.3, backgroundColor: "#0b253d" }}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white", border: "0" }} align='left'>User Name</TableCell>
                <TableCell sx={{ color: "white", border: "0" }} align='center'>Email ID</TableCell>
                <TableCell sx={{ color: "white", border: "0" }} align='center'>Demat ID</TableCell>
                <TableCell sx={{ color: "white", border: "0" }} align='center'>Date</TableCell>
                <TableCell sx={{ color: "white", border: "0" }} align='center'>Profit / Loss</TableCell>
                <TableCell sx={{ color: "white", border: "0" }} align='center'>Order Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: "#021629" }}>
              <TableRow className='BlueHover' sx={{ cursor: "pointer" }} onClick={() => history.push("/admin/history/user")}>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='left'>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                    <Typography sx={{ fontSize: "14px", color: "white" }} > Sahil S. Diyora </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > SahilDiyora123@gmail.com </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > #0123456789 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > 02 /08/2004 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > +₹24,000 </TableCell>
                <TableCell className='HoverWhite' sx={{ color: "#3B90DC", borderBottom: "4px solid #0b253d", textDecoration: "underline" }} align='center' > Pending </TableCell>
              </TableRow>
              <TableRow className='BlueHover' sx={{ cursor: "pointer" }} onClick={() => history.push("/admin/history/user")}>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='left'>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                    <Typography sx={{ fontSize: "14px", color: "white" }} > Sahil S. Diyora </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > SahilDiyora123@gmail.com </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > #0123456789 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > 02 /08/2004 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > +₹24,000 </TableCell>
                <TableCell className='HoverWhite' sx={{ color: "green", borderBottom: "4px solid #0b253d", textDecoration: "underline" }} align='center' > Execute </TableCell>
              </TableRow>
              <TableRow className='BlueHover' sx={{ cursor: "pointer" }} onClick={() => history.push("/admin/history/user")}>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='left'>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                    <Typography sx={{ fontSize: "14px", color: "white" }} > Sahil S. Diyora </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > SahilDiyora123@gmail.com </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > #0123456789 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > 02 /08/2004 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > +₹24,000 </TableCell>
                <TableCell className='HoverWhite' sx={{ color: "red", borderBottom: "4px solid #0b253d", textDecoration: "underline" }} align='center' > Cancel </TableCell>
              </TableRow>
              <TableRow className='BlueHover' sx={{ cursor: "pointer" }} onClick={() => history.push("/admin/history/user")}>
                <TableCell sx={{ color: "white", borderBottom: "7px solid #0b253d" }} align='left'>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                    <Typography sx={{ fontSize: "14px", color: "white" }} > Sahil S. Diyora </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > SahilDiyora123@gmail.com </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > #0123456789 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > 02 /08/2004 </TableCell>
                <TableCell sx={{ color: "white", borderBottom: "4px solid #0b253d" }} align='center' > +₹24,000 </TableCell>
                <TableCell className='HoverWhite' sx={{ color: "#3B90DC", borderBottom: "4px solid #0b253d", textDecoration: "underline" }} align='center' > Pending </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default HistoryPage;