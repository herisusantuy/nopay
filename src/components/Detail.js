import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Linking,
  TouchableOpacity,
  Image
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import numeral from "numeral";
import moment from "moment";
import Loader from "../components/Loader";
import { throwStatement } from "@babel/types";
import Modal from "react-native-modalbox";

export default class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 25000,
      total: 0,
      modalVisible: false
    };
  }

  onPlus() {
    this.setState({
      total: this.state.total + 1
    });
  }
  onMinus() {
    this.setState({
      total: this.state.total - 1
    });
  }
  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  render() {
    let item = this.props.navigation.getParam("item");
    return (
      <View style={{ paddingHorizontal: 15 }}>
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
          isOpen={this.state.modalVisible}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 15
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "black"
              }}
            >
              {item.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black"
              }}
            >
              Jumlah
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
                marginHorizontal: 3
              }}
            >
              {numeral(this.state.total).format("0,0")}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black"
              }}
            >
              Total
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black"
              }}
            >
              Rp {this.state.price * this.state.total},-
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 20
                  // marginVertical: 20
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
                  Bayar
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 20
                  // marginVertical: 20
                }}
              >
                <Text
                  style={{
                    alignItems: "center",
                    backgroundColor: "red",
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
                  Cancel
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={{ marginHorizontal: 5 }}>
          <Image
            source={{
              uri: item.image_url
            }}
            style={{
              // width: width - 20,
              height: 200,
              marginVertical: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10
            }}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                {item.name}
              </Text>
              {/* <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Rp {this.state.price},-
              </Text> */}
            </View>

            <Text style={{ fontSize: 14 }}>
              Aenean porttitor fermentum sodales. Phasellus nec odio sem. Nulla
              vitae auctor turpis, at efficitur velit. Suspendisse nec leo
              ullamcorper dolor posuere varius in sed enim. Sed ullamcorper nisl
              nisl.
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 15
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Stok Makanan
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                50
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
            >
              <View
                style={{
                  justifyContent: "center",
                  marginHorizontal: 20,
                  marginVertical: 50,
                  width: 0.5 * width,
                  alignSelf: "center"
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
                    marginBottom: 20
                  }}
                >
                  Order Now
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12306A",
    paddingHorizontal: 10
  },
  headerBox: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#092757",
    width: width,
    left: -10
  },
  labelHeader: {
    fontSize: 10,
    color: "yellow"
  },
  boxInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    paddingVertical: 5
  },
  labelInfo: {
    color: "white",
    justifyContent: "center"
    // fontWeight: "bold"
  },
  valueInfo: {
    color: "white",
    justifyContent: "center",
    fontWeight: "bold"
  },
  price: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold"
  },
  perTime: {
    color: "yellow",
    fontSize: 12
  },
  boxPercent: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  percent: {
    fontSize: 12,
    color: "white"
  },
  socialMedia: {
    flexDirection: "row",
    paddingVertical: 35,
    justifyContent: "center"
  },
  socmedLogo: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 10
  }
});
