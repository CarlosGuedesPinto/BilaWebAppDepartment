import React from "react";
import {StyleSheet, View, Image, Text, Dimensions, ScrollView, StatusBar, TouchableOpacity} from "react-native";
import Header from "../components/header"

export default function Home() {
 
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Header/>
            <ScrollView>
                <View style={styles.box}><Image source={require('../assets/arcas/COOLCELL.png')} style={styles.icons}/></View>
                <Text style={styles.title}>Titulo</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar feugiat ex et sollicitudin. Aliquam tincidunt, justo rhoncus cursus eleifend, ante tortor mattis metus, et commodo elit sem et erat. Mauris at est sit amet ante sollicitudin mollis nec in nibh. Ut sodales libero in laoreet pretium. Sed hendrerit arcu ac porttitor porttitor. Aenean eget auctor metus, sed feugiat lacus. Vestibulum mollis urna vel lectus imperdiet tempor. Cras sapien velit, mollis id ex sed, aliquam dignissim lacus.</Text>
                <TouchableOpacity>
                    <Text style={styles.button}>3D</Text>
                </TouchableOpacity>
            </ScrollView>
                 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20
    },


    box: {
        marginLeft: 10,
        marginRight: 10,
        width: Dimensions.get("window").width -20,
        height: Dimensions.get("window").width - 70,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E4E5EA"
    },

    icons: {
        height:288, 
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
        marginRight:20,
        fontSize: 20,
        
    },

    button: {
       width:  Dimensions.get("window").width/2 -20,
       height: 45,
       marginTop: 30,
       marginLeft: 20,
       paddingTop:8,
       backgroundColor: "#E4E5EA",
       justifyContent: "center",
       textAlign: "center",
       fontSize: 20,
       fontWeight: "bold",
       backgroundColor: "#002169",
       color: "white"  
    }
})