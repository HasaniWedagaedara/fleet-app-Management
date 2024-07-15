import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "@/constants/colors";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import SearchSvg from "@/assets/SVG/SearchSvg";
import AddSvg from "@/assets/SVG/AddSvg";

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
      <Text style={styles.headerTitle}>Shedule</Text>
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
                <SearchSvg style={styles.search} />
                <AddSvg style={styles.add} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      
    </>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 18,
    color: "#ffff",
    fontWeight: "600",
    marginTop: 72,
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
  search: {
    right: 20,
  },
  add: {},
});
