import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
let twitter = require("./images/twitter.png");
let search = require("./images/searchIcon.png");

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Image
          source={search}
          style={{ width: 20, height: 20, marginLeft: 280, marginTop: 5 }}
        />
      </View>
      <View style={styles.div}>
        <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
          Latest Events
        </Text>
        <Image
          source={require("./images/brumJs.png")}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "contain",
            margin: 10,
          }}
        />
      </View>
      <View style={styles.div2}>
        <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
          Tweets
        </Text>
        <Image
          source={twitter}
          style={{ height: 200, width: 280, marginLeft: 15 }}
        />
      </View>
      {/* <Button
        title="Go to profile"
        onPress={() => navigation.navigate("Profile")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#64A4C6",
    // alignItems: "center",
    // justifyContent: "center",
  },
  div: {
    position: "absolute",
    flex: 1,
    backgroundColor: "#fff",
    width: 310,
    height: 255,
    left: 55,
    top: 65,
    borderRadius: 15,
    textAlign: "center",
  },
  div2: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 15,
    width: 310,
    height: 235,
    left: 55,
    top: 330,
  },
  search: {
    position: "absolute",
    width: 310,
    height: 33,
    left: 55,
    top: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
});
