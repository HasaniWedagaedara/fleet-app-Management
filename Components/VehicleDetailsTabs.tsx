import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface VehicleDetailsTabsProps {
  SvgComponent: React.FC;
  text:string
}

const VehicleDetailsTabs: React.FC<VehicleDetailsTabsProps> = ({
  SvgComponent,
  text
}) => {
  return (
    <View style={styles.column}>
      <SvgComponent />
      <Text style={styles.text1}>99,002</Text>
      <Text style={styles.text1}>{text}</Text>
    </View>
  );
};

export default VehicleDetailsTabs;

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0f2e9",
    borderRadius: 20,
    height: 140,
    width: 100,
    marginRight:10,
  },
  text1: {
    fontSize: 12,
    fontWeight: "600",
    color: "#438883",
  },
  text2: {
    fontSize: 12,
    fontWeight: "600",
    color: "#96C9C5",
  },
});
