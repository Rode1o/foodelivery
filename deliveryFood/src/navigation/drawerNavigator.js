import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import rootClientTabs from "./clientTabs";
import {Icon} from "react-native-elements";
import {colors} from "../global/styles";

const Drawer = createDrawerNavigator();

export default function drawerNavigator(){
    return(
        <Drawer.Navigator>
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
        </Drawer.Navigator>
    )
}