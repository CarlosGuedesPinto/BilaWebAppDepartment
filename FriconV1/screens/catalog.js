import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions, ScrollView, StatusBar, TouchableHighlight } from "react-native";
import Header from "../components/Header"

export default class Catalog extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Header />
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.viewContainer}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Product')} >
                            <View style={styles.box}>
                                <Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons} />
                            </View>
                        </TouchableHighlight>
                        <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons} /></View>
                        <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons} /></View>
                        <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons} /></View>
                        <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons} /></View>
                        <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons} /></View>
                        <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons} /></View>
                        <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons} /></View>
                        <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons} /></View>
                        <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons} /></View>
                    </View>
                </ScrollView>
            </View>
        )
    }
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
        width: Dimensions.get("window").width / 2 - 9,
        height: Dimensions.get("window").width / 2 - 9,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E4E5EA"
    },

    icons: {
        height: 144,
        width: 60
    }
})