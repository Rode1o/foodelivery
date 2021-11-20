import React from 'react'
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import Signinwelcomescreen from "../screens/authScreen/signinwelcomescreen";
import Signinscreen from "../screens/authScreen/signinscreen";

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
        </Auth.Navigator>
    )
}