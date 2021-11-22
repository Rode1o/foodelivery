import React, {useState, useRef} from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Modal,
    TextInput,
    FlatList,
    TouchableOpacity, Keyboard
} from "react-native";

import * as Animatable from "react-native-animatable";
import {useNavigation} from "@react-navigation/native";
import {colors} from "../global/styles";
import {Icon} from "react-native-elements";
import {filterData} from "../global/data";
import filter from "lodash/filter"

export default function SearchComponent(){
    const navigation = useNavigation();
    const [data, setData] = useState([...filterData])
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFocussed, setTextInputFocussed] = useState(true)
    const textInput = useRef(0)

    const contains = ({name}, query)=>{
        if(name.includes(query)){
            return true
        }
        return false
    }

    const handleSearch = text =>{
        const dataS = filter(filterData, userSearch =>{
            return contains(userSearch, text)
        })

        setData([...dataS])
    }


    return(
        <View style={{alignItems:"center"}}>
            <TouchableWithoutFeedback
                onPress={()=>{
                    setModalVisible(true)
                }}
            >
                <View style={styles.searchArea}>
                    <Icon
                        name="search"
                        style={styles.searchIcon}
                        type="material"
                        iconStyle={{marginLeft:5}}
                        size={32}
                    />
                    <Text style={{fontSize:15}}>What are you looking for ?</Text>
                </View>
            </TouchableWithoutFeedback>

            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
            >
                <View style={styles.modal}>
                    <View style={styles.view1}>
                        <View style={styles.textInput}>
                            <Animatable.View
                                animation={textInputFocussed ? "fadeInRight" : "fadeInLeft"}
                                duration={400}
                            >
                                <Icon
                                    name={textInputFocussed ? "arrow-back" : "search"}
                                    onPress={()=>{
                                        if(textInputFocussed)
                                            setModalVisible(false)
                                        setTextInputFocussed(true)
                                    }}
                                    style={styles.icon2}
                                    type="material"
                                    iconStyle={{marginRight:5}}
                                />
                            </Animatable.View>
                            <TextInput
                                style={{width:"90%"}}
                                placeholder=""
                                autoFocus={false}
                                ref = {textInput}

                                onFocus={()=>{
                                    setTextInputFocussed(true)
                                }}
                                onBlur={()=>{
                                    setTextInputFocussed(false)
                                }}

                                onChangeText={handleSearch}
                            />
                            <Animatable.View
                                animation={textInputFocussed ? "fadeInLeft" : ""}
                                duration={400}
                            >
                                <Icon
                                    name={textInputFocussed ? "cancel" : null}
                                    iconStyle={{color:colors.grey4}}
                                    type="material"
                                    style={{marginRight:-10}}
                                    onPress={()=>{
                                        textInput.current.clear()
                                        //handleSearch()
                                    }}
                                />
                            </Animatable.View>
                        </View>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={({item})=>(
                            <TouchableOpacity
                                onPress={()=>{
                                    Keyboard.dismiss
                                    navigation.navigate("RestaurantSearchScreen", {item:item.name})
                                    setModalVisible(false)
                                    setTextInputFocussed(true)
                                }}
                            >
                                <View style={styles.view2}>
                                    <Text style={{color:colors.grey4, fontSize:12}}>{item.name}</Text>
                                </View>

                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text1:{
        color:colors.grey4,
        fontSize:16
    },
    textInput:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:0,
        borderColor:"#86939e",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10
    },
    searchArea:{
        marginTop:10,
        width:"94%",
        height:50,
        backgroundColor:colors.grey2,
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.grey2,
        flexDirection:"row",
        alignItems:"center"
    },

    searchIcon:{
        fontSize:24,
        padding:5,
        color:colors.grey4
    },

    view1:{
        height:70,
        justifyContent:"center",
        paddingHorizontal:10,
    },

    view2:{
      flexDirection:"row",
      padding:15,
      alignItems:"center"
    },

    icon2:{
        fontSize:24,
        padding:5,
        color:colors.grey4
    },

    modal:{
        flex:1
    }
})