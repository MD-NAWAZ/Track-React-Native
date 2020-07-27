import React,{useState} from "react";
import {View,StyleSheet} from "react-native";
import {Text,Button,Input} from "react-native-elements";
import Spacer from "../Components/Spacer"; 

const AuyhForm = ({headerText,errorMessage,name,onSubmit,submitButtonText}) => {
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const [Name, setName] = useState("")

    return (
        <>
        <Spacer>
        <Text h3>{headerText}</Text>
            </Spacer>
        <Input 
        label = "Email"
        value = {Email}
        onChangeText = {setEmail}
        />
        <Spacer/>
        {name?<Input 
        label = "Name"
        value = {Name}
        onChangeText = {setName}
        /> : null}
        <Spacer/>
        <Input 
        label = "Password"
        value = {Password}
        onChangeText = {setPassword}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Spacer>
        <Button 
        title={submitButtonText}
        onPress = {()=> onSubmit({Email,Name,Password})}
        />
        </Spacer>
        </>
    )
};

const styles = StyleSheet.create({
    container : {
          
        justifyContent : 'center',
        marginBottom: 250
    }
})

export default AuyhForm;