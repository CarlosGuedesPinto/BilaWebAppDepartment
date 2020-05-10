import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions, ImageBackground, StatusBar, TouchableHighlight } from "react-native";
import Header from "../components/Header"

import { db } from "../config"

let typesRef = db.ref('/type');

export default class Menu extends Component {

    state = {
        types: []
    };

    componentDidMount() {
        typesRef.on('value', snapshot => {
            let data = snapshot.val();
            let types = Object.values(data);
            this.setState({ types });
        });
    }

    render() {
        const dimensions = Dimensions.get('window');
        const imageWidth = dimensions.width;

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Header />
                {this.state.types.map((item) => {
                    //console.log(item);
                    return (
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Catalog', {type : item.id })} style={{ flex: 1 }} key={item.id}>
                            <ImageBackground source={require('../../assets/supermercados.png')} style={{ flex: 1, width: imageWidth, marginBottom: 10 }}>
                                <View style={styles.view}>
                                    <Image source={{ uri: item.icon }} style={styles.icons} />
                                    <Text style={styles.text}>{item.type}</Text>
                                </View>
                            </ImageBackground>
                        </TouchableHighlight>
                    );
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    text: {
        marginTop: 15,
        color: "#A4A9CB",
        fontWeight: "bold",
        backgroundColor: "white",
        borderRadius: 5,
        padding: 5,

    },

    view: {
        alignItems: "center",
        marginTop: 55
    },

    icons: {
        height: 70.76,
        width: 61.41
    }
})