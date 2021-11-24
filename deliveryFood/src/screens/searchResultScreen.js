import React from 'react'
import {StyleSheet, Text, View, Dimensions, FlatList} from "react-native";
import SearchResultCard from "../components/searchResultCard";
import {restaurantData} from "../global/data";
import {colors} from "../global/styles";


const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.listHeader}>{restaurantData.length} Result for {route.params.item}</Text>
            </View>

            <SearchResultCard
                screenWidth = {SCREEN_WIDTH}
                images = {restaurantData[0].images}
                averageReview ={restaurantData[0].averageReview}
                numberOfReview ={restaurantData[0].numberOfReview}
                restaurantName={restaurantData[0].restaurantName}
                farAway={restaurantData[0].farAway}
                businessAddress={restaurantData[0].businessAddress}
            />
        </View>
    )
}

export default SearchResultScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20
    },

    listHeader:{color :colors.grey4,
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:10,
        fontWeight:"bold"
    }
})