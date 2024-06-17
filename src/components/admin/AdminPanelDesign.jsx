import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PercentIcon from '@mui/icons-material/Percent';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import HistoryPage from './pages/HistoryPage';
import TicketsPage from './pages/TicketsPage';
import AdminSettings from './pages/AdminSettings';
import UserUnlinked from './pages/UserUnlinked';
import UserHistory from './pages/UserHistory';
import AdminLoginPage from './pages/AdminLoginPage';
import LogoImage from '../../assets/LogoImage.jpg';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

function AdminPanelDesign() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Router>
            <Switch>
                <Route exact path="/admin/login">
                    <AdminLoginPage />
                </Route>

                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar position="fixed" open={open} className='BgMain' sx={{ boxShadow: "none" }}>
                        <Toolbar>
                            {/*<IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ marginRight: 5,...(open && { display: 'none' }), }}>
                        <MenuIcon />
                    </IconButton>*/}
                            <Box>
                                <Typography variant="h6" noWrap component="div">
                                    LOGO HERE
                                </Typography>
                            </Box>
                            <Box sx={{ ml: "auto", display: 'flex', alignItems: "center" }}>
                                <Box sx={{ mr: 1 }}>
                                    <IconButton
                                        size="large"
                                        aria-label="show 17 new notifications"
                                        color="inherit">
                                        <Badge badgeContent={1} variant='dot' color="error">
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar sx={{ border: "2px solid #3B90DC" }} alt="ERROR 404" src={LogoImage} />
                                    </Stack>
                                    <Box sx={{ ml: 1 }}>
                                        <Typography> Sahil Diyora </Typography>
                                        <Typography sx={{ fontSize: "13px", color: "#3B90DC" }}>SahilDiyora123@gmail.com </Typography>
                                    </Box>
                                    <Box sx={{ ml: 1 }}>
                                        <KeyboardArrowDownRoundedIcon sx={{ fontSize: "28px", color: "#3B90DC" }} />
                                    </Box>
                                </Box>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" open={open}>
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Box className='BgMain' sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <List>
                                <Link to="/">
                                    <ListItem disablePadding sx={{ display: 'block', mt: 1 }}>
                                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                                                <SpaceDashboardIcon sx={{ color: "#3B90DC", fontSize: "32px", p: 0.5, borderRadius: "5px", }} />
                                            </ListItemIcon>
                                            <ListItemText primary={"DASHBOARD"} sx={{ opacity: open ? 1 : 0 }} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                                <Link to="/admin/users">
                                    <ListItem disablePadding sx={{ display: 'block', mt: 1 }}>
                                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                                                <PeopleAltIcon sx={{ color: "#3B90DC", fontSize: "32px", p: 0.5, borderRadius: "5px" }} />
                                            </ListItemIcon>
                                            <ListItemText primary={"USERS"} sx={{ opacity: open ? 1 : 0 }} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                                <Link to="/admin/history">
                                    <ListItem disablePadding sx={{ display: 'block', mt: 1 }}>
                                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                                                <SignalCellularAltIcon sx={{ color: "#3B90DC", fontSize: "32px", p: 0.5, borderRadius: "5px" }} />
                                            </ListItemIcon>
                                            <ListItemText primary={"HISTORY"} sx={{ opacity: open ? 1 : 0 }} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                                <Link to="/admin/tickets">
                                    <ListItem disablePadding sx={{ display: 'block', mt: 1 }}>
                                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                                                <PercentIcon sx={{ color: "#3B90DC", fontSize: "32px", p: 0.5, borderRadius: "5px" }} />
                                            </ListItemIcon>
                                            <ListItemText primary={"TICKETS"} sx={{ opacity: open ? 1 : 0 }} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            </List>
                            <List>
                                <Link to="/admin/settings">
                                    <ListItem disablePadding sx={{ display: 'block', mt: 1 }}>
                                        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                                            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                                                <SettingsIcon sx={{ color: "#3B90DC", fontSize: "32px", p: 0.5, borderRadius: "5px" }} />
                                            </ListItemIcon>
                                            <ListItemText primary={"SETTINGS"} sx={{ opacity: open ? 1 : 0 }} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                                <ListItem disablePadding sx={{ display: 'block', mt: 1 }}>
                                    <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                                        <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                                            <LogoutOutlinedIcon sx={{ color: "#FFF" }} />
                                        </ListItemIcon>
                                        <ListItemText primary={"LOG OUT"} sx={{ opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        </Box>
                    </Drawer>
                    <Box sx={{ p: 3, backgroundColor: "#021629", width: "100%", height: "100%" }}>
                        <DrawerHeader />

                        <Route exact path="/">
                            <DashboardPage />
                        </Route>
                        <Route exact path="/admin/users">
                            <UsersPage />
                        </Route>
                        <Route exact path="/admin/users/unlinkeduser">
                            <UserUnlinked />
                        </Route>
                        <Route exact path="/admin/history">
                            <HistoryPage />
                        </Route>
                        <Route exact path="/admin/history/user">
                            <UserHistory />
                        </Route>
                        <Route exact path="/admin/tickets">
                            <TicketsPage />
                        </Route>
                        <Route exact path="/admin/settings">
                            <AdminSettings />
                        </Route>
                    </Box>
                </Box>

            </Switch>
        </Router>
    )
}

export default AdminPanelDesign;
