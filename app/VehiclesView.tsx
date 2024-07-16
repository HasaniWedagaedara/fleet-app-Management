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
import { Stack, useNavigation } from "expo-router";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import VehicleDetailsTabs from "@/Components/VehicleDetailsTabs";
import KMSvg from "@/assets/SVG/KMSvg";
import Map from "@/Components/MapDesign";
import OilFillSvg from "@/assets/SVG/OilFillSvg";
import IndicatorSvg from "@/assets/SVG/IndicatorSvg";
import EarnSvg from "@/assets/SVG/EarnSvg";
import TravelDetails from "@/data/TravelDetails";
import VehicleDetails from "@/data/VehicleDetails";



const HeaderTitle = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.row}>
        <CloseSvg style={styles.icon} onPress={()=>navigation.goBack()}/>
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
          {VehicleDetails.map((item, index) => (
            <View style={styles.row2} key={index}>
              <View style={styles.column}>
                <Text style={styles.text1}>Driver Name</Text>
                <Text style={styles.text2}>{item.DriverName}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.text1}>Vehicle Status</Text>
                <Text style={styles.text2}> {item.status}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.text1}>Vehicle Check</Text>
                <Text style={styles.text2}> {item.CheckDate}</Text>
              </View>
            </View>
          ))}

          {TravelDetails.map((item, index) => (
            <View key={index}>
              <GestureHandlerRootView style={styles.row3}>
                <ScrollView
                  horizontal
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                >
                  <VehicleDetailsTabs
                    SvgComponent={KMSvg}
                    text={"KM"}
                    value={item.kilometers}
                  />
                  <VehicleDetailsTabs
                    SvgComponent={OilFillSvg}
                    text={"Diesel"}
                    value={item.DieselVolume}
                  />
                  <VehicleDetailsTabs
                    SvgComponent={IndicatorSvg}
                    text={"1/100 Km"}
                    value={item.KilometerRate}
                  />
                  <VehicleDetailsTabs
                    SvgComponent={EarnSvg}
                    text={"Earn"}
                    value={item.Earnings}
                  />
                </ScrollView>
              </GestureHandlerRootView>
            </View>
          ))}

          <View>
            <Text style={styles.text3}>Live GPS</Text>
            <View>
              <Map />
            </View>
          </View>
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
    left: -100,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 30,
  },
  container1: {
    flex: 1,
    height: 1500,
    width: "105%",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    position: "absolute",
    top: 350,
    right: 0,
    left: 0,
  },
  text1: {
    fontSize: 13,
    fontWeight: "400",
    color: "#666666",
  },
  text2: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
    marginLeft:-10,
  },
  text3: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222222",
    marginLeft: 20,
    marginTop: 10,
  },
  column: {
    flexDirection: "column",
    marginTop: 30,
    marginHorizontal: 10,
  },
  row2: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  row3: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
