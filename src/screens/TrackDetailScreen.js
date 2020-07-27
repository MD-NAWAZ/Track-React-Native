import React from "react";
import {View,StyleSheet,Text} from "react-native";
import {SafeAreaView} from "react-navigation";

const TrackDetailScreen = () => {
    return (
        <View>
            <SafeAreaView forceInset={{top:"always"}}>
        <Text style = {{fontSize : 50}}>TrackDetailScreen</Text>
        </SafeAreaView>
        </View>
    )
};


const styles = StyleSheet.create(
    {

    }
);

export default TrackDetailScreen;