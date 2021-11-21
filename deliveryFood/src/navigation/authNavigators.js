import React from 'react'
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import Signinwelcomescreen from "../screens/authScreen/signinwelcomescreen";
import Signinscreen from "../screens/authScreen/signinscreen";
import AndroidHorizontalScrollContentViewNativeComponent
    from "react-native/Libraries/Components/ScrollView/AndroidHorizontalScrollContentViewNativeComponent";
import Homescreen from "../screens/homescreen";
import rootClientTabs from "./clientTabs";
import drawerNavigator from "./drawerNavigator";
import RestaurantMapScreen from "../screens/restaurantMapScreen";

const Auth = createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen
                name = "Signinwelcomescreen"
                component = {Signinwelcomescreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name = "Signinscreen"
                component = {Signinscreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
                />
            <Auth.Screen
                name = "drawerNavigator"
                component = {drawerNavigator}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name = "RestaurantMapScreen"
                component = {RestaurantMapScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </Auth.Navigator>
    )
}