import React, {useState, useContext, useEffect} from "react";

import {View, Text, Linking, Pressable, Alert, Switch, StyleSheet} from "react-native";

import {DrawerContentScrollView, DrawerItemList, DrawerItem} from "@react-navigation/drawer";

import {Avatar, Button, Icon} from "react-native-elements";
import {colors} from "../global/styles";

export default function DrawerContent(props){
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{backgroundColor:colors.buttons}}>
                    <View style={{flexDirection:"row", alignItems:"center",  paddingLeft:20, paddingVertical:10}}>
                        <Avatar
                            rounded
                            avatarStyle={styles.avatar}
                            size={75}
                            source = {{uri:"https://image.shutterstock.com/image-photo/french-fries-600w-640476622.jpg"}}
                        />
                        <View style={{marginLeft:10}}>
                            <Text style={{fontWeight:"bold", color:colors.headersText, fontSize:18}}>Pepe Juan</Text>
                            <Text style={{color:colors.headersText,fontSize:14}}>juanpepe@deliveryfood.com</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", justifyContent:"space-evenly", paddingBottom:5}}>
                        <View style={{flexDirection:"row", marginTop:0}}>
                            <View style={{marginLeft:10, alignItems:"center", justifyContent:"center"}}>
                                <Text style={{fontWeight:"bold",color:colors.headersText, fontSize:18}}>1</Text>
                                <Text style={{color:colors.headersText, fontSize:14}}>My Favorites</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row", marginTop:0}}>
                            <View style={{marginLeft:10, alignItems:"center", justifyContent:"center"}}>
                                <Text style={{fontWeight:"bold",color:colors.headersText, fontSize:18}}>0</Text>
                                <Text style={{color:colors.headersText, fontSize:14}}>Shopping Cart</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <DrawerItemList {...props}/>
                <DrawerItem label="Payment"
                            icon={({color,size})=>(
                                <Icon
                                    name="credit-card-outline"
                                    type="material-community"
                                    color={color}
                                    size={size}
                                />
                            )}
                />
                <DrawerItem label="Driver Console"
                            icon={({color,size})=>(
                                <Icon
                                    name="motorbike"
                                    type="material-community"
                                    color={color}
                                    size={size}
                                />
                            )}
                />

                <DrawerItem label="Promotions"
                            icon={({color,size})=>(
                                <Icon
                                    name="tag-heart"
                                    type="material-community"
                                    color={color}
                                    size={size}
                                />
                            )}
                />

                <DrawerItem label="Settings"
                            icon={({color,size})=>(
                                <Icon
                                    name="cog-outline"
                                    type="material-community"
                                    color={color}
                                    size={size}
                                />
                            )}
                />

                <DrawerItem label="Help"
                            icon={({color,size})=>(
                                <Icon
                                    name="lifebuoy"
                                    type="material-community"
                                    color={color}
                                    size={size}
                                />
                            )}
                />

                <View style={{borderTopWidth:1, borderTopColor:colors.grey4}}>
                    <Text style={styles.preferences}>Preferences</Text>
                    <View style={styles.switchText}>
                       <Text style={styles.darkThemeText}>Dark Theme</Text>
                       <View style={{paddingRight:10}}>
                           <Switch
                                trackColor={{false: "#767577", true: "#81b0ff"}}
                                thumbColor="#f4f3f4"
                           />
                       </View>
                    </View>
                </View>

            </DrawerContentScrollView>
            <DrawerItem label="Sign Out"
                        icon={({color,size})=>(
                            <Icon
                                name="logout-variant"
                                type="material-community"
                                color={color}
                                size={size}
                            />
                        )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    avatar:{
        borderWidth:4,
        borderColor:colors.headersText,
    },
    preferences:{
        fontSize:16,
        color:colors.grey4,
        paddingTop:10,
        paddingLeft:20
    },
    switchText:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkThemeText:{
        fontSize:16,
        color:colors.grey4,
        paddingTop:10,
        paddingLeft:0,
        fontWeight:"bold"
    }
})