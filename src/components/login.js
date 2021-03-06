import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Snackbar from "../components/snackbar/snackbar";
import "../styles/style.scss";
import LoaderCon from "../containers/loader/loader_cont";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  componentDidMount() {
    this.props.clear_login()
    // if (localStorage.getItem('socus_token') !== null) {
    //   return <Redirect to="/" />
    // }
  }
  render() {
    const {
      login,
      setEmail,
      setPwd,
      login_email,
      snackbar,
      close_snack_bar,
    } = this.props;
    if (login.token!=="") {
      return <Redirect to="/dashboard" />
    }
    return (
      <div>
        <Grid className="login-background">
          <Grid container spacing={10} justify="center">
            <Grid item md={4} xs={12} >
              <Card className="login_card">
                <img
                  src={"https://firebasestorage.googleapis.com/v0/b/taxopliance-5dd90.appspot.com/o/logo%2FSonic%20Broadband-01%20(1).png?alt=media&token=07f899cf-3f82-4aae-868d-9202edbfb9f9"}
                  alt="no_img" style={{ height: 100 }}
                />
                <Typography className="login_heading">
                  SIGN IN
                  </Typography>
                <Grid container justify="center">
                  <Grid item xs={12} >
                    <TextField
                      id="outlined-email-input"
                      label="Email"
                      type="email"
                      fullWidth={true}
                      margin="normal"
                      variant="outlined"
                      required={true}
                      value={login.email}
                      onChange={(event) => { setEmail(event.target.value); }}
                      onKeyPress={event => {
                        if (event.key === 'Enter' && login.email !== "" && login.password !== "") {
                          login_email(login)
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      required={true}
                      value={login.password}
                      onChange={(event) => {
                        setPwd(event.target.value);
                      }}
                      onKeyPress={event => {
                        if (event.key === 'Enter' && login.email !== "" && login.password !== "") {
                          login_email(login)
                        }
                      }}
                    />
                  </Grid>
                  <br /><br /><br />
                  <Grid item xs={12}>
                    <br />
                    <Button
                      disabled={(login.email === "" || login.password === "") ? true : false}
                      id="outlined-email-input"
                      variant="contained"
                      color="primary"
                      fullWidth
                      margin="normal"
                      onClick={() => { login_email(login) }}
                    >
                      Log In
                      </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          <LoaderCon />
          <Snackbar
            open={snackbar.response_received}
            close_snack_bar={close_snack_bar}
            message={snackbar.message}
          />
        </Grid>
      </div>
    );
  }
}
export default Login;
