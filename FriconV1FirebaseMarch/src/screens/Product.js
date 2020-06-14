import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions, ScrollView, StatusBar, Linking, TouchableHighlight, TouchableOpacity } from "react-native";
import Header from "../components/Header"
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { APIGoogle } from '../configGoogleKey'
import YouTube from 'react-native-youtube';
import { SliderBox } from "react-native-image-slider-box";

export default class Product extends Component {

    state = {
        currentItem: this.props.navigation.getParam("item"),
        photos: [],
        hasPhotos: false,
        hasSpecs: false,
        hasPresVideo: false,
        hasRender: false,
        hasTC: false,
        hasDesc: false
    };

    UNSAFE_componentWillMount() {
        try {
            if (this.state.currentItem.images.photos != "0") {
                this.state.hasPhotos = true;

                let allPhotos = [];
                allPhotos.push(this.state.currentItem.images.profilePic);
                this.state.currentItem.images.photos.map((item, i) => {
                    allPhotos.push(item);
                });
                this.setState({ photos: allPhotos})
    
            }

            if (this.state.currentItem.description.specs != "0") {
                this.state.hasSpecs = true;
            }

            if (this.state.currentItem.videoId != "0") {
                this.state.hasPresVideo = true;
            }

            if (this.state.currentItem.render != "0") {
                this.state.hasRender = true;
            }

            if (this.state.currentItem.technicalCard != "0") {
                this.state.hasTC = true;
            }

            if (this.state.currentItem.description.description != "0") {
                this.state.hasDesc = true;
            }
        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Header />
                <ScrollView>
                    {this.state.hasPhotos
                        ? <SliderBox images={this.state.photos} style={styles.icons} />
                        : <View style={styles.box}><Image source={{ uri: this.state.currentItem.images.profilePic }} style={styles.icons} /></View>}

                    <Text style={styles.title}>{this.state.currentItem.name}</Text>
                    {this.state.hasDesc
                        ? <Text style={styles.description}>{this.state.currentItem.description.description}</Text>
                        : <Text></Text>}
                    {this.state.hasSpecs
                        ? <Table style={styles.table} borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                            <Rows data={this.state.currentItem.description.specs} textStyle={styles.text} />
                        </Table>
                        : <Text></Text>}
                    {this.state.hasTC
                        ? <TouchableOpacity>
                            <Text style={styles.button} onPress={() => {
                                //on clicking we are going to open the URL using Linking
                                Linking.openURL(this.state.currentItem.technicalCard);
                            }}> View Technical Card</Text>
                        </TouchableOpacity>
                        : <Text></Text>}
                    {this.state.hasPresVideo
                        ? <YouTube
                            videoId={this.state.currentItem.videoId} // The YouTube video ID
                            onReady={e => this.setState({ isReady: true })}
                            onChangeState={e => this.setState({ status: e.state })}
                            onChangeQuality={e => this.setState({ quality: e.quality })}
                            onError={e => this.setState({ error: e.error })}
                            style={styles.video}
                            apiKey={APIGoogle}
                        />
                        : <Text></Text>}
                    {this.state.hasRender
                        ? <TouchableOpacity>
                            <Text style={styles.button}>3D</Text>
                        </TouchableOpacity>
                        : <Text></Text>}


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
        width: Dimensions.get("window").width
    },

    video: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'stretch',
        height: 200
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

    table: {
        marginLeft: 20,
        marginRight: 20
    }
})