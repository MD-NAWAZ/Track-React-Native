import {AsyncStorage} from "react-native";
import CreateDataContext from "./CreateDataContext";
import trackerApi from "../Api/trackerApi";
import {navigate} from "../Navigation/navigationRef";

const authReducer = (state, action) => {
    switch(action.type) {
        case "add_error":
            return{...state,errorMessage:action.payload};
        case "signup":
            return{errorMessage:action.payload.Message,token:action.payload.token}
            console.log(state);
        case "clear_error_message":
            return{...state,errorMessage:""}
        case "signout":
            return{errorMessage:"", token:null}
        default:
            return state;
    }
};
const tryLocalSingin = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem("token");
        if(token){
            dispatch({type:"signup",
        payload:token});
        console.log(token);
        navigate("trackList");
    }
    else {
        navigate("signup");
    }
}
}
const clearErrorMessage = (dispatch) => {
    return ()=> {
        dispatch({type:"clear_error_message"})
    }
}
const signup = (dispatch)=> {
    return async ({Email,Name,Password}) => {
        try {
            const response = await trackerApi.post("/Signup", {Email,Name,Password});
            dispatch({type:"signup",
            payload:{token:response.data.Token,
                Message:response.data.Message}});
            console.log(response.data)
            await AsyncStorage.setItem("token",response.data.Token)
            navigate("trackList");
            
        }
        catch(e){
            console.log(e)
            dispatch({type:"add_error",payload:"Something went wrong with Signup"})

        }
    };
};

const signin = (dispatch)=> {
    return async ({Email, Password}) => {
        try{
            const response = await trackerApi.post("/Login",{Email,Password});
            dispatch({
                type:"signup",
                payload:{token:response.data.Token,
                    Message:response.data.Message}
            });
            await AsyncStorage.setItem("token",response.data.Token)
            navigate("trackList");
            console.log(state);
        }  
        catch(e){
            
            dispatch({type:"add_error",payload:"Something went wrong with Signin"})                        
        }      
    };
};

const signout = (dispatch)=> {
    return async () => {
            const res = await AsyncStorage.removeItem("token");
            console.log(res);
            dispatch({type:"signout"}); 
            navigate("signin");               
    };
};

export const {Provider, Context} = CreateDataContext(
    authReducer,
    {signup,signin,signout,clearErrorMessage,tryLocalSingin},
    {token:null,errorMessage:""}
    );