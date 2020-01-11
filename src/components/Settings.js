import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <View style={styles.boxWhite}>
            <Text style={styles.label}>USER</Text>
            <View style={styles.boxAccount}>
              <Text style={styles.value}>Logout</Text>
              <Text
                style={{
                  right: 35,
                  top: 3,
                  position: "absolute",
                  color: "#00AA13"
                }}
              >
                user01
              </Text>
              <AntDesign name="right" style={{ top: 3, color: "#00AA13" }} />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.boxWhite}>
          <Text style={styles.label}>GENERAL</Text>
          <View style={styles.boxAccount}>
            <Text style={styles.value}>Default Currency</Text>
            <Text
              style={{
                right: 35,
                top: 3,
                position: "absolute",
                color: "#00AA13"
              }}
            >
              USD
            </Text>
            <AntDesign name="right" style={{ top: 3, color: "#00AA13" }} />
          </View>
        </View>
      </View>
    );
  }
}

export const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff"
  },
  label: {
    fontSize: 16,
    color: "#00AA13",
    marginBottom: 20
  },
  boxAccount: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: width,
    left: -15,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  value: {
    color: "#00AA13",
    fontWeight: "bold"
  },
  boxWhite: { width: width, padding: 15, height: 100 }
});
