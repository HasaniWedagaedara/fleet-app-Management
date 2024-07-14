import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import LocationPinSvg from "@/assets/SVG/LocationPinSvg";
import TimeSvg from "@/assets/SVG/TimeSvg";
import RatingSvg from "@/assets/SVG/RatingSvg";
import LocationIconSvg from "@/assets/SVG/LocationIconSvg";

const DetailsOfTravel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require("../assets/images/car.png")}
        />
        <View style={styles.column}>
          <Text style={styles.text}>Food Truck</Text>
          <View style={styles.row1}>
            <LocationPinSvg />
            <Text style={styles.row1Text}>Little Stacy Park</Text>
          </View>
          <View style={styles.row2}>
            <TimeSvg />
            <Text style={styles.row2Text}>12.00 am - 10.00 pm</Text>
          </View>
          <View style={styles.row3}>
            <View style={styles.row3Item1}>
              <RatingSvg />
              <Text style={styles.row3Text1}>3.9</Text>
            </View>
            <View style={styles.row3Item2}>
              <LocationIconSvg />
              <Text style={styles.row3Text2}>100 mt</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsOfTravel;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 380,
    height: 160,
    borderRadius: 15,
    
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  column: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  text: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  row1Text: {
    marginLeft: 5,
    color: "#999999",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  row2Text: {
    marginLeft: 5,
    color: "#999999",
  },
  row3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  row3Item1: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "#FFDB5C",
    borderRadius: 5,
    width: 45,
    justifyContent: "center",
  },
  row3Item2: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "#2CB864",
    borderRadius: 5,
    width: 80,
    justifyContent: "center",
  },
  row3Text1: {
    marginLeft: 5,
    color: "#000000",
  },
  row3Text2: {
    marginLeft: 5,
    color: "#FFFFFF",
  },
});
