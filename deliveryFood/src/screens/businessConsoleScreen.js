import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Pressable,
    Image,
    Dimensions
} from "react-native";
import {Icon} from "react-native-elements"

export default function BusinessConsoleScreen(){
    return(
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})