import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Controller_con from "../../containers/router/controller_cont";
import Login from "../../containers/loginCont";
import Drawer_option_con from "../../containers/router/drawer_cont"
// Admin Imports
import AdminCont from "../../containers/admin/adminCont"
import AddAdminCont from "../../containers/admin/addAdminCont";
import ManagerContainer from "../../containers/manager/managerContainer";
import AddManagerContainer from "../../containers/manager/addManagerContainer";
import AddExecutiveContainer from "../../containers/executive/addExecutiveContainer";
import ExecutiveContainer from "../../containers/executive/executiveContainer";
import MajorheadContainer from "../../containers/majorhead/majorheadContainer";
import MinorheadContainer from "../../containers/minorheads/minorheadContainer";
import ClientContainer from "../../containers/client/clientContainer";
import AddClientContainer from "../../containers/client/addClientContainer";
import JobcardContainer from "../../containers/jobcard/jobcardContainer";
import AddJobCardContainer from "../../containers/jobcard/addJobCardContainer";

class Routes extends Component {

    render() {
        const {login, classes, onLogout} = this.props;


        return (
            <Router>
               <Route exact path="/" component={AddClientContainer}/>
            </Router>
        );
    }
}

export default (Routes);
