/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};

export default class App extends Component<Props> {
  componentDidMount() {
    console.log(navigator.geolocation);
    navigator.geolocation.watchPosition(position => {
      console.log(position);
      console.log(position.coords);
      console.log(position.coords.latitude);
    });
  }
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        region={{
          latitude: 36.6371168,
          longitude: 127.46859689999997,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: 36.6371168,
            longitude: 127.46859689999997
          }}
        />
        <Marker
          coordinate={{
            latitude: 36.6371291669,
            longitude: 127.46911755916753
          }}
          pinColor="#000"
        />
      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
