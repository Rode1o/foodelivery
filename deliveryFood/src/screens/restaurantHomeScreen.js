import React from "react"
import {View, Text, StyleSheet} from "react-native";
import RestaurantHeader from "../components/restaurantHeader";

const RestaurantHomeScreen = ({navigation, route}) =>{

    const {id, restaurant} = route.params

    return (
        <View>
          <RestaurantHeader
              id ={id}
              navigation={navigation}
          />
        </View>
    )
}

export default RestaurantHomeScreen

const styles = StyleSheet.create({})