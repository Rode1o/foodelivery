import React from "react"

import {View, Text, StyleSheet, StatusBar} from "react-native"
import {colors} from './src/global/styles'
import Signinscreen from "./src/screens/authScreen/signinscreen"


export default function App(){
  return(
      <View style={styles.container}>
          <StatusBar
              barStyle={"light-content"}
              backgroundColor={colors.statusbar}
          />
          <Signinscreen/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})