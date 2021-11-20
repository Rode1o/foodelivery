import React,{useState, useRef} from "react";

import {View, Text, StyleSheet, Dimensions, Image} from "react-native"
import {colors, parameters,} from "../../global/styles"
import * as Animatable from 'react-native-animatable'
import Swiper from 'react-native-swiper'
import {Icon, Button, SocialIcon} from "react-native-elements"

export default function Signinwelcomescreen({navigation}){
    return(
        <View style={{flex:1}}>
            <View style={{flex:3 , justifyContent:"flex-start", alignItems:"center", paddingTop:20}}>
                <Text style={{fontSize:26, color:colors.buttons, fontWeight:"bold"}}>DISCOVER RESTAURANT</Text>
                <Text style={{fontSize:26, color:colors.buttons, fontWeight:"bold"}}>IN YOUR AREA</Text>
            </View>
            <View style={{flex:4, justifyContent:"center"}}>
                <Swiper autoplay ={true}>
                    <View style={styles.slide1}>
                        <Image
                            source={{uri:"https://www.wradio.com.co/resizer/n3TysBFL8cnaSOc0_-iXRDv8hvc=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/SCX6V4JKH5ACDO2B5BX5FK5I3Q.jpg"}}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>

                    <View style={styles.slide2}>
                        <Image
                            source={{uri:"https://tubarco.news/wp-content/uploads/2019/03/mote-de-queso.png"}}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>

                    <View style={styles.slide3}>
                        <Image
                            source={{uri:"https://4.bp.blogspot.com/-SCv09T3ZyhQ/WZ9t8GOl9oI/AAAAAAAAC_s/pBYEnRumfQkB151rwNIIg7oD969C9CFAwCLcBGAs/s1600/CANTUA.jpg"}}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>
                </Swiper>
            </View>
            <View style={{flex:4, justifyContent:"flex-end", marginBottom:20}}>
                <View style={{marginHorizontal:20, marginTop:30}}>
                    <Button
                        title="SIGN IN"
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={()=>{
                            navigation.navigate("Signinscreen")
                        }}
                    />
                </View>
                <View style={{marginHorizontal:20, marginTop:30}}>
                    <Button
                        title={"Create an account"}
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    slide1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#E7C8DD"
    },
    slide2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#DBAFC1"
    },
    slide3:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#DAA49A"
    },
    createButton:{
        backgroundColor:"#ffffff",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.grey4,
        height:50,
        paddingHorizontal:20,
    },
    createButtonTitle:{
        color:colors.grey4,
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    },

})
