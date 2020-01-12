import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import axios from "axios";
import numeral from "numeral";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { REQUEST_LATEST_DATA } from "../redux/type/food";
import Loader from "../components/Loader";
// import Slideshow from "react-native-slideshow";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isSearch: false,
      value: "",
      detailInfo: [],
      addInfo: {}
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    this.handleDonate = this.handleDonate.bind(this);
  }
  componentDidMount() {
    this.props.getCoinList();
  }

  handleClear() {
    this.setState({
      value: ""
    });
  }
  handleOrder(id) {
    console.log(id, "index");
    this.props.navigation.navigate("Detail", {
      item: this.props.coin[id]
    });
  }
  handleDonate() {
    this.props.navigation.navigate("Donasi");
  }
  render() {
    let slides, foodList;
    if (this.props.count > 0) {
      slides = this.props.coin.slice(0, 5).map((coin, i) => {
        return (
          <TouchableOpacity onPress={() => this.handleOrder(i)}>
            <View style={{ marginHorizontal: 10 }}>
              <Image
                source={{
                  uri: coin.image_url
                }}
                style={{
                  width: width - 20,
                  height: 250,
                  marginVertical: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10
                }}
              />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  marginLeft: 20
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 24
                  }}
                >
                  {coin.name}
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 18
                  }}
                >
                  Rating : {coin.rating}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      });
      foodList = this.props.coin
        .slice(5, this.props.coin.length)
        .map((coin, i) => {
          let categories = coin.categories.map(item => {
            return (
              <View
                style={{
                  flexWrap: "wrap",
                  backgroundColor: "#fff",
                  borderRadius: 5,
                  margin: 2,
                  borderWidth: 1,
                  borderColor: "#00AA13"
                  // padding: 5
                }}
              >
                <Text style={{ fontSize: 10, color: "#00AA13", padding: 3 }}>
                  {item.title}
                </Text>
              </View>
            );
          });
          return (
            <TouchableOpacity onPress={() => this.handleOrder(i)}>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 5,
                  marginTop: 10,
                  marginBottom: 5,
                  width: 0.44 * width,
                  flexDirection: "column",
                  flexWrap: "wrap"
                }}
              >
                <Image
                  source={{
                    uri: coin.image_url
                  }}
                  style={{
                    width: 0.44 * width,
                    height: 180,
                    // marginVertical: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10
                    // left: 25
                  }}
                />
                <View
                  style={{
                    flexDirection: "column",
                    height: 100,
                    width: 180,
                    marginTop: 15,
                    marginBottom: -60
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "left",
                      fontSize: 15,
                      flex: 1,
                      flexShrink: 1,
                      flexWrap: "wrap"
                    }}
                  >
                    {coin.name}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    // marginTop: -30,
                    flexWrap: "wrap",
                    paddingVertical: 3,
                    justifyContent: "flex-start"
                  }}
                >
                  {categories}
                </View>
              </View>
            </TouchableOpacity>
          );
        });
    }
    return this.props.count > 0 ? (
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{ marginBottom: 20 }}
        >
          {slides}
        </ScrollView>
        <TouchableOpacity onPress={() => this.handleDonate()}>
          <View style={{ justifyContent: "center", marginHorizontal: 20 }}>
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
              Donate
            </Text>
          </View>
        </TouchableOpacity>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            {foodList}
          </View>
        </ScrollView>
      </View>
    ) : (
      <Loader />
    );
  }
}

const mapStateToProps = state => ({
  // foods: state.food.data
  coin: state.coin.data,
  count: state.coin.count
});
const mapDispatchToProps = dispatch => {
  return {
    getCoinList: () => dispatch({ type: REQUEST_LATEST_DATA })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

export const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#283571",
    paddingHorizontal: 10
  },
  boxTotal: {
    flexDirection: "row",
    marginVertical: 0,
    paddingVertical: 10
  },
  boxDominance: {
    flex: 1,
    justifyContent: "flex-start"
  },
  boxMarkectCap: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  boxVolume: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  lableTotal: {
    fontSize: 10,
    color: "yellow",
    fontWeight: "bold"
  },
  valueTotal: {
    fontSize: 12,
    color: "white"
  },
  searchBar: {
    marginTop: 15
  },
  box: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#EFF4FC",
    marginTop: 10,
    borderRadius: 5,
    elevation: 15
  },
  coin: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  },
  price: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  capVol: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  logo: {
    height: 40,
    width: 40
  },
  symbol: {
    fontSize: 14,
    color: "#7b7d7b",
    fontWeight: "bold"
  },
  name: {
    color: "grey",
    fontSize: 12
  },
  priceUp: {
    fontSize: 14,
    color: "#7b7d7b",
    textAlign: "right"
  },
  priceBottom: {
    color: "grey",
    textAlign: "right",
    fontSize: 12
  },
  volUp: {
    fontSize: 14,
    color: "#7b7d7b",
    textAlign: "right"
  },
  volBottom: {
    color: "grey",
    textAlign: "right",
    fontSize: 12
  },
  boxHeader: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    // backgroundColor: "#44475a",
    marginTop: 10,
    marginBottom: 0
  },
  headerCoin: {
    fontSize: 10,
    color: "yellow"
  },
  headerPrice: {
    fontSize: 10,
    color: "yellow"
  },
  boxHeaderCoin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    left: 15
  },
  boxHeaderPrice: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  }
});
