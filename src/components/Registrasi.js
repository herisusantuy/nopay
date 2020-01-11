import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  ListView
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Sae } from "react-native-textinput-effects";
import logo from "../assets/bg_registrasi.png";
import SplashScreen from "react-native-splash-screen";

export default class Registrasi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  handleLogin() {
    // this.props.navigation.navigate("Home");
    if (this.state.username === "user01" && this.state.password === "123") {
      this.props.navigation.navigate("Home");
    } else {
      alert(`Use username "user01" & password "123"`);
      this.setState({
        username: "",
        password: ""
      });
    }
  }
  handleBack() {
    this.props.navigation.navigate("Login");
  }
  render() {
    return (
      <View style={styles.boxContainer}>
        <View
          style={{
            width: 160,
            height: 160,
            padding: 5,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            borderColor: "#00AA13",
            borderWidth: 2,
            borderRadius: 80
          }}
        >
          <Image
            style={styles.logo}
            source={{ uri: "https://i.pravatar.cc/150?u=a042581f4e29026704d" }}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Sae
              inputStyle={styles.input}
              labelStyle={styles.label}
              label={"Username"}
              iconClass={FontAwesomeIcon}
              iconColor={"#00AA13"}
              iconName={"pencil-square-o"}
              inputPadding={16}
              labelHeight={24}
              borderHeight={2}
              borderColor={"blue"}
              autoCapitalize={"none"}
              autoCorrect={false}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
            <Sae
              inputStyle={styles.input}
              labelStyle={styles.label}
              label={"Nama Lengkap"}
              iconClass={FontAwesomeIcon}
              iconColor={"#00AA13"}
              iconName={"pencil-square-o"}
              inputPadding={16}
              labelHeight={24}
              borderHeight={2}
              borderColor={"blue"}
              autoCapitalize={"none"}
              autoCorrect={false}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
            <Sae
              inputStyle={styles.input}
              labelStyle={styles.label}
              label={"Alamat"}
              iconClass={FontAwesomeIcon}
              iconColor={"#00AA13"}
              iconName={"pencil-square-o"}
              inputPadding={16}
              labelHeight={24}
              borderHeight={2}
              borderColor={"blue"}
              autoCapitalize={"none"}
              autoCorrect={false}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
            <Sae
              inputStyle={styles.input}
              labelStyle={styles.label}
              label={"No HP"}
              iconClass={FontAwesomeIcon}
              iconColor={"#00AA13"}
              iconName={"pencil-square-o"}
              inputPadding={16}
              labelHeight={24}
              borderHeight={2}
              borderColor={"blue"}
              autoCapitalize={"none"}
              autoCorrect={false}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
            <Sae
              inputStyle={styles.input}
              labelStyle={styles.label}
              label={"Role"}
              iconClass={FontAwesomeIcon}
              iconColor={"#00AA13"}
              iconName={"pencil-square-o"}
              inputPadding={16}
              labelHeight={24}
              borderHeight={2}
              borderColor={"blue"}
              autoCapitalize={"none"}
              autoCorrect={false}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
            <Sae
              inputStyle={styles.input}
              labelStyle={styles.label}
              label={"Email"}
              iconClass={FontAwesomeIcon}
              iconColor={"#00AA13"}
              iconName={"pencil-square-o"}
              inputPadding={16}
              labelHeight={24}
              borderHeight={2}
              borderColor={"blue"}
              autoCapitalize={"none"}
              autoCorrect={false}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
            <Sae
              inputStyle={styles.input}
              labelStyle={styles.label}
              label={"Password"}
              iconClass={FontAwesomeIcon}
              iconColor={"#00AA13"}
              iconName={"pencil-square-o"}
              inputPadding={16}
              labelHeight={24}
              borderHeight={2}
              autoCapitalize={"none"}
              autoCorrect={false}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              secureTextEntry={true}
            />

            <TouchableOpacity onPress={() => this.handleLogin()}>
              <Text style={styles.button}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleBack()}>
              <Text style={{ textAlign: "center", marginTop: 10 }}>
                Kembali ke{" "}
                <Text
                  style={{
                    color: "#00AA13",
                    textDecorationLine: "underline",
                    fontWeight: "bold"
                  }}
                >
                  Login
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    height: height
  },
  container: {
    // flexGrow: 1,
    paddingHorizontal: 45,
    // top: 0.3 * height,
    // position: "absolute",
    width: width
    // marginTop: -50
  },
  logo: {
    alignItems: "center",
    resizeMode: "contain",
    // marginBottom: -35,
    width: 150,
    height: 150,
    marginVertical: 20,
    borderRadius: 60
  },
  label: {
    color: "#00AA13",
    fontWeight: "normal",
    fontSize: 8,
    paddingBottom: 5
  },
  input: {
    color: "#00AA13",
    borderBottomColor: "#00AA13",
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    height: 50,
    fontSize: 14
  },
  button: {
    marginTop: 40,
    height: 40,
    alignItems: "center",
    backgroundColor: "#00AA13",
    borderRadius: 60,
    color: "#fff",
    textAlign: "center",
    padding: 6,
    fontSize: 16,
    fontWeight: "bold",
    width: 0.4 * width,
    left: 0.18 * width
  }
});
