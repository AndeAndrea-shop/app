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
import { setAppPage } from "../app";
import { setAppComponent } from './App';
import PageMain from './PageMain';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
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
		padding: theme.spacing(3),
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
}));

Object.assign(window, {
	useStyles
})

interface SidebarProps {
	nothingYet: boolean;
}

interface SidebarState {
	open: boolean;
}

export default class PersistentDrawerLeft extends React.Component<SidebarProps, SidebarState> {
	//const [open, setOpen] = React.useState(false);
	classes: any;
	theme: any;
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
		//this.classes = useStyles(props);
		//this.theme = useTheme();
	}

	handleDrawerOpen() {
		//setOpen(true);
		this.setState({
			open: true
		});
	}

	handleDrawerClose() {
		//setOpen(false);
		this.setState({
			open: false
		});
	}

	render() {
		//var classes = this.classes;
		//var theme = this.theme;
		var classes = {};
		var theme = {};
		var open = this.state.open;
		return (
			<div className={classes.root}>
				<CssBaseline/>
				<AppBar
					position="fixed"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={this.handleDrawerOpen}
							edge="start"
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon/>
						</IconButton>
						<Typography variant="h6" noWrap>
							Ande Andrea
						</Typography>
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
						<IconButton onClick={this.handleDrawerClose}>
							{theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
						</IconButton>
					</div>
					<Divider/>
					<List>

						<ListItem button onClick={setAppComponent.bind(this, <PageMain/>)}>
							<ListItemIcon><HomeIcon/></ListItemIcon>
							<ListItemText primary="Home"/>
						</ListItem>
						<ListItem button>
							<ListItemIcon><HomeIcon/></ListItemIcon>
							<ListItemText primary="Women"/>
						</ListItem>
						<ListItem button>
							<ListItemIcon><HomeIcon/></ListItemIcon>
							<ListItemText primary="Men"/>
						</ListItem>
						<ListItem button>
							<ListItemIcon><HomeIcon/></ListItemIcon>
							<ListItemText primary="Accessories"/>
						</ListItem>
						<ListItem button>
							<ListItemIcon><HomeIcon/></ListItemIcon>
							<ListItemText primary="Press"/>
						</ListItem>
						<ListItem button>
							<ListItemIcon><DiscountIcon/></ListItemIcon>
							<ListItemText primary="Member Discount"/>
						</ListItem>
						<ListItem button>
							<ListItemIcon><OrderIcon/></ListItemIcon>
							<ListItemText primary="My Orders"/>
						</ListItem>
						<ListItem button>
							<ListItemIcon><AddressIcon/></ListItemIcon>
							<ListItemText primary="Address"/>
						</ListItem>
					</List>
					{/*<Divider/>*/}
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open,
					})}
				>
					<div className={classes.drawerHeader}/>
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
					{this.props.children}
				</main>
			</div>
		);
	}
}
