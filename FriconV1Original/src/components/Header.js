import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'

class Header extends Component {

    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <Image source={require('../../assets/Logo.png')} style={{ width: 150, height: 44 }} />
                </TouchableOpacity>
                {this.displayArrow()}
                <MaterialIcons name="menu" size={40} color={"#002169"} />
            </View>
        )
    }

    displayArrow() {
        if (this.props.navigation.state.routeName != 'Home') {
            return <TouchableOpacity onPress={() => this.props.navigation.goBack()}><MaterialIcons name="arrow-back" size={40} color={"#002169"} /></TouchableOpacity>;
        } else {
            return ;
        }
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
    }
})

export default withNavigation(Header);