import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import AddressIcon from '@material-ui/icons/Place';
import OrderIcon from '@material-ui/icons/List';
import DiscountIcon from '@material-ui/icons/Money';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import { setAppComponent } from './App';
import PageMain from './PageMain';
import PageMore from './PageMore';
import PageProfile from './PageProfile';
import PageAddress from './PageAddress';
import PageMyOrders from './PageMyOrders';
import PageMemberDiscount from './PageMemberDiscount';
import PagePress from './PagePress';
import PageAccessories from './PageAccessories';
import PageMen from './PageMen';
import PageWomen from './PageWomen';
import PageWatchlist from './PageWatchlist';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		//position: "fixed",
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		//...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		//padding: theme.spacing(3),
		padding: 0,
		paddingTop: theme.spacing(9),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
		backgroundColor: "white",
		color: "black"
	},
	andeandrea: {
		fontFamily: "Georgia, Times, Times New Roman, serif"
	},
	icon: {
		padding: 5
	}
}));

export default function PersistentDrawerLeft(props) {
	const classes = useStyles(props);
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline/>
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar className={classes.toolbar}>
				
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon/>
					</IconButton>
					<IconButton onClick={setAppComponent.bind(null, <PageMain/>)}>
						<Typography variant="h6" noWrap className={classes.andeandrea}>
							Ande Andrea
						</Typography>
					</IconButton>
					<div className={clsx(open && classes.hide)}>
						<IconButton className={classes.icon} onClick={setAppComponent.bind(null, <PageWatchlist/>)}>
							<BookmarkIcon/>
						</IconButton>
						<IconButton className={classes.icon} onClick={setAppComponent.bind(null, <PageMyOrders/>)}>
							<ShoppingCartIcon/>
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
					</IconButton>
				</div>
				<Divider/>
				<List>
					<ListItem button onClick={setAppComponent.bind(null, <PageMain/>)}>
						<ListItemIcon><HomeIcon/></ListItemIcon>
						<ListItemText primary="Home"/>
					</ListItem>
					<ListItem button onClick={setAppComponent.bind(null, <PageWomen/>)}>
						<ListItemIcon><HomeIcon/></ListItemIcon>
						<ListItemText primary="Women"/>
					</ListItem>
					<ListItem button onClick={setAppComponent.bind(null, <PageMen/>)}>
						<ListItemIcon><HomeIcon/></ListItemIcon>
						<ListItemText primary="Men"/>
					</ListItem>
					<ListItem button onClick={setAppComponent.bind(null, <PageAccessories/>)}>
						<ListItemIcon><HomeIcon/></ListItemIcon>
						<ListItemText primary="Accessories"/>
					</ListItem>
					<ListItem button onClick={setAppComponent.bind(null, <PagePress/>)}>
						<ListItemIcon><HomeIcon/></ListItemIcon>
						<ListItemText primary="Press"/>
					</ListItem>
					<ListItem button onClick={setAppComponent.bind(null, <PageMemberDiscount/>)}>
						<ListItemIcon><DiscountIcon/></ListItemIcon>
						<ListItemText primary="Member Discount"/>
					</ListItem>
					<ListItem button onClick={setAppComponent.bind(null, <PageMyOrders/>)}>
						<ListItemIcon><OrderIcon/></ListItemIcon>
						<ListItemText primary="My Orders"/>
					</ListItem>
					<ListItem button onClick={setAppComponent.bind(null, <PageAddress/>)}>
						<ListItemIcon><AddressIcon/></ListItemIcon>
						<ListItemText primary="Address"/>
					</ListItem>
					<ListItem button onClick={setAppComponent.bind(null, <PageProfile/>)}>
						<ListItemIcon><AddressIcon/></ListItemIcon>
						<ListItemText primary="Profile"/>
					</ListItem>
					<ListItem button onClick={setAppComponent.bind(null, <PageMore/>)}>
						<ListItemIcon><AddressIcon/></ListItemIcon>
						<ListItemText primary="More"/>
					</ListItem>
				</List>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				<div className={classes.drawerHeader}/>

				{props.children}
				{/*
				<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
					facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
					gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
					donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
					Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
					imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
					arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
					donec massa sapien faucibus et molestie ac.
				</Typography>
				<Typography paragraph>
					Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
					facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
					tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
					consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
					vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
					hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
					tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
					nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
					accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
				</Typography>
				*/}
			</main>
		</div>
	);
}