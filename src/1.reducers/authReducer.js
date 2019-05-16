import {LOGIN_SUCCESS} from './../support/constant/type'
const INITIAL_STATE={id:null,email:'',pass:'',data:{
    1:{nama:'Fikri',shift:'Tue',phone:'08816831803'},
    2:{nama:'Seto',shift:'Wed',phone:'08816831804'},
    3:{nama:'Andi',shift:'Sat',phone:'08816831805'},
    4:{nama:'Steve',shift:'Sun',phone:'08816831806'}
}}

const authReducer=(state,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return{...INITIAL_STATE,email:action.payload.email,id:action.payload.id}
        default:
            return INITIAL_STATE
    }
}

export default authReducer