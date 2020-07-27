import React,{useContext} from "react";
import {View,StyleSheet,TouchableOpacity} from "react-native";
import {Text,Button,Input} from "react-native-elements";
import Spacer from "../Components/Spacer"; 
import {Context as AuthContext} from "../context/AuthContext";
import { navigate } from "../Navigation/navigationRef";
import AuthForm from "../Components/AuthForm";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({navigation}) => {
    const {state,signup,clearErrorMessage,} = useContext(AuthContext);

        return (
        <View style = {styles.container}>
            <NavigationEvents
            onWillFocus={clearErrorMessage}
            />
        <AuthForm
        headerText="Sign Up Screen"
        errorMessage={state.errorMessage}
        name="Name"
        onSubmit={signup}
        submitButtonText = "Signup"
        />    
        <Spacer>
        <TouchableOpacity onPress={()=>navigate("signin")}>
            <Text>Already Registered? Signin instead</Text>
        </TouchableOpacity>
        </Spacer>        
        </View>
    )
};

SignupScreen.navigationOptions = ({navigation}) => {
    return {
        headerShown : false
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

export default SignupScreen;