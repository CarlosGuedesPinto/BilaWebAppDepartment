import React from "react";
import {StyleSheet, View, Image, Text, Dimensions, ScrollView, StatusBar} from "react-native";
import {MaterialIcons} from '@expo/vector-icons'

export default function Home() {

    const dimensions = Dimensions.get('window');
    const imageHeight =dimensions.height / 2
    const imageWidth = dimensions.width;
   
    console.log (imageHeight)
    console.log(imageWidth)
   
    return (
       
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style={styles.header}>
                <Image source={require('../assets/Logo.png')} style={{width: 150, height: 44}} />
                <MaterialIcons name="menu" size={40} color={"#002169"}/>
            </View> 
            <Image source={require('../assets/CatálogoProduto.png')} style={{flex:1, width: imageWidth }} />
            <Image source={require('../assets/PontosVenda.png')} style={{flex:1, width: imageWidth }} />
        </View>
      
       
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
     
       
      
    },

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