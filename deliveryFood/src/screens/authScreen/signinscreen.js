import React,{useState, useRef} from "react";

import {View, Text, StyleSheet, Dimensions, TextInput} from "react-native"
import {colors, parameters,} from "../../global/styles"
import * as Animatable from 'react-native-animatable'
import {Icon, Button, SocialIcon} from "react-native-elements"
import Header from "../../components/header";
import {title} from "../../global/styles";

export default function Signinscreen({navigation}){
    const[TextInput2Focussed, setTextInput2Focussed] =useState(false)
    const TextInput1 = useRef(1)
    const TextInput2 = useRef(2)

    return(
        <View style={styles.container}>
            <Header title="My Account" type="arrow-left" navigation={navigation}/>
            <View style={{marginLeft:20, marginTop:10}}>
                <Text style={title}>Sign-In</Text>
            </View>
            <View style={{alignItems:"center", marginTop:10}}>
                <Text style={styles.text1}>Please enter the Email and Password</Text>
                <Text style={styles.text1}>Register with your account</Text>
            </View>

            <View style={{marginTop:20}}>
                <View>
                    <TextInput
                        style={styles.TextInput1}
                        placeholder="Email"
                        ref ={TextInput1}
                    />
                </View>
                <View style={styles.TextInput2}>
                <Animatable.View animation={TextInput2Focussed?"":"fadeInLeft"} duration={400}>
                    <Icon
                        name="lock"
                        iconStyle={{color:colors.grey5}}
                        type="material"
                        style={{}}
                    />
                </Animatable.View>
                    <TextInput
                        style={{width:"80%"}}
                        placeholder="Password"
                        ref = {TextInput2}
                        onFocus={()=>{
                            setTextInput2Focussed(false)
                        }}
                        onBlur={()=>{
                            setTextInput2Focussed(true)
                        }}
                    />
                <Animatable.View animation={
                    TextInput2Focussed?"":"fadeInLeft"} duration={400}>
                    <Icon
                        name="visibility-off"
                        iconStyle={{color:colors.grey5}}
                        type="material"
                        style={{marginRight:10}}
                    />
                </Animatable.View>
                </View>
            </View>
            <View style={{marginHorizontal:20, marginTop:30}}>
                <Button
                    title="SIGN IN"
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
                    onPress={()=>{
                        navigation.navigate('rootClientTabs')
                    }}
                />
            </View>
            <View style={{alignItems:"center", marginTop:15}}>
                <Text style={{...styles.text1, textDecorationLine:"underline"}}> Forgot Password?</Text>
            </View>

            <View style={{alignItems:"center", marginTop:20, marginBottom:20}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>OR</Text>
            </View>
            <View style={{marginHorizontal:10, marginTop:10}}>
                <SocialIcon
                    title="Sign In With Facebook"
                    button
                    type="facebook"
                    style={styles.socialIcon}
                    onPress={()=>{}}
                />
            </View>

            <View style={{marginHorizontal:10, marginTop:10}}>
                <SocialIcon
                    title="Sign In With Google"
                    button
                    type="google"
                    style={styles.socialIcon}
                    onPress={()=>{}}
                />
            </View>

            <View style={{marginLeft:25, marginTop:15}}>
                <Text style={{...styles.text1}}> New on DeliveryFood ?</Text>
            </View>

            <View style={{alignItems:"flex-end", marginHorizontal:20}}>
                <Button
                    title={"Create an account"}
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1
    },

    text1:{
        color:colors.grey5,
        fontSize:16
    },

    TextInput1:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:15
    },
    TextInput2:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:20,
        borderColor:"#86939e",
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:15
    },

    socialIcon:{
        borderRadius: 12,
        height:50
    },

    createButton:{
        backgroundColor:"#ffffff",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#A80874",
        height:40,
        paddingHorizontal:20
    },
    createButtonTitle:{
        color:"#A80874",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    },
})