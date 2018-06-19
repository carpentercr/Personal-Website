import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import MyTabs from './MyTabs';
import IconButton from 'material-ui/IconButton';
import List from 'material-ui-icons/List';
import Tooltip from 'material-ui/Tooltip';

const styles = {
  drawerPaper: {
  	width: 650,
  },
};

class MyDrawer extends React.Component {

	state = {
		left: false,
	};

	toggleDrawer = (side, open) => () => {
		this.setState({ [side]: open  });
	};

	render() {
		const {classes} = this.props;

		return (
				<div>
					<Tooltip id='tooltip-icon' title='about' disableTriggerFocus={true}>
					<IconButton onClick={this.toggleDrawer('left', !this.state.left)} color='secondary' aria-label='drawer1'>
						<List />
					</IconButton>
					</Tooltip>
					<Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)} classes={{paper: classes.drawerPaper}}>
					<div tabIndex={0}>
						<MyTabs />
					</div>
					</Drawer>
					</div>
								)
	}
};

export default withStyles(styles)(MyDrawer);