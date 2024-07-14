import { Link } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


interface RawDetailsProps {
  title: string;
  href: string;
  setMarginLeft?: number;
}

const RawDetails: React.FC<RawDetailsProps> = ({
  title,
  href,
  setMarginLeft,
}) => {
  

  return (
    <View style={styles.row1}>
      <Text style={styles.headerTxt}>{title}</Text>
      <Link to={href} style={[styles.txt, { marginLeft: setMarginLeft }]}>
        See all
      </Link>
      
    </View>
  );
};

const styles = StyleSheet.create({
  row1: {
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    flexDirection: "row",
    marginTop: 55,
    color: "#666666",
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 50,
    marginLeft: 20,
    flexDirection: "row",
  },
});

export default RawDetails;
