import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import rootClientTabs from "./clientTabs";
import {Icon} from "react-native-elements";
import {colors} from "../global/styles";
import BusinessConsoleScreen from "../screens/businessConsoleScreen";
import DrawerContent from "../components/drawerContent";

const Drawer = createDrawerNavigator();

export default function drawerNavigator(){
    return(
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props}/>}
        >
            <Drawer.Screen
                name="RootClientTabs"
                component={rootClientTabs}

                options={{
                    title:"Client",
                    drawerIcon:({
                                    focused, size
                                })=>(
                        <Icon
                            name="home"
                            type="material-community"
                            color={focused ? "#7cc" : colors.grey4}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="business Console Screen"
                component={BusinessConsoleScreen}

                options={{
                    title:"Business console",
                    drawerIcon:({
                                    focused, size
                                })=>(
                        <Icon
                            name="business"
                            type="material"
                            color={focused ? "#7cc" : colors.grey4}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}