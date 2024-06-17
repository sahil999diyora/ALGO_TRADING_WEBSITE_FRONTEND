import React from 'react';
import { Box, Typography, TextField, Divider, Avatar, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import LogoImage from '../../../assets/LogoImage.jpg';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BlockIcon from '@mui/icons-material/Block';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function UsersPage() {

    const [expanded, setExpanded] = React.useState(false);

    const history = useHistory();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box height={{ xl: "100vh", lg: "100%" }}>
            <Box sx={{ mb: 3 }}>
                <Typography color="white" variant='h6' > User Details </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
                <TextField id="" label="" placeholder="Search Here" focused sx={{ '& .MuiInput-underline:before': { borderBottom: 'none' } }}
                    InputProps={{
                        style: { color: 'white', caretColor: 'white', padding: '0px 15px' },
                        startAdornment: (<SearchIcon style={{ color: 'white', marginRight: "13px" }} />)
                    }} />
            </Box>
            <Box>
                <Grid container spacing={3}>
                    <Grid item xl={8} lg={8} md={12} sm={12} xs={12} >
                        <Box sx={{ p: 2, backgroundColor: "#0b253d" }}>
                            <Box>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ color: "white", padding: "0px 0px 13px 0px", width: "25%", border: "0px", fontSize: "13px" }} align="center">USER NAME</TableCell>
                                            <TableCell sx={{ color: "white", padding: "0px 0px 13px 0px", width: "25%", border: "0px", fontSize: "13px" }} align="center">E - MAIL ID</TableCell>
                                            <TableCell sx={{ color: "white", padding: "0px 0px 13px 0px", width: "25%", border: "0px", fontSize: "13px" }} align="center">DEMAT ID</TableCell>
                                            <TableCell sx={{ color: "white", padding: "0px 0px 13px 0px", width: "25%", border: "0px", fontSize: "13px" }} align="center">ACTIONS</TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header" sx={{ backgroundColor: "#021629", maxHeight: "64px" }} className='BlueHover'>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0 }}>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                <Typography sx={{ fontSize: "14px", color: "white" }} > Sahil S. Diyora </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > SahilDiyora123@gmail.com </Typography>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > #012345678 </Typography>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <BorderColorIcon sx={{ color: "#3B90DC", mr: 2.5, fontSize: "20px" }} className='HoverWhite' />
                                            <Button variant="text" sx={{ p: 0, color: "red" }} endIcon={<BlockIcon sx={{ color: "Red" }} />}>
                                                Block
                                            </Button>
                                        </Box>
                                    </AccordionSummary>
                                    <Divider sx={{ width: "100%", backgroundColor: "#0b253d", height: "3px" }} />
                                    <AccordionDetails sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "#021629", p: 2.1 }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > First Name : Jhon </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Last Name : D'Souza </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Plan : A </Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} >Email ID : Jhon12@gmail.com </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Demat ID : #012345678 </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Profit : +200.000 </Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} >Mobile No : +919429430900 </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Status : Active </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Location : INDIA </Typography>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ mt: 0.7 }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header" sx={{ backgroundColor: "#021629", maxHeight: "64px" }} className='BlueHover'>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0 }}>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                <Typography sx={{ fontSize: "14px", color: "white" }} > Sahil S. Diyora </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > SahilDiyora123@gmail.com </Typography>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > #012345678 </Typography>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <BorderColorIcon sx={{ color: "#3B90DC", mr: 2.5, fontSize: "20px" }} className='HoverWhite' />
                                            <Button variant="text" sx={{ p: 0, color: "red" }} endIcon={<BlockIcon sx={{ color: "Red" }} />}>
                                                Block
                                            </Button>
                                        </Box>
                                    </AccordionSummary>
                                    <Divider sx={{ width: "100%", backgroundColor: "#0b253d", height: "3px" }} />
                                    <AccordionDetails sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "#021629", p: 2.1 }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > First Name : Jhon </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Last Name : D'Souza </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Plan : A </Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} >Email ID : Jhon12@gmail.com </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Demat ID : #012345678 </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Profit : +200.000 </Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} >Mobile No : +919429430900 </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Status : Active </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Location : INDIA </Typography>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ mt: 0.7 }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header" sx={{ backgroundColor: "#021629", maxHeight: "64px" }} className='BlueHover'>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0 }}>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                <Typography sx={{ fontSize: "14px", color: "white" }} > Sahil S. Diyora </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > SahilDiyora123@gmail.com </Typography>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > #012345678 </Typography>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <BorderColorIcon sx={{ color: "#3B90DC", mr: 2.5, fontSize: "20px" }} className='HoverWhite' />
                                            <Button variant="text" sx={{ p: 0, color: "red" }} endIcon={<BlockIcon sx={{ color: "Red" }} />}>
                                                Block
                                            </Button>
                                        </Box>
                                    </AccordionSummary>
                                    <Divider sx={{ width: "100%", backgroundColor: "#0b253d", height: "3px" }} />
                                    <AccordionDetails sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "#021629", p: 2.1 }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > First Name : Jhon </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Last Name : D'Souza </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Plan : A </Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} >Email ID : Jhon12@gmail.com </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Demat ID : #012345678 </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Profit : +200.000 </Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} >Mobile No : +919429430900 </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Status : Active </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Location : INDIA </Typography>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ mt: 0.7 }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header" sx={{ backgroundColor: "#021629", maxHeight: "64px" }} className='BlueHover'>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0 }}>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                <Typography sx={{ fontSize: "14px", color: "white" }} > Sahil S. Diyora </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > SahilDiyora123@gmail.com </Typography>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > #012345678 </Typography>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <BorderColorIcon sx={{ color: "#3B90DC", mr: 2.5, fontSize: "20px" }} className='HoverWhite' />
                                            <Button variant="text" sx={{ p: 0, color: "red" }} endIcon={<BlockIcon sx={{ color: "Red" }} />}>
                                                Block
                                            </Button>
                                        </Box>
                                    </AccordionSummary>
                                    <Divider sx={{ width: "100%", backgroundColor: "#0b253d", height: "3px" }} />
                                    <AccordionDetails sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "#021629", p: 2.1 }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > First Name : Jhon </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Last Name : D'Souza </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Plan : A </Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} >Email ID : Jhon12@gmail.com </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Demat ID : #012345678 </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Profit : +200.000 </Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} >Mobile No : +919429430900 </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Status : Active </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Location : INDIA </Typography>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ mt: 0.7 }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                    <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header" sx={{ backgroundColor: "#021629", maxHeight: "64px" }} className='BlueHover'>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0 }}>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                <Typography sx={{ fontSize: "14px", color: "white" }} > Sahil S. Diyora </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > SahilDiyora123@gmail.com </Typography>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > #012345678 </Typography>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <BorderColorIcon sx={{ color: "#3B90DC", mr: 2.5, fontSize: "20px" }} className='HoverWhite' />
                                            <Button variant="text" sx={{ p: 0, color: "red" }} endIcon={<BlockIcon sx={{ color: "Red" }} />}>
                                                Block
                                            </Button>
                                        </Box>
                                    </AccordionSummary>
                                    <Divider sx={{ width: "100%", backgroundColor: "#0b253d", height: "3px" }} />
                                    <AccordionDetails sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "#021629", p: 2.1 }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > First Name : Jhon </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Last Name : D'Souza </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Plan : A </Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} >Email ID : Jhon12@gmail.com </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Demat ID : #012345678 </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Profit : +200.000 </Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} >Mobile No : +919429430900 </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Status : Active </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Location : INDIA </Typography>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ mt: 0.7 }} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                    <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header" sx={{ backgroundColor: "#021629", maxHeight: "64px" }} className='BlueHover'>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0 }}>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                                <Typography sx={{ fontSize: "14px", color: "white" }} > Sahil S. Diyora </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > SahilDiyora123@gmail.com </Typography>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > #012345678 </Typography>
                                        </Box>
                                        <Box sx={{ width: '25%', textAlign: "center", flexShrink: 0, display: "flex", justifyContent: 'center', alignItems: "center" }}>
                                            <BorderColorIcon sx={{ color: "#3B90DC", mr: 2.5, fontSize: "20px" }} className='HoverWhite' />
                                            <Button variant="text" sx={{ p: 0, color: "red" }} endIcon={<BlockIcon sx={{ color: "Red" }} />}>
                                                Block
                                            </Button>
                                        </Box>
                                    </AccordionSummary>
                                    <Divider sx={{ width: "100%", backgroundColor: "#0b253d", height: "3px" }} />
                                    <AccordionDetails sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "#021629", p: 2.1 }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > First Name : Jhon </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Last Name : D'Souza </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Plan : A </Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} >Email ID : Jhon12@gmail.com </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Demat ID : #012345678 </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Profit : +200.000 </Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} >Mobile No : +919429430900 </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Status : Active </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "white" }} > Location : INDIA </Typography>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xl={4} lg={4} md={12} sm={12} xs={12} >
                        <Box sx={{ p: 2, backgroundColor: "#0b253d" }}>
                            <Box>
                                <Typography sx={{ color: "white", pt: 0, mb: 1.8 }}>Unlinked User's List</Typography>
                            </Box>
                            <Item sx={{ py: 1.6, backgroundColor: "#021629", borderRadius: "0px", mb: 0.7 }} className='BlueHover' onClick={() => history.push("/admin/users/unlinkeduser")}>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                        <Typography sx={{ fontSize: "14px", color: "white" }} > Sahil S. Diyora </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: "14px", color: "white" }} > #012345678 </Typography>
                                    </Box>
                                </Box>
                            </Item>
                            <Item sx={{ py: 1.6, backgroundColor: "#021629", borderRadius: "0px" }} className='BlueHover' onClick={() => history.push("/admin/users/unlinkeduser")}>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <Avatar alt="Travis Howard" src={LogoImage} sx={{ mr: 2 }} />
                                        <Typography sx={{ fontSize: "14px", color: "white" }} > Sahil S. Diyora </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: "14px", color: "white" }} > #012345678 </Typography>
                                    </Box>
                                </Box>
                            </Item>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default UsersPage;