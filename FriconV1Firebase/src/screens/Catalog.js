import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions, ScrollView, StatusBar, TouchableHighlight } from "react-native";
import Header from "../components/Header"

import { db } from "../config"

let itemsRef = db.ref('/items');

export default class Catalog extends Component {

    state = {
        items: [],
        typeId: ""
    };

    componentDidMount() {
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        });

        try {
            if (this.props.navigation.getParam("type") != null) {
                this.setState({ typeId: this.props.navigation.getParam("type") });
            }
        } catch (error) {
            //Página de erro
        }
        
    }

    render() {
        //console.log(this.state.typeId);
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Header />
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.viewContainer}>
                        {this.state.items.map((item, key) => {
                            if (item.typeId == this.state.typeId) {
                                return (
                                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Product', {item})} key={item.id}>
                                        <View style={styles.box}>
                                            <Image source={{ uri: item.images.profilePic }} style={styles.icons} />
                                            <Text>{item.name}</Text>
                                        </View>
                                    </TouchableHighlight>
                                );
                            }
                        })}
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
        width: 150
    }
})