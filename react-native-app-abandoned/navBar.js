import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const logo = require("./images/thisone.png");

export default function NavBar() {
  return (
    <View style={{ height: 90 }}>
      <Image source={logo} style={{ width: 70, height: 70, margin: 10 }} />
    </View>
  );
}
