import axios from "axios"


export const LOGIN_DATA = "LOGIN_DATA"


const LoginSuccess = (payload) => ({

    type : LOGIN_DATA ,
    payload

})  


export const getData = () => (dispatch) => {

    axios.get("http://localhost:8080/registerData").then( (res)=> dispatch(LoginSuccess(res.data)))
}