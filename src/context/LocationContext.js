import React from "react";
import CreateDataContext from "./CreateDataContext";

const LocationReducer = (state, action) => {
    switch(action.type){
        case "add_current_location":
            return{...state,currentLocation:action.payload}
        case "start_recording":
            return{...state,recording:true}
        case "stop_recording":
            return{...state,recording:false}
        case "add_location":
            console.log("Tracking");
            return{...state,locations:[...state.location,action.payload]}
        case "change_name":
            return{...state,name:action.payload}
        default:
            return state;
    }
}
const changeName = (dispatch) => {
    return (name) => {
        dispatch({type:"change_name", payload:name});
    }
}
const startRecording = (dispatch) => {
    return () => {
        console.log("recording started");
        dispatch({type:"start_recording"});
    }    
}

const stopRecording = (dispatch) => {
    return () => {
        dispatch({type:"stop_recording"});
    }
}

const addLocation = (dispatch) => {
    return (location,recording) => {
        dispatch({type:"add_current_location",payload:location});
        if(recording){
            console.log("recording enabled");
            dispatch({type:"add_location",payload:location});
        }
    }
}

export const {Provider, Context} = CreateDataContext(
    LocationReducer,
    {startRecording,stopRecording,addLocation,changeName},
    {name:"",recording:false,locations:[],currentLocation:null}
);