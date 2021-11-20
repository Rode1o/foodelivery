import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image} from "react-native";
import {Icon} from "react-native-elements"
import Homeheader from "../components/homeheader";
import {colors, parameters} from "../global/styles";
import {filterData} from "../global/data";

export default function Homescreen(){
    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setindexCheck] = useState("0")
    return(
        <View style={styles.container}>
            <Homeheader/>
            <ScrollView
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={true}
            >
            <View>
                <View style={{marginTop:10, flexDirection:"row", justifyContent:"space-evenly"}}>
                    <TouchableOpacity
                        onPress={()=>{
                            setDelivery(true)
                        }}
                    >
                        <View style={{...styles.deliveryButton,backgroundColor:delivery?colors.buttons :colors.grey2}}>
                            <Text style={styles.deliveryText}>Delivery</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            setDelivery(false)
                        }}
                    >
                        <View style={{...styles.deliveryButton,backgroundColor:delivery?colors.grey2 :colors.buttons}}>
                            <Text style={styles.deliveryText}>Pick Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
                <View style={styles.filterView}>
                    <View style={styles.addresView}>
                        <View style={{flexDirection:"row", alignItems:"center", paddingLeft:10}}>
                            <Icon
                                name="map-marker"
                                type="material-community"
                                color={colors.grey5}
                                size={26}
                            />
                            <Text style={{marginLeft:5}}>Tv74 Flor del campo</Text>
                        </View>
                        <View style={styles.clockView}>
                            <Icon
                                name="clock-time-four"
                                type="material-community"
                                color={colors.grey5}
                                size={26}
                            />
                            <Text style={{marginLeft:5}}>Now</Text>
                        </View>
                    </View>
                    <View>
                        <Icon
                            name="tune"
                            type="material-community"
                            color={colors.grey5}
                            size={26}
                        />
                    </View>
                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>
                        Categories
                    </Text>
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        data={filterData}
                        keyExtractor={(item) => item.id}
                        extraData={indexCheck}
                        renderItem={({item, index})=>(
                            <Pressable
                            onPress={()=>{setindexCheck(item.id)}}
                            >
                                <View style={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                                    <Image
                                        source={item.image}
                                        style={{height:60, width:60, borderRadius:30}}
                                    />
                                    <View>
                                        <Text style={indexCheck === item.id ? {...styles.smallCardTextSelected}:
                                            {...styles.smallCardText}}>{item.name}</Text>
                                    </View>
                                </View>
                            </Pressable>

                        )}
                    />
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>
                        Free delivery now
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    deliveryButton:{
        paddingHorizontal:20,
        borderRadius:15,
        paddingVertical:5,
    },
    deliveryText:{
        marginLeft:5,
        fontSize:16,
        fontWeight:"bold"
    },
    filterView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        marginHorizontal:10,
        marginVertical:10
    },
    clockView:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:20,
        backgroundColor:colors.headersText,
        borderRadius:15,
        paddingHorizontal: 5,
        marginRight:20
    },
    addresView:{
        flexDirection:"row",
        backgroundColor:colors.grey2,
        borderRadius:15,
        paddingVertical:3,
        justifyContent:"space-between",
        paddingHorizontal:20
    },
    headerText:{
        color:colors.grey4,
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:10
    },
    headerTextView:{
        backgroundColor:colors.grey2,
        paddingVertical:3,
    },
    smallCard:{
        borderRadius:30,
        backgroundColor:colors.grey2,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:80,
        margin:10,
        height:100
    },
    smallCardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:80,
        margin:10,
        height:100
    },
    smallCardTextSelected:{
        fontWeight:"bold",
        color:colors.headersText
    },
    smallCardText:{
        fontWeight:"bold",
        color:colors.grey4
    },
})