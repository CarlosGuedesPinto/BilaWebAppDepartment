import React from "react";
import {StyleSheet, View, Image, Text, Dimensions, ScrollView, StatusBar} from "react-native";
import Header from "../components/header"

export default function Home() {
 
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Header/>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.viewContainer}>
                    <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons}/></View>
                    <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons}/></View>
                    <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons}/></View>
                    <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons}/></View>
                    <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons}/></View>
                    <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons}/></View>
                    <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons}/></View>
                    <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons}/></View>
                    <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons}/></View>
                    <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons}/></View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    scrollContainer: {
        flex: 1,
    },

    viewContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 2
    },

    box: {
      margin: 3,
      width: Dimensions.get("window").width/2 -9,
      height: Dimensions.get("window").width/2 -9,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#E4E5EA"
    },

    icons: {
        height:144, 
        width: 60
    }
})