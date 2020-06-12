import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions, ScrollView, StatusBar, TouchableHighlight, TouchableOpacity } from "react-native";
import Header from "../components/Header";

import {
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroBox,
    ViroMaterials,
    Viro3DObject,
    ViroAmbientLight,
    ViroSpotLight,
    ViroARPlaneSelector,
    ViroNode,
    ViroAnimations,
  } from 'react-viro';

export default class ThreeDViewer extends Component {
    constructor() {
        super();

        // Set initial state here
        this.state = {
            text: "Initializing AR..."
        };

        // bind 'this' to functions
        this._onInitialized = this._onInitialized.bind(this);
    }

    render() {

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Header />
                <ViroARScene onTrackingUpdated={this._onInitialized} >
                    <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
                    <ViroBox position={[0, -.5, -1]} scale={[.3, .3, .1]} animation={{ name: "rotate", run: true, loop: true }} />
                    <ViroAmbientLight color={"#aaaaaa"} />
                    <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]}
                        position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
                    <ViroNode position={[0, -1, 0]} dragType="FixedToWorld" onDrag={() => { }} >
                        <Viro3DObject
                            source={require('././res/emoji_smile/emoji_smile.vrx')}
                            resources={[require('././res/emoji_smile/emoji_smile_diffuse.png'),
                            require('././res/emoji_smile/emoji_smile_normal.png'),
                            require('././res/emoji_smile/emoji_smile_specular.png')]}
                            position={[0, .5, 0]}
                            scale={[.2, .2, .2]}
                            type="VRX" />
                    </ViroNode>
                </ViroARScene>
            </View>
        )
    }

    _onInitialized(state, reason) {
        if (state == ViroConstants.TRACKING_NORMAL) {
            this.setState({
                text: "Hello World!"
            });
        } else if (state == ViroConstants.TRACKING_NONE) {
            // Handle loss of tracking
        }
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
    },

    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    }
})

ViroAnimations.registerAnimations({
    rotate: {
        properties: {
            rotateY: "+=90"
        },
        duration: 250, //.25 seconds
    },
});