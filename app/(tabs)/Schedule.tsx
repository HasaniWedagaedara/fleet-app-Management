import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "@/constants/colors";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import AddSvg from "@/assets/SVG/AddSvg";
import RawDetails from "@/Components/RawDetails";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DeadlineRows from "@/Components/DeadlineRows";
import FilterSvg from "@/assets/SVG/FilterSvg";
import OilSvg from "@/assets/SVG/OilSvg";
import { Calendar } from "react-native-calendars";


const HeaderTitle = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#429690",
        height: 200,
        width: 385,
        position: "absolute",
        marginLeft: -20,
      }}
    >
      <Text style={styles.headerTitle}>Schedule</Text>
    </View>
  );
};

const Schedule = () => {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: (props) => <HeaderTitle />,

          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // Handle onPress
              }}
              style={styles.headerRight}
            >
              <View style={styles.iconRow}>
                <AddSvg />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <View style={styles.container}>
        <View>
          <Calendar
            theme={{
              arrowColor: "#848A95",
              todayBackgroundColor: "#429690",
              todayTextColor: "#FDFDFD",
            }}
          />
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

export default Schedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 80,
    padding: 10,
    top: 50,
    borderRadius: 30,
    zIndex: 2,
  },
  headerTitle: {
    fontSize: 18,
    color: "#ffff",
    fontWeight: "600",
    marginTop: 72,
    fontFamily: "inter",
  },

  headerRight: {
    marginRight: 20,
    marginTop: 45,
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 11,
  },

  iconRow: {
    flexDirection: "row",
  },
});
