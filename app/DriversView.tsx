import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import React from "react";
import { Stack, useNavigation } from "expo-router";
import CloseSvg from "@/assets/SVG/CloseSvg";
import CalendarSvg from "@/assets/SVG/CalendarSvg";
import CallSvg from "@/assets/SVG/CallSvg";
import EmailSvg from "@/assets/SVG/EmailSvg";
import ProfileImage from "@/assets/SVG/ProfileImage";
import StarBarSvg from "@/assets/SVG/StarBarSvg";
import ProfileDetailRows from "@/Components/ProfileDetailRows";

const HeaderTitle = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.row}>
        <CloseSvg style={styles.icon} onPress={()=>navigation.goBack()}/>
        <Text style={styles.headerText}>Drivers Profile</Text>
        <CalendarSvg style={styles.icon} />
      </View>
    </View>
  );
};

const DriversView = () => {
  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor="#429690" barStyle="light-content" />
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerBackVisible: false,
            headerTitle: (props) => <HeaderTitle />,
            headerLeft: (props) => <TouchableOpacity></TouchableOpacity>,
            headerRight: () => <TouchableOpacity></TouchableOpacity>,
          }}
        />
      </View>

      <View style={styles.container1}>
        <View style={styles.rowMain}>
          <CallSvg style={styles.icon1} />
          <ProfileImage />
          <EmailSvg style={styles.icon1} />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.text1}>Alfonso Bator</Text>
          <Text style={styles.text2}>750 Sarah Drive Sulphur, LA 70663</Text>
          <View style={styles.row2}>
            <Text style={styles.text3}>4.3</Text>
            <StarBarSvg />
          </View>
        </View>
        <View style={styles.details}>
          <ProfileDetailRows />
          <Text></Text>
          <ProfileDetailRows />
          <Text></Text>
          <ProfileDetailRows />
        </View>
      </View>
    </>
  );
};

export default DriversView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#429690",
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#429690",
    height: 150,
    width: 400,
    marginLeft: -30,
    marginTop: -40,
    zIndex: -1,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "inter",
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    top: 60,
  },
  icon: {
    margin: 80,
    marginTop: 7,
  },
  container1: {
    flex: 1,
    height: 1500,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 30,
    zIndex: 5,
    marginTop: -400,
  },
  rowMain: {
    flexDirection: "row",
    marginTop: -70,
  },
  icon1: {
    margin: 30,
  },
  text1: {
    fontSize: 26,
    color: "#000000",
    fontWeight: "600",
    fontFamily: "sfPro",
  },
  text2: {
    fontSize: 13,
    color: "#666666",
    fontWeight: "400",
    fontFamily: "inter",
  },
  text3: {
    fontSize: 13,
    color: "#429690",
    fontWeight: "700",
    margin: 10,
    fontFamily: "sfPro",
  },
  detailContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  row2: {
    top: 10,
    flexDirection: "row",
    backgroundColor: "#F1F2F4",
    alignItems: "center",
    paddingHorizontal: 5,
    borderRadius: 19,
  },
  details: {
    marginTop: 30,
  },
});
