import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'


export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>

                <Image source={require('../assets/Logo.png')} style={{ width: 150, height: 44 }} />

                <MaterialIcons name="menu" size={40} color={"#002169"} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 45,
        backgroundColor: 'white'
    },
})