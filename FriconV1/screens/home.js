import React from "react";
import {StyleSheet, View, Image, Text, Dimensions, ScrollView, StatusBar} from "react-native";
import Header from "../components/header"

export default function Home() {

    const dimensions = Dimensions.get('window');
    const imageWidth = dimensions.width;

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Header/>
            <Image source={require('../assets/CatálogoProduto.png')} style={{flex:1, width: imageWidth }} />
            <Image source={require('../assets/PontosVenda.png')} style={{flex:1, width: imageWidth }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})