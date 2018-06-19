import React from 'react';
import { findDOMNode } from 'react-dom';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Popover from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';
import AccountBox from 'material-ui-icons/AccountBox';
import Tooltip from 'material-ui/Tooltip';

const styles = {

	contactButton: {
		zIndex: 1500,
	},
  
};

class MyContactButton extends React.Component {

	state = {
		open: false,
		anchorEl: null,
		anchorOriginVertical: 'bottom',
    	anchorOriginHorizontal: 'right',
    	transformOriginVertical: 'top',
    	transformOriginHorizontal: 'center',
    	positionTop: 200,  
    	positionLeft: 400, 
    	anchorReference: 'anchorEl',
	};

	handleOpen = () => {
		this.setState({ open: true, anchorEl: findDOMNode(this.IconButton), });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	iconbutton = null;

	render() {
		const {classes} = this.props;

		const {
			open,
      		anchorEl,
      		anchorOriginVertical,
      		anchorOriginHorizontal,
      		transformOriginVertical,
      		transformOriginHorizontal,
      		positionTop,
      		positionLeft,
      		anchorReference,
		} = this.state;

		return (
			<div>
			<Tooltip id='tooltip-icon' title='contact' disableTriggerFocus={true}>
			<IconButton ref={node => { this.iconbutton = node; }} color='secondary' aria-label='contact' onClick={this.handleOpen}>
				<AccountBox />
			</IconButton>
			</Tooltip>
			<Popover
				open={open}
          		anchorEl={anchorEl}
          		anchorReference={anchorReference}
          		anchorPosition={{ top: positionTop, left: positionLeft }}
          		onClose={this.handleClose}
          		anchorOrigin={{
            		vertical: anchorOriginVertical,
            		horizontal: anchorOriginHorizontal,
          		}}
          		transformOrigin={{
            		vertical: transformOriginVertical,
            		horizontal: transformOriginHorizontal,
          		}}
          		className={classes.contactButton}
        		>
        		<Button href='https://github.com/carpentercr' color='secondary'>Github</Button>
        		<Button href='https://www.linkedin.com/in/verseptive' color='secondary'>LinkedIn</Button>
        		<Button href='https://twitter.com/verseptive' color='secondary'>Twitter</Button>
        		<Button href='mailto:carpentercr92@gmail.com' color='secondary'>Email</Button>
        	</Popover>
        	</div>
			)
	}
};

export default withStyles(styles)(MyContactButton);