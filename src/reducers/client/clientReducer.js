import {
    RESET_CLIENT,
    SET_CLIENT_DEPARTMENT,
    SET_CLIENT_EMAIL, SET_CLIENT_EMPLOYEE_ID,
    SET_CLIENT_NAME, SET_CLIENT_PASSWORD, SET_CLIENT_POSITION, SET_CLIENT_PROFILE,
    SET_ALL_CLIENT,SELECT_OPTION
    SET_CLIENT_EMAIL,
    SET_CLIENT_NAME,
    SET_CLIENT_PROFILE,
    SET_ALL_CLIENT,
    SET_CLIENT_CONTACT_NUM,
    SET_CLIENT_ADDRESS,
    SET_CLIENT_PAN_NUM,
    SET_CLIENT_AADHAR_NUM,
    SET_CLIENT_CLIENT_SOURCE
} from "../../constants/client/clientConstants";
const initial_state = {
    all_client:[],
    name:"",
    profile:"",
    email:"",
    password:"",
    position:"",
    department:"",
    employee_id: "",

     isRegType : true,
     isGstType : true,
     isDinType : false,
     isPtType : true,
     isPfEsiType: true,
     isIecType :true,
     isDdoType : false,
     isClientIdType : true,
     isOrgIdType : true,

     isRegOpt : false,
     isGstOpt : true,
     isDinOpt : false,
     isPtOpt : true,
     isPtEsiOpt: true,
     isIecOpt :true,
     isDdoOpt : false,
     isClientIdOpt : false,
     isOrgIdOpt :false
    contact_num:"",
    address:"",
    pan_num:"",
    aadhar_num: "",
    client_source: ""
};
export default function reducer(state = initial_state, action) {
    console.log(action)
    switch (action.type) {

        case SELECT_OPTION:

        if (action.payload.target.value === "Company" || action.payload.target.value === "Partnership firms" || action.payload.target.value === "Trust") {
                return state = {isRegType : true,isGstType : true,isDinType:false,isPtType : true,isPfEsiType: true,isDdoType:false,isClientIdType : true,isOrgIdType : true,
                   isRegOpt : false,isGstOpt : true,isDinOpt : false,isPtOpt : true,isPtEsiOpt: true,isIecOpt :true,isDdoOpt : false,isClientIdOpt : false,isOrgIdOpt :false
                };
        }else if  (action.payload.target.value === "Govt.Entity") {
                return state = {
                   isRegType:false,isGstType:false,isDinType:false,isPtType : false,isPfEsiType: false,isIecType :false,isDdoType:true,isClientIdType : true,isOrgIdType : true,
                   isDdoOpt : false,isClientIdOpt : false,isOrgIdOpt :false
                };

        }else if  (action.payload.target.value === "Individual") {
                return state = {isRegType:false,isGstType:false,isDinType:true,isPtType : false,isPfEsiType: false,isIecType :false,isDdoType:false,isClientIdType : true,isOrgIdType : true,
                   isDinOpt : true
                };

        }else if  (action.payload.target.value === "LLP") {
                return state = {isRegType:true,isGstType:false,isDinType:false,isPtType : true,isPfEsiType: true,isIecType :true,isDdoType:false,isClientIdType : true,isOrgIdType : true,
                   isPtOpt : true,isPtEsiOpt:true,isIecOpt :true
                };

        }else if  (action.payload.target.value === "Proprietorship firms") {
               return state = {isRegType:false,isGstType:true,isDinType:false,isPtType : true,isPfEsiType: true,isIecType :true,isDdoType:false,isClientIdType : true,isOrgIdType : true,
                   isGstOpt : true,isPtOpt : true,isPtEsiOpt:true,isIecOpt :true
                };

        }





        case SET_ALL_CLIENT:
            return state = { ...state, all_client: action.payload };
        case SET_CLIENT_NAME:
            return state = { ...state, name: action.payload };
        case SET_CLIENT_PROFILE:
            return state = { ...state, profile: action.payload };
        case SET_CLIENT_EMAIL:
            return state = { ...state, email: action.payload };
        case SET_CLIENT_CONTACT_NUM:
            return state = { ...state, contact_num: action.payload };
        case SET_CLIENT_ADDRESS:
            return state = { ...state, address: action.payload };
        case SET_CLIENT_PAN_NUM:
            return state = { ...state, pan_num: action.payload };
        case SET_CLIENT_AADHAR_NUM:
            return state = { ...state, aadhar_num: action.payload };
        case SET_CLIENT_CLIENT_SOURCE:
            return state = { ...state, client_source: action.payload };
        case RESET_CLIENT:
            return state = { ...state, name:"", profile: "", email: "", password: "", position: "", department: "", employee_id: ""};
        

            return state = { ...state, name:"", profile: "", email: "", contact_num: "", address: "", pan_num: "", aadhar_num: "", client_source: ""};

        default:
            return state;
    }
}