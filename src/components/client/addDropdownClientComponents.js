import React, { Component } from "react/index.js";
import Grid from "@material-ui/core/Grid";
import CardHeader from "../cards/CardHeader.js";
import CardIcon from "../cards/CardIcon.js";
import Card from "../cards/Card.js";
import withStyles from "@material-ui/core/styles/withStyles";
import Snackbar from "../snackbar/snackbar";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Avatar, } from "@material-ui/core";
import moment from "moment";
//import DateFnsUtils from '@date-io/date-fns';
//import {MuiPickersUtilsProvider,KeyboardTimePicker,} from '@material-ui/pickers';
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { styles } from "../../styles/style";
import LoaderCon from "../../containers/loader/loader_cont";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import DialogContentText from "@material-ui/core/DialogContentText";

const card = {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    marginTop: 50
};

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}
const service = {
    fontSize:20
}
class AddDropdownClient extends Component {
render() {
console.log(this.props.isRegType)
 const {isRegType,isGstType,isDinType,isPtType,isPfEsiType,isIecType,isDdoType,isClientIdType,isOrgIdType,isRegOpt,isGstOpt,isDinOpt,isPtOpt,isPtEsiOpt,isIecOpt,isDdoOpt,isClientIdOpt,isOrgIdOpt,select_option} = this.props;
       
        return (
            <Grid container justify="center">
                <Grid item xs={12} style={{paddingTop:50}}>
                    <Card style={card} style={{margin:"auto",width:"50%"}}>
                    <form>
                        <CardHeader >
                              <select onChange={(e)=>{select_option(e)}} style={{padding:"2%",fontSize:"20px",backgroundColor:"rgb(236 64 122)",width:"100%"}}>
                                <option value="Company" style={service}>Company</option>
                                <option value="Govt.Entity">Govt.Entity</option>
                                <option value="Individual">Individual</option>
                                <option value="LLP">LLP</option>
                                <option value="Partnership firms">Partnership firms</option>
                                <option value="Proprietorship firms">Proprietorship firms</option>
                                <option value="Trust">Trust</option>
                              </select>
                        </CardHeader>
                        <CardContent>
                            <TextField
                                // autoFocus
                                margin="dense" variant="outlined"
                                // id="name"
                                label={isRegOpt ? 'Register Number[Optional]' : 'Register'}
                                type="text"
                                fullWidth required={isRegOpt ? false : true}
                               style={ { display: isRegType ? 'block' : 'none' } } 
                            />
                            <TextField
                                // autoFocus
                                margin="dense" variant="outlined"
                                // id="name"
                                label={isGstOpt ? 'GST Number[Optional]' : 'GST Number' }
                                type="text"
                                fullWidth required={isGstOpt ? false : true}
                                style={ { display: isGstType ? 'block' : 'none' } }
                            />
                            <TextField
                                // autoFocus
                                margin="dense" variant="outlined"
                                // id="name"
                                label={isDinOpt ? 'DIN Number[Optional]' : 'DIN Number' }
                                type="text"
                                fullWidth required={isDinOpt ? false : true}
                                 style={ { display: isDinType ? 'block' : 'none' } }
                            />
                            <TextField
                                // autoFocus
                                margin="dense" variant="outlined"
                                // id="name"
                                label={isPtOpt ? 'PT Number[Optional]' : 'PT Number' }
                                type="text"
                                fullWidth required={isPtOpt ? false : true}
                                style={ { display: isPtType ? 'block' : 'none' } }
                            />
                            <TextField
                                // autoFocus
                                margin="dense" variant="outlined"
                                // id="name"
                                label={isPtEsiOpt ? 'PT ESI Number[Optional]' : 'PT ESI Number' }
                                type="text"
                                fullWidth required={isPtEsiOpt ? false : true}
                                 style={ { display: isPfEsiType ? 'block' : 'none' } }
                            />
                            <TextField
                                // autoFocus
                                margin="dense" variant="outlined"
                                // id="name"
                                label={isIecOpt ? 'IEC Number[Optional]' : 'IEC Number' }
                                type="text"
                                fullWidth required={isIecOpt ? false : true}
                                style={ { display: isIecType ? 'block' : 'none' } }
                            />
                            <TextField
                                // autoFocus
                                margin="dense" variant="outlined"
                                // id="name"
                                label={isDdoOpt ? 'DDO Number[Optional]' : 'DDO Number' }
                                type="text"
                                fullWidth required={isDdoOpt ? false : true}
                               style={ { display: isDdoType ? 'block' : 'none' } }
                            />
                            <TextField 
                                // autoFocus
                                margin="dense" variant="outlined"
                                // id="name"
                                label="Client Id"
                                type="text"
                                fullWidth required
                                 style={ { display: isClientIdType ? 'block' : 'none' } }
                            />

                            <TextField
                                // autoFocus
                                margin="dense"  variant="outlined"
                                // id="name"
                                label="Organization Id"
                                type="text"
                                fullWidth required
                                 style={ { display: isOrgIdType ? 'block' : 'none' } }
                            />
                            <Button type="submit" variant="outlined" fullWidth style={{marginTop:20}}>
                                SUBMIT
                            </Button>
                          </CardContent>
                        </form>
                    </Card>

                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(AddDropdownClient);