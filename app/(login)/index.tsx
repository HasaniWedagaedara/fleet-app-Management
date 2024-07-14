import { StyleSheet, View, Image } from "react-native";
import React from "react";

const Splash = () => {
  let backgroundColor = "#2A7C76";



  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Image
        style={styles.logo1}
        source={require("../../assets/images/logo1.png")}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo1: {
    width: 182.57,
    height: 63.8,
  },
});
