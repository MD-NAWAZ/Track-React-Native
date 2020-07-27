import React,{useContext} from "react";
import {View,StyleSheet,TouchableOpacity} from "react-native";
import {Button,Text,Input} from "react-native-elements";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../Components/AuthForm";
import { navigate } from "../Navigation/navigationRef";
import Spacer from "../Components/Spacer"; 
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
    const {state,signin,clearErrorMessage} = useContext(AuthContext);
    console.log(state);
    return (
        <View style={styles.container}>
            <NavigationEvents
            onWillFocus={clearErrorMessage}
            />
            <AuthForm
            headerText="Signin Screen"
            errorMessage={state.errorMessage}
            onSubmit={signin}
            submitButtonText="Login"
            />  
            <Spacer>
            <TouchableOpacity onPress={()=>navigate("signup") }>
    <Text>Not Registered? Signup Please</Text>
                </TouchableOpacity>
            </Spacer>   
        </View>
    )
};
SigninScreen.navigationOptions = () =>{
    return {
        headerShown: false
    }
}
const styles = StyleSheet.create(
    {
        container : {
            marginTop:100,
            justifyContent : 'center',
            marginBottom: 250
        }
    }
);

export default SigninScreen;