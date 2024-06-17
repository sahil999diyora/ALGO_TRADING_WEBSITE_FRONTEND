import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import { Button, Card, CardActions, CardContent, TextField } from '@mui/material';

function AdminLoginPage() {
    return (
        <Box className="AdminLoginTradeColor">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container sx={{ alignItems: "center" }}>
                    <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                        <Box className="AdminLoginTrade">
                        </Box>
                    </Grid>
                    <Grid item xl={6} lg={6} md={12} sm={12} xs={12} sx={{ px: 12.5 }} margin={{ xl: '0px 0px', lg: '0px 0px', md: '35px 0px', sm: '35px 0px', xs: '35px 0px' }}>
                        <Box>
                            <Typography variant="h6" color="white" sx={{ textAlign: "center", mb: 3.5, fontSize: "23px" }}> Logo Here </Typography>
                        </Box>
                        <Box>
                            <Card sx={{ backgroundColor: "#021629", px: 7, py: 6 }}>
                                <CardContent sx={{ p: 0 }}>
                                    <Typography variant='h5' sx={{ textAlign: "left", color: "#419DF1", mb: 0.7 }}>Welcome Back !</Typography>
                                    <Typography sx={{ textAlign: "left", color: "white", mb: 2 }}>Please Enter Details For Sign IN</Typography>
                                </CardContent>
                                <CardActions sx={{ p: 0 }}>
                                    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                        <Typography sx={{ color: "white", mt: 2 }}> E - MAIL </Typography>
                                        <TextField fullWidth placeholder='ENTER E - MAIL HERE' sx={{ backgroundColor: "#163A5C", borderRadius: "10px", mt: 2 }} InputProps={{
                                            style: { color: 'white', caretColor: 'white' },
                                        }} />

                                        <Typography sx={{ color: "white", mt: 2 }}> PASSWORD </Typography>
                                        <TextField fullWidth placeholder='ENTER PASSWORD HERE' sx={{ backgroundColor: "#163A5C", borderRadius: "10px", mt: 2 }} InputProps={{
                                            style: { color: 'white', caretColor: 'white' },
                                        }} />
                                        <Box sx={{ textAlign: "center", mt: 6 }}>
                                            <Button variant="contained" sx={{ width: "150px" }}> Login </Button>
                                        </Box>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default AdminLoginPage;