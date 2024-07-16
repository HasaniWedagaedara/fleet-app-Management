import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CloseSvg from "@/assets/SVG/CloseSvg";
import { Stack } from "expo-router";

const HeaderTitle = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.row}>
        <CloseSvg style={styles.icon} />
        <Text style={styles.headerText}>UKW 3929</Text>
      </View>
    </View>
  );
};

const VehiclesView = () => {
  return (
    <ImageBackground
      source={require("../assets/images/car2.png")}
      style={styles.container}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: (props) => <HeaderTitle />,
          headerLeft: (props) => <TouchableOpacity></TouchableOpacity>,
          headerRight: () => <TouchableOpacity></TouchableOpacity>,
        }}
      />
      <View style={styles.contentContainer}>
        <View style={styles.container1}>

        </View>
      </View>
    </ImageBackground>
  );
};

export default VehiclesView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 400,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: "100%",
    zIndex: 1,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
  },
  icon: {
    left:-100,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 30,
  },
  container1: {
    flex: 1,
    height: 1500,
    width:"105%",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    zIndex: 5,
    position:'absolute',
    top:350,
    right:0,
    left:0,
  },
});
