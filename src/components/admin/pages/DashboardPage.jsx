import React from 'react'
import { Avatar, Box, Divider, FormControl, InputLabel, MenuItem, Select, Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LogoImage from '../../../assets/LogoImage.jpg';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const DATA_CHART = [
    { month: 'JAN', profit: 200, loss: 100 },
    { month: 'FEB', profit: 500, loss: 300 },
    { month: 'MAR', profit: 200, loss: 100 },
    { month: 'APR', profit: 300, loss: 300 },
    { month: 'MAY', profit: 100, loss: 500 },
    { month: 'JUN', profit: 500, loss: 200 },
    { month: 'JULY', profit: 300, loss: 6 },
    { month: 'AUG', profit: 600, loss: 400 },
    { month: 'SEPT', profit: 100, loss: 50 },
    { month: 'OCT', profit: 200, loss: 200 },
    { month: 'NOV', profit: 500, loss: 300 },
    { month: 'DEC', profit: 100, loss: 0 },
];

function DashboardPage() {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ height: "100%" }}>
            <Box sx={{ mb: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xl={2.4} lg={3} md={4} sm={6} xs={12}>
                        <Box>
                            <Card sx={{ minWidth: 150, minHeight: 136, p: 3.5 }} className='BrownDash'>
                                <CardContent sx={{ p: 0 }}>
                                    <Typography variant='h5' sx={{ textAlign: "center", color: "white" }}>₹3LK</Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: "center" }}>
                                    <Typography variant='h6' sx={{ color: "white" }}>Investment Value </Typography>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xl={2.4} lg={3} md={4} sm={6} xs={12}>
                        <Box>
                            <Card sx={{ minWidth: 150, minHeight: 136, p: 3.5 }} className='NavyBlueDash'>
                                <CardContent sx={{ p: 0 }}>
                                    <Typography variant='h5' sx={{ textAlign: "center", color: "white" }}>₹2.5LK</Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: "center" }}>
                                    <Typography variant='h6' sx={{ color: "white" }}>Market Value </Typography>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xl={2.4} lg={3} md={4} sm={6} xs={12}>
                        <Box>
                            <Card sx={{ minWidth: 150, minHeight: 136, p: 3.5 }} className='PurpleDash'>
                                <CardContent sx={{ p: 0 }}>
                                    <Typography variant='h5' sx={{ textAlign: "center", color: "white" }}>₹-50,000 (-10%)</Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: "center" }}>
                                    <Typography variant='h6' sx={{ color: "white" }}>Market Value </Typography>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xl={2.4} lg={3} md={4} sm={6} xs={12}>
                        <Box>
                            <Card sx={{ minWidth: 150, minHeight: 136, p: 3.5 }} className='GreenDash'>
                                <CardContent sx={{ p: 0 }}>
                                    <Typography variant='h5' sx={{ textAlign: "center", color: "white" }}>₹0.00</Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: "center" }}>
                                    <Typography variant='h6' sx={{ color: "white" }}>Today's P & L </Typography>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xl={2.4} lg={3} md={4} sm={6} xs={12}>
                        <Box>
                            <Card sx={{ minWidth: 150, minHeight: 136, backgroundColor: "transparent", boxShadow: "none", border: "2px dashed #3B90DC" }}>
                                <CardActions sx={{ justifyContent: "center", textAlign: "center", p: 0 }}>
                                    <React.Fragment>
                                        <Typography variant='h6' sx={{ color: "#3B90DC", py: 6.3, px: 8, textWrap: "nowrap", cursor: "pointer" }} onClick={handleClickOpen}>
                                            Eexcute Trade
                                        </Typography>
                                        <Dialog
                                            fullScreen={fullScreen}
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="responsive-dialog-title"
                                        >
                                            <Box sx={{ backgroundColor: "#0b253d", borderRadius: "none", p: 2 }}>
                                                <DialogTitle id="responsive-dialog-title">
                                                    <Typography sx={{ color: "white", fontSize: "20px" }}>Trade Eexcute</Typography>
                                                </DialogTitle>
                                                <DialogContent>
                                                    <Box>
                                                        <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
                                                            <Box sx={{ minWidth: 210 }}>
                                                                <Typography variant="body1" color="white" sx={{ mb: 1.5 }}>Index</Typography>
                                                                <FormControl fullWidth sx={{ backgroundColor: "#021629", borderRadius: "4px" }}>
                                                                    <InputLabel id="demo-simple-select-label1" sx={{ color: "white" }}>Select Index</InputLabel>
                                                                    <Select labelId="demo-simple-select-label1" id="demo-simple-select1" label="Select Index" IconComponent={ExpandMoreIcon}
                                                                        sx={{
                                                                            '& .MuiSvgIcon-root': {
                                                                                color: '#3B90DC',
                                                                                fontSize: "30px"
                                                                            }, '& .MuiSelect-select': {
                                                                                color: 'white',
                                                                            },
                                                                            backgroundColor: "#021629"
                                                                        }}
                                                                    >
                                                                        <MenuItem value="Sensex">Sensex</MenuItem>
                                                                        <MenuItem value="Fin Nifty">Fin Nifty</MenuItem>
                                                                        <MenuItem value="Mid Cap">Mid Cap</MenuItem>
                                                                        <MenuItem value="Nifty 50">Nifty 50</MenuItem>
                                                                        <MenuItem value="Bank nifty">Bank nifty</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Box>
                                                            <Box sx={{ minWidth: 210 }}>
                                                                <Typography variant="body1" color="white" sx={{ mb: 1.5 }}>Strick Price</Typography>
                                                                <TextField id="" label="" sx={{ backgroundColor: "#021629", color: "white", borderRadius: "5px" }} placeholder='Eg. $120.00' InputProps={{
                                                                    style: { color: 'white', caretColor: 'white' }
                                                                }} />
                                                            </Box>
                                                            <Box sx={{ minWidth: 210 }}>
                                                                <Typography variant="body1" color="white" sx={{ mb: 1.5 }}>Buy / Sell</Typography>
                                                                <FormControl fullWidth sx={{ backgroundColor: "#021629", borderRadius: "4px" }}>
                                                                    <InputLabel id="demo-simple-select-label1" sx={{ color: "white" }}>Select Buy</InputLabel>
                                                                    <Select labelId="demo-simple-select-label1" id="demo-simple-select1" label="Select Buy" IconComponent={ExpandMoreIcon}
                                                                        sx={{
                                                                            '& .MuiSvgIcon-root': {
                                                                                color: '#3B90DC',
                                                                                fontSize: "30px"
                                                                            }, '& .MuiSelect-select': {
                                                                                color: 'white',
                                                                            },
                                                                            backgroundColor: "#021629"
                                                                        }}
                                                                    >
                                                                        <MenuItem value="Sensex">Sensex</MenuItem>
                                                                        <MenuItem value="Fin Nifty">Fin Nifty</MenuItem>
                                                                        <MenuItem value="Mid Cap">Mid Cap</MenuItem>
                                                                        <MenuItem value="Nifty 50">Nifty 50</MenuItem>
                                                                        <MenuItem value="Bank nifty">Bank nifty</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
                                                            <Box sx={{ minWidth: 210 }}>
                                                                <Typography variant="body1" color="white" sx={{ mb: 1.5 }}>Intra Day / Long Day</Typography>
                                                                <FormControl fullWidth sx={{ backgroundColor: "#021629", borderRadius: "4px" }}>
                                                                    <InputLabel id="demo-simple-select-label1" sx={{ color: "white" }}>Intra Day</InputLabel>
                                                                    <Select labelId="demo-simple-select-label1" id="demo-simple-select1" label="Intra Day" IconComponent={ExpandMoreIcon}
                                                                        sx={{
                                                                            '& .MuiSvgIcon-root': {
                                                                                color: '#3B90DC',
                                                                                fontSize: "30px"
                                                                            }, '& .MuiSelect-select': {
                                                                                color: 'white',
                                                                            },
                                                                            backgroundColor: "#021629"
                                                                        }}
                                                                    >
                                                                        <MenuItem value="Sensex">Sensex</MenuItem>
                                                                        <MenuItem value="Fin Nifty">Fin Nifty</MenuItem>
                                                                        <MenuItem value="Mid Cap">Mid Cap</MenuItem>
                                                                        <MenuItem value="Nifty 50">Nifty 50</MenuItem>
                                                                        <MenuItem value="Bank nifty">Bank nifty</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Box>
                                                            <Box sx={{ minWidth: 210 }}>
                                                                <Typography variant="body1" color="white" sx={{ mb: 1.5 }}>Expiry Offset</Typography>
                                                                <FormControl fullWidth sx={{ backgroundColor: "#021629", borderRadius: "4px" }}>
                                                                    <InputLabel id="demo-simple-select-label1" sx={{ color: "white" }}>Select Offset</InputLabel>
                                                                    <Select labelId="demo-simple-select-label1" id="demo-simple-select1" label="Select Offset" IconComponent={ExpandMoreIcon}
                                                                        sx={{
                                                                            '& .MuiSvgIcon-root': {
                                                                                color: '#3B90DC',
                                                                                fontSize: "30px"
                                                                            }, '& .MuiSelect-select': {
                                                                                color: 'white',
                                                                            },
                                                                            backgroundColor: "#021629"
                                                                        }}
                                                                    >
                                                                        <MenuItem value="Sensex">Sensex</MenuItem>
                                                                        <MenuItem value="Fin Nifty">Fin Nifty</MenuItem>
                                                                        <MenuItem value="Mid Cap">Mid Cap</MenuItem>
                                                                        <MenuItem value="Nifty 50">Nifty 50</MenuItem>
                                                                        <MenuItem value="Bank nifty">Bank nifty</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </DialogContent>
                                                <DialogActions sx={{ justifyContent: "center", my: 2 }}>
                                                    <Button variant='contained' sx={{ textTransform: "none", width: "28%", height: "45px", minWidth: 210, fontSize: "16.5px" }} > Place Order </Button>
                                                </DialogActions>
                                            </Box>
                                        </Dialog>
                                    </React.Fragment>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mb: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xl={5.5} lg={5.5} md={6} sm={12} xs={12} >
                        <Box sx={{ backgroundColor: "#0b253d", p: 2, borderRadius: "4px" }}>
                            <Box>
                                <Typography sx={{ color: "white", mb: 2, fontWeight: "bold" }}>  Market  </Typography>
                            </Box>
                            <Box>
                                <Divider sx={{ width: "100%", height: "2px", backgroundColor: "#163A5C" }} />
                            </Box>
                            <Box>
                                <TableContainer>
                                    <Table sx={{ width: "100%" }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ border: "0", color: "white", fontSize: "16px" }} align="left">Name</TableCell>
                                                <TableCell sx={{ border: "0", color: "white", fontSize: "16px" }} align="center">Price</TableCell>
                                                <TableCell sx={{ border: "0", color: "white", fontSize: "16px" }} align="right">Chnages</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="left">
                                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                        <Typography sx={{ fontSize: "14px", color: "white" }} > Sensex </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="center">2315.00</TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "lightgreen" }} align="right">+1.85%</TableCell>
                                            </TableRow>
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="left">
                                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                        <Typography sx={{ fontSize: "14px", color: "white" }} > Sensex </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="center">2315.00</TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "red" }} align="right">-1.85%</TableCell>
                                            </TableRow>
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="left">
                                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                        <Typography sx={{ fontSize: "14px", color: "white" }} > Sensex </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="center">2315.00</TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "lightgreen" }} align="right">+1.85%</TableCell>
                                            </TableRow>
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="left">
                                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                        <Typography sx={{ fontSize: "14px", color: "white" }} > Sensex </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="center">2315.00</TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "red" }} align="right">-1.85%</TableCell>
                                            </TableRow>
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="left">
                                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                        <Typography sx={{ fontSize: "14px", color: "white" }} > Sensex </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="center">2315.00</TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "lightgreen" }} align="right">+1.85%</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xl={6.5} lg={6.5} md={6} sm={12} xs={12} >
                        <Box sx={{ backgroundColor: "#0b253d", color: "white", py: 3, pr: 4, borderRadius: "4px" }}>
                            <Box sx={{ pl: 4, mb: 3 }}>
                                <Typography color="white" sx={{ textTransform: "uppercase" }}> Profit And Loss Overview</Typography>
                            </Box>
                            <ResponsiveContainer width="100%" height={315}>
                                <LineChart data={DATA_CHART}>
                                    <CartesianGrid vertical={false} horizontal={true} stroke="#ccc" strokeDasharray="4 4" />
                                    <XAxis dataKey="month" tick={{ fill: 'white', fontSize: "14px" }} />
                                    <YAxis ticks={[100, 200, 300, 400, 500, 600]} tick={{ fill: 'white', fontSize: "14px" }} />
                                    <Tooltip
                                        cursor={{ stroke: 'lightgreen', strokeWidth: 1 }} // Customize cursor line
                                        contentStyle={{ backgroundColor: '#3B90DC', border: 'none', borderRadius: "10px" }} // Customize tooltip content style
                                        labelStyle={{ color: 'white', fontSize: '14px' }} // Customize label (name) style
                                        itemStyle={{ color: 'er', fontSize: '14px' }} // Customize each item's style (value)
                                    />
                                    <Legend
                                        wrapperStyle={{ paddingTop: "20px" }}
                                        iconSize={8}
                                        iconType='circle'
                                    />
                                    <Line type="monotone" dataKey="profit" stroke="#3B90DC" name="Profit" />
                                    <Line type="monotone" dataKey="loss" stroke="red" name="Loss" />
                                </LineChart>
                            </ResponsiveContainer>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={3}>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ backgroundColor: "#0b253d", p: 2, borderRadius: "4px" }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography sx={{ color: "#3B90DC", mb: 2, fontWeight: "bold" }}>  Buy :  </Typography>
                                <Typography sx={{ color: "#3B90DC", mb: 2, fontWeight: "bold" }}>  Total :  406.256 </Typography>
                            </Box>
                            <Box>
                                <Divider sx={{ width: "100%", height: "2px", backgroundColor: "#163A5C" }} />
                            </Box>
                            <Box>
                                <TableContainer>
                                    <Table sx={{ width: "100%" }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ border: "0", color: "white", fontSize: "16px" }} align="left">Name</TableCell>
                                                <TableCell sx={{ border: "0", color: "white", fontSize: "16px" }} align="center">Market Price</TableCell>
                                                <TableCell sx={{ border: "0", color: "white", fontSize: "16px" }} align="right">Buy Price</TableCell>
                                                <TableCell sx={{ border: "0", color: "white", fontSize: "16px" }} align="right">Sell</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow className='BlueHover' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="left">
                                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                        <Typography sx={{ fontSize: "14px", color: "white" }} > Sensex </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="center">2315.00</TableCell>
                                                <TableCell className='HoverWhite' sx={{ border: "0", py: 1, color: "#3B90DC" }} align="right">2300.00</TableCell>
                                                <TableCell className='HoverWhite' sx={{ border: "0", py: 1, color: "red", textDecoration: "underline" }} align="right">Sell</TableCell>
                                            </TableRow>
                                            <TableRow className='BlueHover' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="left">
                                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                        <Typography sx={{ fontSize: "14px", color: "white" }} > Sensex </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="center">2315.00</TableCell>
                                                <TableCell className='HoverWhite' sx={{ border: "0", py: 1, color: "#3B90DC" }} align="right">2300.00</TableCell>
                                                <TableCell className='HoverWhite' sx={{ border: "0", py: 1, color: "red", textDecoration: "underline" }} align="right">Sell</TableCell>
                                            </TableRow>
                                            <TableRow className='BlueHover' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="left">
                                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                        <Typography sx={{ fontSize: "14px", color: "white" }} > Sensex </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="center">2315.00</TableCell>
                                                <TableCell className='HoverWhite' sx={{ border: "0", py: 1, color: "#3B90DC" }} align="right">2300.00</TableCell>
                                                <TableCell className='HoverWhite' sx={{ border: "0", py: 1, color: "red", textDecoration: "underline" }} align="right">Sell</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ backgroundColor: "#0b253d", p: 2, borderRadius: "4px" }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography sx={{ color: "red", mb: 2, fontWeight: "bold" }}>  Sell :  </Typography>
                                <Typography sx={{ color: "red", mb: 2, fontWeight: "bold" }}>  Total :  409.256 </Typography>
                            </Box>
                            <Box>
                                <Divider sx={{ width: "100%", height: "2px", backgroundColor: "#163A5C" }} />
                            </Box>
                            <Box>
                                <TableContainer>
                                    <Table sx={{ width: "100%" }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ border: "0", color: "white", fontSize: "16px" }} align="left">Name</TableCell>
                                                <TableCell sx={{ border: "0", color: "white", fontSize: "16px" }} align="center">Buy Price</TableCell>
                                                <TableCell sx={{ border: "0", color: "white", fontSize: "16px" }} align="right">Sell Price</TableCell>
                                                <TableCell sx={{ border: "0", color: "white", fontSize: "16px" }} align="right">Type</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow className='RedHover' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="left">
                                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                        <Typography sx={{ fontSize: "14px", color: "white" }} > Sensex </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="center">2315.00</TableCell>
                                                <TableCell className='HoverWhite' sx={{ border: "0", py: 1, color: "red" }} align="right">2300.00</TableCell>
                                                <TableCell className='HoverWhite' sx={{ border: "0", py: 1, color: "lightgreen" }} align="right">Market</TableCell>
                                            </TableRow>
                                            <TableRow className='RedHover' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="left">
                                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                        <Typography sx={{ fontSize: "14px", color: "white" }} > Sensex </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="center">2315.00</TableCell>
                                                <TableCell className='HoverWhite' sx={{ border: "0", py: 1, color: "red" }} align="right">2300.00</TableCell>
                                                <TableCell className='HoverWhite' sx={{ border: "0", py: 1, color: "lightgreen" }} align="right">Market</TableCell>
                                            </TableRow>
                                            <TableRow className='RedHover' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="left">
                                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                        <Typography sx={{ fontSize: "14px", color: "white" }} > Sensex </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell sx={{ border: "0", py: 1, color: "white" }} align="center">2315.00</TableCell>
                                                <TableCell className='HoverWhite' sx={{ border: "0", py: 1, color: "red" }} align="right">2300.00</TableCell>
                                                <TableCell className='HoverWhite' sx={{ border: "0", py: 1, color: "lightgreen" }} align="right">Market</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default DashboardPage;
