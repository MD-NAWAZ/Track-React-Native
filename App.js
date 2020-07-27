import React from "react";

import {createAppContainer,createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";  
import {Provider as AuthProvider} from "./src/context/AuthContext";
import {Provider as LocationProvider} from "./src/context/LocationContext";
import {setNavigator} from "./src/Navigation/navigationRef";
import NoScreen from "./src/screens/NoScreen";

const switchNavigator = createSwitchNavigator({
  no : NoScreen,
  loginFlow : createStackNavigator({
    signup : SignupScreen,
    signin : SigninScreen
  }
  ),
  mainFlow : createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      trackList: TrackListScreen,
      trackDetail : TrackDetailScreen
    }),
    trackCreate : TrackCreateScreen,
    account : AccountScreen
  })
})

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationProvider>
    <AuthProvider>
      <App
      ref ={(navigator)=>setNavigator(navigator)}
      />
    </AuthProvider>
    </LocationProvider>
  )
};
