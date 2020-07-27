import React,{useContext} from "react";
import {View,StyleSheet,Text} from "react-native";
import {Button} from "react-native-elements";
import {Context as AuthContext} from "../context/AuthContext";
import {SafeAreaView} from "react-navigation";
import { navigate } from "../Navigation/navigationRef";

const AccountScreen = () => {
    const {state, signout} = useContext(AuthContext);

    return (
        <View>
            <SafeAreaView forceInset={{top:"always"}}>
        <Text style = {{fontSize : 50}}>AccountScreen</Text>
        <Button
        title="Signout"
        onPress={signout}
        />
        </SafeAreaView>
        </View>
    )
};

AccountScreen.navigationOptions = ({navigation}) => {
    return {
        header : null
    }
}
const styles = StyleSheet.create(
    {

    }
);

export default AccountScreen;