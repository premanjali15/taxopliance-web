import React, { Component } from "react";
import { connect } from "react-redux";
import AddDropdownClient from "../../components/client/addDropdownClientComponents";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
     get_all_client,
     add_client,
     set_all_client,
     set_client_name,
     set_client_profile,
     set_client_email,
     set_client_password,
     set_client_position,
     set_client_department,
     set_client_employee_id,

     select_option,
     isRegType,
     isGstType,
     isDinType,
     isPtType,
     isPfEsiType,
     isIecType,
     isDdoType,
     isClientIdType,
     isOrgIdType,

     isRegOpt,
     isGstOpt,
     isDinOpt,
     isPtOpt,
     isPtEsiOpt,
     isIecOpt,
     isDdoOpt,
     isClientIdOpt,
     isOrgIdOpt

} from "../../actions/client/clientActions";

export class AddDropdownClientCont extends Component {
    render() {
        return (
            <AddDropdownClient {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {
     login: store.login,
     loader: store.loader,
     snackbar: store.snackbar,
     client:store.client,

     isRegType:store.client.isRegType, 
     isGstType :store.client.isGstType,
     isDinType : store.client.isDinType,
     isPtType :store.client.isPtType,
     isPfEsiType:store.client.isPfEsiType,
     isIecType :store.client.isIecType,
     isDdoType : store.client.isDdoType,
     isClientIdType :store.client.isClientIdType,
     isOrgIdType :store.client.isOrgIdType,

     isRegOpt : store.client.isRegOpt,
     isGstOpt :store.client.isGstOpt,
     isDinOpt : store.client.isDinOpt,
     isPtOpt :store.client.isPtOpt,
     isPtEsiOpt:store.client.isPtEsiOpt,
     isIecOpt :store.client.isIecOpt,
     isDdoOpt : store.client.isDdoOpt,
     isClientIdOpt : store.client.isClientIdOpt,
     isOrgIdOpt :store.client.isOrgIdType


    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_client: (token) => {
            dispatch(get_all_client(token));
        },
        add_client: (client,token,oid) => {
            dispatch(add_client(client,token,oid));
        },
        set_client_name: (token) => {
            dispatch(set_client_name(token));
        },
        set_client_email: (token) => {
            dispatch(set_client_email(token));
        },
        set_client_profile: (token) => {
            dispatch(set_client_profile(token));
        },
        set_client_password: (token) => {
            dispatch(set_client_password(token));
        },
        set_client_position: (token) => {
            dispatch(set_client_position(token));
        },
        set_client_department: (token) => {
            dispatch(set_client_department(token));
        },
        set_client_employee_id: (token) => {
            dispatch(set_client_employee_id(token));
        },
        select_option: (token) => {
            dispatch(select_option(token));
        }

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddDropdownClientCont);