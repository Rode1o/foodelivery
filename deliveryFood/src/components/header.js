import React from "react";

import {View, Text, StyleSheet, Dimensions} from "react-native"
import {colors, parameters} from "../global/styles"

import {Icon} from "react-native-elements"

export default function Header({title, type, navigation}){
    return(
        <View style={styles.header}>
            <View style={{marginLeft:20}}>
                <Icon
                    type="material-community"
                    name= {type}
                    color={colors.headersText}
                    size={28}
                    onPress={()=>{
                        navigation.goBack()
                    }}
                />
            </View>
            <View>
                <Text style={styles.headersText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        backgroundColor:colors.buttons,
        height:parameters.headerHeight
    },
    headersText:{
        color:colors.headersText,
        fontSize:22,
        fontWeight:"bold",
        marginLeft:30
    }
})
