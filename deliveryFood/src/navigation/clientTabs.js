import React from "react";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {colors} from "../global/styles";
import {Icon} from "react-native-elements";
import Homescreen from "../screens/homescreen";
import SearchScreen from "../screens/searchScreen";
import myOrderScreen from "../screens/myOrderScreen";
import myAccountScreen from "../screens/myAccountScreen";
import {clientStack} from "./clientStack";

const clientTabs = createBottomTabNavigator();

export default function rootClientTabs(){
    return(
        <clientTabs.Navigator
            screenOptions = {{
                tabBarActiveTintColor:colors.buttons
            }}
        >
            <clientTabs.Screen
                name="homeScreen"
                component={Homescreen}
                options={
                    {
                        tabBarLabel : "home",
                        tabBarIcon: ({color, size})=>(
                            <Icon
                                name="home"
                                type="material"
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />

            <clientTabs.Screen
                name="searchScreen"
                component={clientStack}
                options={
                    {
                        tabBarLabel : "search",
                        tabBarIcon: ({color, size})=>(
                            <Icon
                                name="search"
                                type="material"
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />

            <clientTabs.Screen
                name="myOrderscreen"
                component={myOrderScreen}
                options={
                    {
                        tabBarLabel : "myOrders",
                        tabBarIcon: ({color, size})=>(
                            <Icon
                                name="view-list"
                                type="material"
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />

            <clientTabs.Screen
                name="myAccount"
                component={myAccountScreen}
                options={
                    {
                        tabBarLabel : "myAccount",
                        tabBarIcon: ({color, size})=>(
                            <Icon
                                name="person"
                                type="material"
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />

        </clientTabs.Navigator>
    )
}