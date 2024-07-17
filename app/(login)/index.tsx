import { StyleSheet, View, Image } from "react-native";
import React, { useEffect } from "react";
import colors from "@/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";

const Splash = () => {
  let [fontsLoaded] = useFonts({
    inter: require("../../assets/fonts/Inter-Regular.ttf"),
    sfPro: require("../../assets/fonts/SF-Pro.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={colors.gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo1}
          source={require("../../assets/images/logo1.png")}
        />
      </View>
    </LinearGradient>
  );
};

export default Splash;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
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
