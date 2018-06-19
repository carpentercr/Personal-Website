import React from 'react';
import { withStyles } from 'material-ui/styles';
import MyContactButton from './MyContactButton';
import MyDrawer from './MyDrawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import TreeTest from './TreeTest';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
  	flex: 1,
  },
  appBar: {
  	zIndex: 1400,
  },
});

function MyAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="absolute" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Verseptive
          </Typography>
           <MyDrawer />
           <MyContactButton />
        </Toolbar>
      </AppBar>
      <TreeTest />
    </div>
  );
}

export default withStyles(styles)(MyAppBar);