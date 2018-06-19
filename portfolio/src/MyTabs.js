import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Aniplan from './Aniplan.png';
import Pathfinder from './Pathfinder.png';
import SITF from './SITF.png';
import interests from './interests.png';
import me from './me.png';

function BioContainer() {
  return (
    <div>
    <img src={me} alt='me'/>
    <Typography component="div" style={{ padding: 8 * 3 }}>
    Hi, my name is Christopher Carpenter. I'm a software developer and a technology nerd. I've pursued a diverse set of projects and education, but I'm partial to SPA's and similar designs. I live for new challenges on my never ending quest for knowledge. Born and raised in Fredericksburg, VA, I earned my Bachelor's in Computer Science from Virginia Commonwealth University.
    </Typography>
    </div>
  );
};

function SkillsContainter() {
    return (
    <div>
    <Typography component="div">
      *I don't proclaim an absolute mastery of anything listed here. This is simply an exhaustive list of the relevant technology that I have studied and worked with to this date, some I have more experience in than others. 
    </Typography>
    <h1>Languages</h1>
    <ul>
    <li>Java</li>
    <li>Javascript</li>
    <li>Python</li>
    <li>Scheme</li>
    <li>C#</li>
    <li>C++</li>
    <li>Swift</li>
    <li>SQL</li>
    <li>PHP</li>
    </ul>
    <h1>Frameworks and other Technologies</h1>
    <ul>
    <li>React</li>
    <li>The Elastic Stack</li>
    <li>Xamarin</li>
    <li>Android Studio</li>
    <li>Xcode</li> 
    <li>Unreal Engine 4</li>
    <li>MariaDB</li>
    <li>SQLite</li> 
    </ul>
    </div>
  );
};

function InterestContainer() {
  return (
    <div>
    <img src={interests} alt='interests'/>
    <Typography component="div" style={{ padding: 8 * 3 }}>
    I have a keen interest in elements of design, and when I have the time, I like to study what makes good designers tick. Recently, I've been interested in architecture and interior design after being turned onto the works of Christopher Alexander. I think there's a lot that can be learned from these fields for software design, especially when it comes to things like UX. I also do game development as a hobby, and consistently try to improve my craft by studying the works of Eric Lengyel, Jesse Schell, Robert Nystrom, Jason Gregory, and other industry professionals.
    </Typography>
    </div>
    )
}

function ProjectsContainer() {

  return (
    <div>
    <img src={Aniplan} alt='Aniplan'/>
    <Typography component="div" style={{ padding: 8 * 3 }}>
      (Currently under development) A mobile application to help manage activities related to pet care, built using Xamarin.Forms, Prism, and Bluetooth LE to share information with other app users.
    </Typography>
    <img src={Pathfinder} alt='Pathfinder'/>
    <Typography component="div" style={{ padding: 8 * 3 }}>
      2017 VCU Capstone Design project. An SPA to help students plan and manage their collegiate career, supplements to an advisor. I was involved with the core design, initial prototyping, algorithm construction, and back-end database management and server side code. Built with regular JS/Jquery libraries and a LAMP stack.
    </Typography>
    <img src={SITF} alt='SITF'/>
    <Typography component="div" style={{ padding: 8 * 3 }}>
      A plugin for the Jetbrains IntelliJ IDE. SITF integrates Stack Overflow into the ide like a web browser and can make queries directly from the code in your project. I came on to implement an analytics infrastructure. I used Log4j to collect selected statistics from the app and used an ELK stack on the backend to collect data, parse, and produce data visualizations. 
    </Typography>
    <h1 style={{ padding: 8 * 3}}>*This Website</h1>
    <Typography component="div" style={{ padding: 8 * 3 }}>
      Built using React, Material-UI, Three.js(React Three Renderer), and the Lindenmayer library.
    </Typography>
    </div>
    )
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 8,
    backgroundColor: theme.palette.background.paper,
  },
});

class MyTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Tabs value={value} onChange={this.handleChange} indicatorColor="primary">
            <Tab label="Bio" />
            <Tab label="Interests" />
            <Tab label="Experience"/>
            <Tab label="Projects"/>
          </Tabs>
        </AppBar>
        {value === 0 && <BioContainer/>}
        {value === 1 && <InterestContainer/>}
        {value === 2 && <SkillsContainter/>}
        {value === 3 && <ProjectsContainer/>}
      </div>
    );
  }
}

export default withStyles(styles)(MyTabs);