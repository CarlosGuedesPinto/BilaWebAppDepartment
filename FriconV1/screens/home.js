import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions, ScrollView, StatusBar } from "react-native";
import Header from "../components/Header"
import { TouchableHighlight } from "react-native-gesture-handler";

export default class Home extends Component {
    render() {
        const dimensions = Dimensions.get('window');
        const imageWidth = dimensions.width;

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Header />
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Menu')}>
                    <Image source={require('../assets/CatalogoProduto.png')} style={{ width: imageWidth }} />
                </TouchableHighlight>
                {/* <Image source={require('../assets/PontosVenda.png')} style={{ flex: 1, width: imageWidth }} /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})