import React,{useContext,useCallback} from "react";
import {View,StyleSheet} from "react-native";
import {Text} from "react-native-elements";
import {SafeAreaView,withNavigationFocus} from "react-navigation";
import Map from "../Components/Map";
import _mockLocation from "../_mockLocation";
import {Context as LocationContext} from "../context/LocationContext";
import useLocation from "../Hooks/useLocation";
import TrackForm from "../Components/TrackForm";

const TrackCreateScreen = ({isFocused}) => {
    const {state,addLocation} = useContext(LocationContext);
    const callback = useCallback((location)=>{addLocation(location,state.recording)});
    const [err] = useLocation(isFocused,callback);
    return (
        <View>
            <SafeAreaView forceInset={{top:"always"}}>
        <Text h2>TrackCreateScreen</Text>
        <Map/>
        {err?<Text>Please provide permission</Text> : null}
        <TrackForm/>
        </SafeAreaView>
        </View>
    )
};

TrackCreateScreen.navigationOptions = ({navigation}) => {
    return {
        header : null
    }
}
const styles = StyleSheet.create(
    {

    }
);

export default withNavigationFocus(TrackCreateScreen);