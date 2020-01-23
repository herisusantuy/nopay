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
import { CheckBox } from "react-native-elements";
import { BASE_URL } from "../general/general";
import axios from "axios";
import { connect } from "react-redux";
import { createUserRequest } from "../redux/action/users";
import Loader from "../components/Loader";

class Registrasi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDriver: false,
      isDonatur: false,
      username: "",
      full_name: "",
      address: "",
      phone: "",
      email: "",
      password: "",
      is_driver: "",
      loading: false,
      error_msg: ""
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleRole = this.handleRole.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  handleBack() {
    this.props.navigation.navigate("Login");
  }
  handleRole(role) {
    if (role == "driver") {
      this.setState({
        isDriver: !this.state.isDriver,
        isDonatur: false,
        is_driver: "driver"
      });
    } else {
      this.setState({
        isDriver: false,
        isDonatur: !this.state.isDonatur,
        is_driver: "non driver"
      });
    }
  }
  verify() {
    if (!this.state.username) {
      alert("Field Username tidak boleh kosong!");
      return false;
    }
    if (!this.state.full_name) {
      alert("Field Nama Lengkap tidak boleh kosong!");
      return false;
    }
    if (!this.state.address) {
      alert("Field Alamat tidak boleh kosong!");
      return false;
    }
    if (!this.state.phone) {
      alert("Field Handphone tidak boleh kosong!");
      return false;
    }
    if (!this.state.email) {
      alert("Field Email tidak boleh kosong!");
      return false;
    }
    if (!this.state.password) {
      alert("Field Password tidak boleh kosong!");
      return false;
    }
    if (!this.state.is_driver) {
      alert("Silahkan pilih peran Anda!");
      return false;
    }
    return true;
  }
  handleRegister() {
    if (this.verify()) {
      this.setState({ loading: true });
      let param = {
        username: this.state.username.toLowerCase(),
        full_name: this.state.full_name,
        address: this.state.address,
        phone: this.state.phone,
        email: this.state.email,
        password: this.state.password,
        is_driver: this.state.is_driver
      };
      let url = BASE_URL + "/register";
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
          if (response.status == 201) {
            alert(response.data.message);
            this.props.navigation.navigate("Login");
            this.setState({
              username: "",
              full_name: "",
              address: "",
              phone: "",
              email: "",
              password: "",
              is_driver: ""
            });
          }
        })
        .catch(error => {
          alert(error);
          this.setState({ loading: false });
        });
    }
  }
  render() {
    return !this.state.loading ? (
      <View style={styles.boxContainer}>
        <View
          style={{
            width: 160,
            height: 160,
            padding: 5,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            // borderColor: "#00AA13",
            // borderWidth: 2,
            borderRadius: 80
          }}
        >
          <Image
            style={styles.logo}
            // source={{ uri: "https://i.pravatar.cc/150?img=10" }}
            source={require("../assets/logo.png")}
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
              onChangeText={full_name => this.setState({ full_name })}
              value={this.state.full_name}
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
              onChangeText={address => this.setState({ address })}
              value={this.state.address}
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
              onChangeText={phone => this.setState({ phone })}
              value={this.state.phone}
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
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
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
            <Text
              style={{
                color: "#00AA13",
                textAlign: "center",
                marginTop: 25
              }}
            >
              Silahkan pilih peran Anda
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 5
              }}
            >
              <CheckBox
                center
                title="Driver"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={this.state.isDriver}
                containerStyle={{
                  width: 0.3 * width,
                  borderColor: "#fff",
                  backgroundColor: "#fff"
                }}
                checkedColor="#00AA13"
                textStyle={{ color: "#00AA13" }}
                onPress={() => this.handleRole("driver")}
              />
              <CheckBox
                center
                title="Donator"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={this.state.isDonatur}
                containerStyle={{
                  width: 0.3 * width,
                  borderColor: "#fff",
                  backgroundColor: "#fff"
                }}
                checkedColor="#00AA13"
                textStyle={{ color: "#00AA13" }}
                onPress={() => this.handleRole("donator")}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20
              }}
            >
              <TouchableOpacity onPress={() => this.handleRegister()}>
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
          </View>
        </ScrollView>
      </View>
    ) : (
      <Loader />
    );
  }
}

export default connect(({ users }) => ({ users }), {
  createUserRequest
})(Registrasi);

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
    paddingHorizontal: 45,
    width: 0.9 * width,
    paddingHorizontal: 5
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
    height: 40,
    backgroundColor: "#00AA13",
    borderRadius: 60,
    color: "#fff",
    textAlign: "center",
    padding: 6,
    fontSize: 16,
    fontWeight: "bold",
    width: 0.4 * width
  }
});
