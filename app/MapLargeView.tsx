import { StyleSheet, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { Stack, useNavigation } from "expo-router";
import LocationSvg from "@/assets/SVG/LocationSvg";
import GoBackSvg from "@/assets/SVG/GoBackSvg";
import DownArrowSvg from "@/assets/SVG/DownArrowSvg";
import DetailsOfTravel from "@/Components/DetailsOfTravel";
import { StackNavigationProp } from "@react-navigation/stack";


export type RootStackParamList = {
  Home: undefined;
};
const MapLargeView = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
        }}
      />
      <View style={styles.mapContainer}>
        <MapView style={styles.map} />
        <View style={styles.header}>
          <GoBackSvg
            style={styles.goBack}
            onPress={() => navigation.navigate("Home")}
          />
          <View style={styles.locationContainer}>
            <LocationSvg style={styles.location} />
            <DownArrowSvg style={styles.downArrow} />
          </View>
        </View>
        <View style={styles.details}>
          <DetailsOfTravel />
        </View>
      </View>
    </>
  );
};

export default MapLargeView;

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  goBack: {
    marginLeft: -5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 90,
  },
  location: {
    marginLeft: 10,
  },
  downArrow: {
    top: -10,
    right: 40,
  },
  details: {
    width: 300,
    height: 120,
    borderRadius:15,
    position: "absolute",
    backgroundColor: "#FFFFFF",
    bottom:20,
    left:50,

  },
});
