import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import Signinwelcomescreen from "../screens/authScreen/signinwelcomescreen";
import Signinscreen from "../screens/authScreen/signinscreen";
import SignUpScreen from "../screens/authScreen/SignUpScreen";



const Auth = createStackNavigator();

export function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen
                name ="SignInWelcomeScreen"
                component = {Signinwelcomescreen}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name ="SignInScreen"
                component = {Signinscreen}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name ="SignUpScreen"
                component = {SignUpScreen}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />




        </Auth.Navigator>
    )
}