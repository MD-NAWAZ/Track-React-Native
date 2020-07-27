import React from "react";
import {View,StyleSheet,Text,Button} from "react-native";

const TrackListScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style = {{fontSize : 50}}>TrackListScreen</Text>
        <Button 
        title="Go to Signin Screen"
        onPress = {()=> navigation.navigate("trackDetail")}
        />
        </View>
    )
};


const styles = StyleSheet.create(
    {
        container : {
            marginTop:25,
            justifyContent : 'center',
            marginBottom: 250
        }
    }
);

export default TrackListScreen;