import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import {Dialog, CardActions, CardContent, Typography,TextField, Button, Icon, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/styles'
import {create} from './api-user.js'
import {Link} from 'react-router-dom'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'; // v1.x


const theme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'raised', color: 'primary' },
            style: {
              textTransform: 'none'
            },
          },
          {
            props: { variant: 'raised', color: 'secondary' },
            style: {
              textTransform: 'none'
            },
          },
        ],
      },
    },
  })

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    // marginTop: theme.spacing.unit * 5,
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
})

class Signup extends Component {
  state = {
      name: '',
      password: '',
      email: '',
      open: false,
      error: '',
      onClose: false
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value})
  }

  handleClose = () => {
    this.setState({ onClose: true })
  }
  
  clickSubmit = () => {
    const user = {
      name: this.state.name || undefined,
      email: this.state.email || undefined,
      password: this.state.password || undefined
    }
    create(user).then((data) => {
      if (data.error) {
        this.setState({error: data.error})
      } else {
        this.setState({error: '', open: true})
      }
    })
  }

  render() {
    const {classes} = this.props
    return (<div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h2" className={classes.title}>
            Sign Up
          </Typography>
          <TextField id="name" label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal"/><br/>
          <TextField id="email" type="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
          <TextField id="password" type="password" label="Password" className={classes.textField} value={this.state.password} onChange={this.handleChange('password')} margin="normal"/>
          <br/> {
            this.state.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {this.state.error}</Typography>)
          }
        </CardContent>
        <CardActions>
                <Button color="primary" variant="outlined" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
          
        </CardActions>
      </Card>
      <Dialog 
        open={this.state.open}
        onClose={this.handleClose}> 
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New account successfully created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/signin">
            <MuiThemeProvider theme={theme}>
              <Button color="primary" autoFocus="autoFocus" variant="outlined">Sign In</Button>
          </MuiThemeProvider>
          </Link>
        </DialogActions>
      </Dialog>
    </div>)
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Signup)
