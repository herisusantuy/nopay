import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Login, { width } from "./src/components/Login";
import Home from "./src/components/Home";
import Detail from "./src/components/Detail";
import Settings from "./src/components/Settings";
import Feeds from "./src/components/Feeds";
import Registrasi from "./src/components/Registrasi";
import Profile from "./src/components/Profile";
import ScanBarcode from "./src/components/ScanBarcode";
import { Provider } from "react-redux";
import configureStore from "./src/redux/store";
const store = configureStore();

class App extends Component {
  render() {
    console.disableYellowBox = true;
    console.log(this.props, "PROPS");
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;

const HomeStack = createStackNavigator({
  Coins: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "NoPay",
        headerTintColor: "#00AA13",
        headerStyle: {
          backgroundColor: "#fff"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          alignSelf: "center",
          textAlign: "center",
          justifyContent: "center",
          flex: 1,
          textAlignVertical: "center",
          left: 10
        },
        headerBackground: (
          <Image
            style={{
              height: 50,
              width: 50,
              top: 5,
              left: 10,
              textAlignVertical: "center"
            }}
            source={require("./src/assets/logo.png")}
          />
        )
      };
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => {
      return {
        headerTintColor: "#00AA13",
        headerStyle: {
          backgroundColor: "#fff"
        },
        headerTitle: "Detail Order",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          alignSelf: "center",
          justifyContent: "center",
          flex: 1,
          textAlignVertical: "center",
          flexDirection: "row"
          // left: 0.27 * width - navigation.state.params.detailInfo.name.length
        }
      };
    }
  },
  Donasi: {
    screen: Feeds,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Donasi",
        headerTintColor: "#00AA13",
        headerStyle: {
          backgroundColor: "#fff"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          alignSelf: "center",
          textAlign: "left",
          justifyContent: "center",
          flex: 1,
          textAlignVertical: "center"
        }
      };
    }
  },
  ScanBarcode: {
    screen: ScanBarcode,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Scan Barcode",
        headerTintColor: "#00AA13",
        headerStyle: {
          backgroundColor: "#fff"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          alignSelf: "center",
          textAlign: "left",
          justifyContent: "center",
          flex: 1,
          textAlignVertical: "center"
        }
      };
    }
  }
});
const Feedstack = createStackNavigator({
  Feeds: {
    screen: Feeds,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Donasi",
        headerTintColor: "#00AA13",
        headerStyle: {
          backgroundColor: "#fff"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          alignSelf: "center",
          textAlign: "center",
          justifyContent: "center",
          flex: 1,
          textAlignVertical: "center"
        }
      };
    }
  }
});
const SettingStack = createStackNavigator({
  Setting: {
    screen: Settings,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Home",
        headerTintColor: "#00AA13",
        headerStyle: {
          backgroundColor: "#fff"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          alignSelf: "center",
          textAlign: "center",
          justifyContent: "center",
          flex: 1,
          textAlignVertical: "center"
        }
      };
    }
  }
});
const AccountStack = createStackNavigator({
  Setting: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Profile",
        headerTintColor: "#00AA13",
        headerStyle: {
          backgroundColor: "#fff"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          alignSelf: "center",
          textAlign: "center",
          justifyContent: "center",
          flex: 1,
          textAlignVertical: "center"
        }
      };
    }
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    Coins: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: "Order",
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <MaterialCommunityIcons name="food" size={25} color={tintColor} />
        )
      }
    },
    Feeds: {
      screen: Feedstack,
      navigationOptions: {
        tabBarLabel: "Donasi",
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <FontAwesome5 name="donate" size={25} color={tintColor} />
        )
      }
    },
    // Settings: {
    //   screen: SettingStack,
    //   navigationOptions: {
    //     tabBarLabel: "Home",
    //     tabBarIcon: ({ tintColor, activeTintColor }) => (
    //       <FontAwesome5 name="home" size={25} color={tintColor} />
    //     )
    //   }
    // },
    Account: {
      screen: AccountStack,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <FontAwesome5 name="user-alt" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#fff",
        elevation: 20,
        height: 60,
        paddingVertical: 5,
        borderBottomColor: "red"
      },
      activeTintColor: "#00AA13",
      showIcon: true,
      labelStyle: {
        fontSize: 14
      }
    }
  }
);
const StackNavigator = createStackNavigator(
  {
    TabNavigator: TabNavigator
  },
  {
    headerMode: "none"
  }
);

const SwitchNavigator = createSwitchNavigator({
  Login: { screen: Login },
  Registrasi: { screen: Registrasi },
  Home: { screen: StackNavigator }
});

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00AA13"
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
