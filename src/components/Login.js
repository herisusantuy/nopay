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
import logo from "../assets/bg_login.png";
import SplashScreen from "react-native-splash-screen";
import { BASE_URL } from "../general/general";
import axios from "axios";
import Loader from "../components/Loader";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegistrasi = this.handleRegistrasi.bind(this);
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  verify() {
    if (!this.state.username) {
      alert("Field Username tidak boleh kosong!");
      return false;
    }
    if (!this.state.password) {
      alert("Field Password tidak boleh kosong!");
      return false;
    }
    return true;
  }
  handleLogin() {
    if (this.verify()) {
      this.setState({ loading: true });
      let param = {
        username: this.state.username,
        password: this.state.password
      };
      let url = BASE_URL + "/login";
      axios({
        method: "POST",
        url: url,
        data: param,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          this.setState({ loading: false });
          if (response.status == 200) {
            if (response.data.role == "driver") {
              this.props.navigation.navigate("HomeDriver");
            } else {
              this.props.navigation.navigate("HomeNonDriver");
            }
            this.setState({
              username: "",
              password: ""
            });
          }
        })
        .catch(error => {
          alert(error);
          this.setState({ loading: false });
        });
    }
  }
  handleRegistrasi() {
    this.props.navigation.navigate("Registrasi");
  }
  render() {
    console.log(this.props, "PROPS");
    return !this.state.loading ? (
      <View style={styles.boxContainer} showsVerticalScrollIndicator={false}>
        <ImageBackground style={styles.logo} source={logo} />
        <ScrollView style={styles.container}>
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
            <Text style={styles.button}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleRegistrasi()}>
            <Text style={{ textAlign: "center", marginTop: 10 }}>
              Silahkan melakukan{" "}
              <Text
                style={{
                  color: "#00AA13",
                  textDecorationLine: "underline",
                  fontWeight: "bold"
                }}
              >
                Registrasi
              </Text>{" "}
              jika Anda belum mempunyai account.
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    ) : (
      <Loader />
    );
  }
}

export const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: "#fff",
    flex: 1
  },
  container: {
    paddingHorizontal: 45,
    top: 0.5 * height,
    position: "absolute",
    width: width
    // marginTop: 30
  },
  logo: {
    alignItems: "center",
    resizeMode: "contain",
    // marginBottom: -35,
    width: width,
    height: height
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
