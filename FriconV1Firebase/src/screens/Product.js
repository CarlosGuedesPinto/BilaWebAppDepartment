import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions, ScrollView, StatusBar, TouchableHighlight, TouchableOpacity } from "react-native";
import Header from "../components/Header"

import { SliderBox } from "react-native-image-slider-box";

export default class Product extends Component {

    state = {
        currentItem: this.props.navigation.getParam("item")
    };

    render() {
        console.log(this.state.currentItem)
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Header />
                <ScrollView>
                    {/* <SliderBox images={this.state.currentItem.images.photos} style={styles.icons}/> */}
                    <View style={styles.box}><Image source={{ uri: this.state.currentItem.images.profilePic }} style={styles.icons} /></View>
                    <Text style={styles.title}>{this.state.currentItem.name}</Text>
                    <Text style={styles.description}>{this.state.currentItem.description.description}</Text>
                    <TouchableOpacity>
                        <Text style={styles.button}>3D</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20
    },


    box: {
        marginLeft: 10,
        marginRight: 10,
        width: Dimensions.get("window").width - 20,
        height: Dimensions.get("window").width - 70,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E4E5EA"
    },

    icons: {
        height: 288,
        width: 120
    },

    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 25,
        fontWeight: "bold"
    },

    description: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 20,

    },

    button: {
        width: Dimensions.get("window").width / 2 - 20,
        height: 45,
        marginTop: 30,
        marginLeft: 20,
        paddingTop: 8,
        backgroundColor: "#E4E5EA",
        justifyContent: "center",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "#002169",
        color: "white"
    }
})