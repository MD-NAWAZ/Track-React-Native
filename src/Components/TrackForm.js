import React,{useContext} from "react";
import {Input,Button} from "react-native-elements";
import Spacer from "./Spacer";
import {Context as LocationContext} from "../context/LocationContext";

const TrackForm = () => {
    const {state,startRecording,stopRecording,changeName} = useContext(LocationContext);
    return (
        <>
        <Spacer>
        <Input
        value={state.name}
        placeholder="Enter Track Name"
        onChangeText={changeName}
        />
        </Spacer>
        {state.recording?<Button title="STOP Recording" onPress={stopRecording}/>
        :<Button title="START Recording" onPress={startRecording}/>}
        </>
    );
}

export default TrackForm;