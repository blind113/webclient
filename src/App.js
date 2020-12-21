import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Navbar from './components/Navbar';
import MenuLateral from './components/Drawer';
import { withStyles } from '@material-ui/core/styles';



const useStyles = theme  => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

class App extends Component {
  
  constructor(props){
    super(props);
    this.state= {
      open: false
    }
  }
  handleClick(){
   this.setState({
      open: !this.state.open
   })
   console.log(this.state);
  }
  render(){
    const { classes } = this.props;
    
    return(
      <Router>
          
      <div className = {classes.root}>
        <Navbar status = { this.state.open } onClick = { ()=>this.handleClick() }/>
        <MenuLateral status ={this.state.open } onClick = {()=> this.handleClick() } />  
        <main className={ classes.content }>
          <div  className={ classes.toolbar }/>
          <Routes />
            
         
        </main>

        
      </div>
      </Router>
    );
  }

  
}
export default withStyles(useStyles)(App)