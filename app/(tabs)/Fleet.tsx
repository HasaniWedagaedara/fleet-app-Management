import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "@/constants/colors";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import SearchSvg from "@/assets/SVG/SearchSvg";
import AddSvg from "@/assets/SVG/AddSvg";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabsFleet from "@/Components/TabsFleet";

const HeaderTitle = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#429690",
        height:200,
        width:385,
        position:'absolute',
        marginLeft:-20,
      }}
    >
      <Text style={styles.headerTitle}>Fleet</Text>
    </View>
  );
};



const Fleet = () => {
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
                <AddSvg style={styles.add}/>
              </View>
            </TouchableOpacity>
          ),
        }}
      />


        <View style={styles.container}>
          <GestureHandlerRootView>
            <TabsFleet/>
          </GestureHandlerRootView>
        </View>


    </>
    
  );
};

export default Fleet;

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
  search: {
    right: 20,
  },
  add: {},
});
