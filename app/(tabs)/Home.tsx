import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import colors from "@/constants/colors";
import { useHeaderHeight } from "@react-navigation/elements";
import RawDetails from "@/Components/RawDetails";
import DeadlineRows from "@/Components/DeadlineRows";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FilterSvg from "@/assets/SVG/FilterSvg";
import OilSvg from "@/assets/SVG/OilSvg";
import Map from "@/Components/MapDesign";
import NotificationSvg from "@/assets/SVG/NotificationSvg";
import LineChartComponent from "@/Components/LineChart";

const HeaderTitle = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 14, color: colors.primary, marginTop: 35 }}>
        Welcome!
      </Text>
      <Text style={{ fontSize: 20, color: "#29756F", marginLeft: -10 }}>
        Name
      </Text>
    </View>
  );
};

const Home = () => {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: (props) => <HeaderTitle />,
          headerLeft: (props) => (
            <TouchableOpacity
              onPress={() => {}}
              style={{ marginLeft: 20, marginTop: 50 }}
            >
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{ width: 60, height: 60, borderRadius: 37 }}
              ></Image>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // Handle onPress
              }}
              style={{
                marginRight: 20,
                marginTop: 50,
                backgroundColor: colors.primary,
                padding: 10,
                borderRadius: 11,
              }}
            >
              <NotificationSvg />
            </TouchableOpacity>
          ),
        }}
      />

      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <RawDetails title="Live GPS" href="/MapLargeView" setMarginLeft={220} />
        <Map />

        <RawDetails title="Spending" href="/Spending" setMarginLeft={220} />
        <View style={styles.container1}>
          <LineChartComponent heightChart={125}/>
        </View>

        <RawDetails
          title="Upcoming Deadlines"
          href="./Schedule.tsx"
          setMarginLeft={130}
        />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <DeadlineRows
            title="Filter Change"
            SvgComponent={FilterSvg}
            setMarginTop={-10}
          />
        </GestureHandlerRootView>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <DeadlineRows
            title="Oil Change      "
            SvgComponent={OilSvg}
            setMarginTop={-35}
          />
        </GestureHandlerRootView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  container1: {
    height: 150,
    padding: 10,
    marginBottom: -40,
  },
});
