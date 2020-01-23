import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <ScrollView
        style={styles.scrolviewContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <View style={styles.pictureContainer}>
              <Image
                style={styles.photo}
                source={{
                  uri: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
                }}
              />
            </View>
            <View style={styles.identityContainer}>
              <Text style={styles.nameText}>Ammy Johnson</Text>
              <Text style={styles.locationText}>Work, London, UK</Text>
            </View>
          </View>
          <View style={styles.balanceContainer}>
            <View style={styles.myBalanceContainer}>
              <View style={styles.totalContainer}>
                <Text style={styles.nominalText}>Rp 1.000.000,-</Text>
                <Text style={styles.balanceText}>My Balance</Text>
              </View>
              <View style={styles.addIcon}>
                <AntDesign name="pluscircle" size={50} color="#00AA13" />
              </View>
            </View>
            <View style={styles.transaction}>
              <View style={styles.income}>
                <View style={styles.innerIncome}>
                  <Text style={styles.smallValue}>Rp 560.000,-</Text>
                  <AntDesign name="arrowdown" size={15} color="red" />
                </View>
                <Text style={[styles.smallLabel, { marginRight: 15 }]}>
                  Income
                </Text>
              </View>
              <View style={styles.vLiner}></View>
              <View style={styles.expense}>
                <View style={styles.innerIncome}>
                  <AntDesign name="arrowup" size={15} color="green" />
                  <Text style={styles.smallValue}>Rp 560.000,-</Text>
                </View>
                <Text style={styles.smallLabel}>Expense</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.historyText}>RECENTLY TRANSFER MONEY</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.historyScrollContainer}
        >
          <View style={styles.historyValueContainer}>
            <Image
              style={styles.smallPhoto}
              source={{
                uri: "https://i.pravatar.cc/150?img=1"
              }}
            />
            <View>
              <Text style={styles.smallValue}>Rp 560.000,-</Text>
              <Text style={[styles.smallLabel, { marginLeft: 10 }]}>Magon</Text>
            </View>
          </View>
          <View style={styles.historyValueContainer}>
            <Image
              style={styles.smallPhoto}
              source={{
                uri: "https://i.pravatar.cc/150?img=2"
              }}
            />
            <View>
              <Text style={styles.smallValue}>Rp 560.000,-</Text>
              <Text style={[styles.smallLabel, { marginLeft: 10 }]}>Magon</Text>
            </View>
          </View>
          <View style={styles.historyValueContainer}>
            <Image
              style={styles.smallPhoto}
              source={{
                uri: "https://i.pravatar.cc/150?img=3"
              }}
            />
            <View>
              <Text style={styles.smallValue}>Rp 560.000,-</Text>
              <Text style={[styles.smallLabel, { marginLeft: 10 }]}>Magon</Text>
            </View>
          </View>
          <View style={styles.historyValueContainer}>
            <Image
              style={styles.smallPhoto}
              source={{
                uri: "https://i.pravatar.cc/150?img=4"
              }}
            />
            <View>
              <Text style={styles.smallValue}>Rp 560.000,-</Text>
              <Text style={[styles.smallLabel, { marginLeft: 10 }]}>Magon</Text>
            </View>
          </View>
        </ScrollView>
        <Text style={styles.historyText}>DONATION HISTORY</Text>
        <View style={styles.donationHistoryContainer}>
          <View style={styles.detailDonationContainer}>
            <Image
              style={styles.smallPhoto}
              source={{
                uri: "https://i.pravatar.cc/150?img=5"
              }}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Ms Szhivani Dilux
              </Text>
              <Text style={{ fontSize: 14, paddingVertical: 5 }}>
                15-01-2020, 8:00 AM
              </Text>
            </View>
            <Text style={styles.bigValue}>Rp 100.000,-</Text>
          </View>
          <View style={styles.detailDonationContainer}>
            <Image
              style={styles.smallPhoto}
              source={{
                uri: "https://i.pravatar.cc/150?img=6"
              }}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Ms Szhivani Dilux
              </Text>
              <Text style={{ fontSize: 14, paddingVertical: 5 }}>
                15-01-2020, 8:00 AM
              </Text>
            </View>
            <Text style={styles.bigValue}>Rp 100.000,-</Text>
          </View>
          <View style={styles.detailDonationContainer}>
            <Image
              style={styles.smallPhoto}
              source={{
                uri: "https://i.pravatar.cc/150?img=7"
              }}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Ms Szhivani Dilux
              </Text>
              <Text style={{ fontSize: 14, paddingVertical: 5 }}>
                15-01-2020, 8:00 AM
              </Text>
            </View>
            <Text style={styles.bigValue}>Rp 100.000,-</Text>
          </View>
          <View style={styles.detailDonationContainer}>
            <Image
              style={styles.smallPhoto}
              source={{
                uri: "https://i.pravatar.cc/150?img=8"
              }}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Ms Szhivani Dilux
              </Text>
              <Text style={{ fontSize: 14, paddingVertical: 5 }}>
                15-01-2020, 8:00 AM
              </Text>
            </View>
            <Text style={styles.bigValue}>Rp 100.000,-</Text>
          </View>
          <View style={styles.detailDonationContainer}>
            <Image
              style={styles.smallPhoto}
              source={{
                uri: "https://i.pravatar.cc/150?img=9"
              }}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Ms Szhivani Dilux
              </Text>
              <Text style={{ fontSize: 14, paddingVertical: 5 }}>
                15-01-2020, 8:00 AM
              </Text>
            </View>
            <Text style={styles.bigValue}>Rp 100.000,-</Text>
          </View>
        </View>
        <Text style={styles.historyText}>CONTACT INFORMATION</Text>
        <View style={styles.contactInfo}>
          <View style={{ flex: 3 }}>
            <Text style={styles.contactLabel}>Email</Text>
          </View>
          <View style={{ flex: 7 }}>
            <Text style={styles.contactValue}>ammyjohnson@gmail.com</Text>
          </View>
        </View>
        <View style={styles.contactInfo}>
          <View style={{ flex: 3 }}>
            <Text style={styles.contactLabel}>Phone</Text>
          </View>
          <View style={{ flex: 7 }}>
            <Text style={styles.contactValue}>082112133041</Text>
          </View>
        </View>
        <Text style={styles.historyText}>ADDRESS</Text>
        <View style={styles.contactInfo}>
          <Text style={[styles.contactValue, { flexWrap: "wrap" }]}>
            58, Lajpat Nagar, Holand Street four, Sydney - 25468 Australia
          </Text>
        </View>
        <TouchableOpacity
        // onPress={() => this.handleDonate()}
        >
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
                marginTop: 30
              }}
            >
              Edit Profile
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleLogout()}>
          <View
            style={{
              justifyContent: "center",
              marginHorizontal: 20,
              flexDirection: "column"
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
                marginTop: 15,
                marginBottom: 30
              }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  scrolviewContainer: {
    flex: 1,
    marginVertical: 15,
    paddingHorizontal: 10
  },
  container: {
    // flex: 1,
    alignItems: "center",
    backgroundColor: "#00AA13",
    // backgroundColor: "pink",
    marginVertical: 10,
    height: 0.4 * height,
    flexDirection: "column",
    marginHorizontal: 10,
    width: 0.95 * width,
    alignSelf: "center",
    borderRadius: 20
  },
  profileContainer: {
    flex: 4,
    backgroundColor: "#00AA13",
    height: 100,
    width: 0.94 * width,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: "row",
    paddingHorizontal: 15
  },
  balanceContainer: {
    flex: 6,
    backgroundColor: "#fff",
    width: 0.95 * width,
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 20,
    flexDirection: "column"
  },
  pictureContainer: {
    flex: 3,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  identityContainer: {
    flex: 7,
    justifyContent: "flex-start",
    padding: 5,
    alignSelf: "center"
  },
  photo: {
    borderWidth: 2,
    borderColor: "#fff",
    width: 80,
    height: 80,
    borderRadius: 60
  },
  nameText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 5
  },
  locationText: {
    color: "#fff",
    fontWeight: "normal",
    fontSize: 16
  },
  myBalanceContainer: {
    flex: 6,
    padding: 10,
    flexDirection: "row",
    paddingHorizontal: 20
  },
  transaction: {
    flex: 4,
    padding: 10,
    flexDirection: "row",
    paddingVertical: 5,
    borderTopColor: "grey",
    borderTopWidth: 0.5
  },
  income: {
    flexDirection: "column",
    flex: 5,
    alignItems: "flex-end",
    marginHorizontal: 10
  },
  vLiner: {
    borderColor: "grey",
    marginVertical: 10,
    backgroundColor: "grey",
    width: 1,
    borderStyle: "dashed"
  },
  expense: {
    flexDirection: "column",
    flex: 5,
    alignItems: "flex-start",
    marginHorizontal: 10
  },
  addIcon: {
    flex: 2,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  totalContainer: {
    flex: 8,
    justifyContent: "flex-start",
    paddingHorizontal: 10
  },
  nominalText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  balanceText: {
    fontSize: 18,
    fontWeight: "normal"
  },
  innerIncome: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center"
  },
  smallValue: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10
  },
  smallLabel: {
    marginHorizontal: 5,
    fontSize: 16
  },
  historyText: {
    fontSize: 20,
    margin: 15,
    fontWeight: "bold"
  },
  historyScrollContainer: {
    padding: 10,
    paddingHorizontal: 20
  },
  historyValueContainer: {
    width: 0.6 * width,
    height: 0.15 * height,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "grey",
    padding: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  contactInfo: {
    marginHorizontal: 5,
    padding: 5,
    flexDirection: "row"
  },
  contactLabel: {
    fontSize: 14,
    marginRight: 50,
    paddingLeft: 5
  },
  contactValue: {
    fontSize: 14,
    // marginRight: 50,
    paddingHorizontal: 5
  },
  donationHistoryContainer: {
    padding: 10
    // paddingHorizontal: 20
  },
  detailDonationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    borderTopColor: "grey",
    padding: 10
  },
  bigValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green"
  },
  smallPhoto: {
    borderWidth: 2,
    borderColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 60
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
