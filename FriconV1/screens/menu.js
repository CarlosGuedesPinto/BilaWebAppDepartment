import React from "react";
import {StyleSheet, View, Image, Text, Dimensions, ImageBackground, StatusBar} from "react-native";
import Header from "../components/header"

export default function Home() {

    const dimensions = Dimensions.get('window');
    const imageWidth = dimensions.width;
 
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Header/>
            <ImageBackground source={require('../assets/supermercados.png')} style={{flex:1, width: imageWidth, marginBottom: 10}}>
                <View style={styles.view}>
                    <Image source={require('../assets/iconSupermercados.png')} style={styles.icons}/>
                    <Text style={styles.text}>SUPERMERCADOS</Text>
                </View>
            </ImageBackground>
            <ImageBackground source={require('../assets/bebidas.png')} style={{flex:1, width: imageWidth, marginBottom: 10 }} >
                <View style={styles.view}>
                    <Image source={require('../assets/iconBebidas.png')} style={styles.icons}/>
                    <Text style={styles.text}>BEBIDAS</Text>
                </View>
            </ImageBackground>
            <ImageBackground source={require('../assets/congelados.png')} style={{flex:1, width: imageWidth }} >
                <View style={styles.view}>
                    <Image source={require('../assets/iconCongelados.png')} style={styles.icons}/>
                    <Text style={styles.text}>CONGELADOS</Text>
                </View>
            </ImageBackground>
        </View>
    )
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
        height:70.76, 
        width: 61.41
    }
})