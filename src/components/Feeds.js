import React, { Component, useState } from "react";
import {
  Text,
  View,
  Button,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  TextInput
} from "react-native";
import axios from "axios";
import moment from "moment";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/AntDesign";
import Loader from "../components/Loader";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Sae } from "react-native-textinput-effects";
import ModalDropdown from "react-native-modal-dropdown";
import numeral from "numeral";
import Modal from "react-native-modalbox";
import AppLink from "react-native-app-link";
import gojek from "../assets/gopay.png";
import ovo from "../assets/ovo.png";

const initialLayout = { width: Dimensions.get("window").width };

const menu = ["Mie", "Nasi", "Minuman"];
const money = [
  {
    nominal: 500,
    isSelected: false
  },
  {
    nominal: 1000,
    isSelected: false
  },
  {
    nominal: 5000,
    isSelected: false
  },
  {
    nominal: 10000,
    isSelected: false
  },
  {
    nominal: 20000,
    isSelected: false
  },
  {
    nominal: 50000,
    isSelected: false
  },
  {
    nominal: 100000,
    isSelected: false
  }
];
export default function Feeds() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Uang" },
    { key: "second", title: "Makanan" }
  ]);
  const [listMoney, setListMoney] = React.useState(money);
  const [total, setTotal] = React.useState(0);
  const [message, useMessage] = React.useState("");
  const [modalVisible, useModalVisible] = React.useState(false);
  const [makanan, useMakanan] = React.useState("");
  const [jumlah, useJumlah] = React.useState("");
  const [underName, useUnderName] = React.useState("");

  const handleSelectMoney = i => {
    listMoney[i].isSelected = !listMoney[i].isSelected;
    let newList = listMoney.map(list => {
      if (listMoney[i].nominal !== list.nominal && list.isSelected == true) {
        list.isSelected = false;
      }
      return list;
    });
    setListMoney([...newList]);
    let newTotal = listMoney[i].nominal;
    setTotal(newTotal);
  };

  handleDonateOVO = () => {
    let url = "https://play.google.com/store/apps/details?id=ovo.id&hl=in";
    AppLink.maybeOpenURL(url, {
      appName: "OVO",
      // appStoreId,
      // appStoreLocale,
      playStoreId: "ovo.id"
    })
      .then(() => {
        // do stuff
        console.log("success");
        useModalVisible(false);
      })
      .catch(err => {
        // handle error
        console.log("error");
      });
  };
  handleDonateGoPay = () => {
    let url =
      "https://play.google.com/store/apps/details?id=com.gojek.app&hl=in";
    AppLink.openInStore({
      appName: "Gojek",
      appStoreId,
      appStoreLocale,
      playStoreId: "com.gojek.app"
    })
      .then(() => {
        // do stuff
        console.log("success");
        useModalVisible(false);
      })
      .catch(err => {
        // handle error
        console.log("error");
      });
  };

  const FirstRoute = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Modal
          style={{
            width: width - 20,
            height: 300,
            justifyContent: "space-between",
            // alignItems: "center",
            padding: 15,
            borderRadius: 10
          }}
          position={"center"}
          isOpen={modalVisible}
        >
          <View
            style={{
              padding: 15,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                color: "black",
                marginVertical: 5
              }}
            >
              Total donasi yang akan diberikan:{" "}
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "black",
                marginBottom: 5
              }}
            >
              Rp {numeral(total).format("0,0")},-
            </Text>
            <Text
              style={{
                fontSize: 14,
                // fontWeight: "bold",
                textAlign: "center",
                color: "black",
                marginVertical: 5
              }}
            >
              Silahkan lakukan pembayaran dengan menyertakan ID transaksi Anda
              (ID:001) dibagian konfrimasi pembayaran ke nomor Ovo atau Gopay
              berikut:{" "}
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "black",
                marginBottom: 10
              }}
            >
              0856 5579 8471
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10
              }}
            >
              <TouchableOpacity onPress={() => handleDonateOVO()}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 10,
                    marginVertical: 10,
                    width: 160,
                    height: 40,
                    borderWidth: 1,
                    borderColor: "#00AA13",
                    padding: 5,
                    borderRadius: 10
                  }}
                >
                  <Image
                    source={require("../assets/ovo.png")}
                    style={{
                      width: 150,
                      height: 30,
                      marginVertical: 10,
                      alignItems: "center",
                      justifyContent: "center",
                      resizeMode: "contain"
                    }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDonateGoPay()}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 10,
                    marginVertical: 10,
                    width: 160,
                    height: 40,
                    borderWidth: 1,
                    borderColor: "#00AA13",
                    padding: 5,
                    borderRadius: 10
                  }}
                >
                  <Image
                    source={require("../assets/gopay.png")}
                    style={{
                      width: 150,
                      height: 30,
                      marginVertical: 10,
                      alignItems: "center",
                      justifyContent: "center",
                      resizeMode: "contain"
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View
          style={[
            styles.scene,
            {
              backgroundColor: "white",
              flexDirection: "row",
              flexWrap: "wrap",
              padding: 10,
              justifyContent: "center"
            }
          ]}
        >
          {listMoney.map((money, i) => {
            return (
              <TouchableOpacity onPress={() => handleSelectMoney(i)}>
                <View
                  style={{
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "#00AA13",
                    backgroundColor: money.isSelected ? "#00AA13" : "white",
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    alignItems: "center",
                    width: 0.36 * width,
                    margin: 10
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: money.isSelected ? "white" : "#00AA13"
                    }}
                  >
                    Rp {numeral(money.nominal).format("0,0")},-
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 30,
            marginHorizontal: 20,
            marginVertical: 20
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
            Total Donasi
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
            Rp {numeral(total).format("0,0")}, -
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            multiline={true}
            numberOfLines={6}
            style={{
              borderColor: "#00AA13",
              borderWidth: 1,
              marginBottom: 30,
              width: width - 100,
              marginHorizontal: 20,
              borderRadius: 10,
              padding: 5,
              paddingHorizontal: 15,
              textAlign: "center"
            }}
            placeholder="Silahkan tulis pesan donasi Anda!"
            onChangeText={text => useMessage(text)}
            value={message}
          />
        </View>

        <TouchableOpacity onPress={() => useModalVisible(!modalVisible)}>
          <View
            style={{
              justifyContent: "center",
              marginHorizontal: 20,
              alignItems: "center"
            }}
          >
            <Text
              style={{
                alignItems: "center",
                backgroundColor: "#00AA13",
                borderRadius: 15,
                color: "#fff",
                textAlign: "center",
                paddingVertical: 10,
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 20,
                width: 200
              }}
            >
              Submit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
  const SecondRoute = () => (
    <View
      style={[
        styles.scene,
        { flex: 1, paddingHorizontal: 20, alignContent: "center" }
      ]}
    >
      <Modal
        style={{
          width: width - 50,
          height: 300,
          justifyContent: "space-between",
          // alignItems: "center",
          padding: 15,
          borderRadius: 10
        }}
        position={"center"}
        isOpen={modalVisible}
      >
        <View
          style={{
            padding: 15,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              color: "black",
              marginVertical: 20
            }}
          >
            Anda akan melakukan donasi makanan :
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "black",
              marginBottom: 20
            }}
          >
            {makanan} sejumlah {jumlah}
          </Text>
          <TouchableOpacity onPress={() => useModalVisible(!modalVisible)}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 20,
                marginVertical: 20
              }}
            >
              <Text
                style={{
                  alignItems: "center",
                  backgroundColor: "#00AA13",
                  borderRadius: 15,
                  color: "#fff",
                  textAlign: "center",
                  paddingVertical: 10,
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 20,
                  width: 200
                }}
              >
                Donasi
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      <Text style={{ fontSize: 20, color: "black" }}>Jenis Makanan</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: -15
        }}
      >
        <ModalDropdown
          options={menu}
          defaultValue="Silahkan pilih jenis makanan"
          animated={true}
          textStyle={{ fontSize: 14 }}
          dropdownStyle={{ width: width - 100 }}
          onSelect={(i, value) => {
            defaultValue = value;
            useMakanan(value);
          }}
        />
        <Feather name="down-square-o" size={25} color="#00AA13" />
      </View>

      <Sae
        inputStyle={styles.input}
        labelStyle={styles.label}
        label={"Jumlah"}
        iconClass={FontAwesomeIcon}
        iconColor={"#00AA13"}
        iconName={"pencil-square-o"}
        inputPadding={16}
        labelHeight={24}
        borderHeight={2}
        borderColor={"#00AA13"}
        autoCapitalize={"none"}
        autoCorrect={false}
        onChangeText={jumlah => useJumlah(jumlah)}
        value={jumlah}
      />
      <Sae
        inputStyle={styles.input}
        labelStyle={styles.label}
        label={"Atas Nama"}
        iconClass={FontAwesomeIcon}
        iconColor={"#00AA13"}
        iconName={"pencil-square-o"}
        inputPadding={16}
        labelHeight={24}
        borderHeight={2}
        borderColor={"#00AA13"}
        autoCapitalize={"none"}
        autoCorrect={false}
        onChangeText={name => useUnderName(name)}
        value={underName}
      />
      <TextInput
        multiline={true}
        numberOfLines={6}
        style={{
          borderColor: "#00AA13",
          borderWidth: 1,
          marginTop: 20,
          width: width - 50,
          // marginHorizontal: 20,
          borderRadius: 10,
          padding: 5,
          paddingHorizontal: 10,
          textAlign: "center",
          alignSelf: "center"
        }}
        placeholder="Silahkan tulis pesan donasi Anda!"
        onChangeText={text => useMessage(text)}
        value={message}
      />
      <TouchableOpacity onPress={() => useModalVisible(!modalVisible)}>
        <View
          style={{
            justifyContent: "center",
            marginHorizontal: 20,
            alignItems: "center"
          }}
        >
          <Text
            style={{
              alignItems: "center",
              backgroundColor: "#00AA13",
              borderRadius: 15,
              color: "#fff",
              textAlign: "center",
              paddingVertical: 10,
              fontSize: 20,
              fontWeight: "bold",
              marginVertical: 30,
              width: 200
            }}
          >
            Submit
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#00AA13" }}
      style={{ backgroundColor: "black", fontWeight: "bold" }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap({
        first: FirstRoute,
        second: SecondRoute
      })}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}

export const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  scene: {
    // flex: 1,
    padding: 15,
    paddingHorizontal: 20
  },
  label: {
    color: "black",
    fontWeight: "normal",
    fontSize: 8,
    paddingBottom: 5
  },
  input: {
    color: "black",
    borderColor: "#00AA13",
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    height: 50,
    fontSize: 14
  }
});
