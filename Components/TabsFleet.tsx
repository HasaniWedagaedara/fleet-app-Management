import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Drivers from "./DriversList";
import Vehicles from "./VehiclesList";
import OilSvg from "@/assets/SVG/OilSvg";


const TabsFleet = () => {
  const [activeTab, setActiveTab] = useState("Drivers");

  const handleClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleClick("Drivers")}
          style={[
            styles.tab,
            {
              backgroundColor: activeTab === "Drivers" ? "#29756F" : "#F4F6F6",
            },
          ]}
        >
          <Text style={{ color: activeTab === "Drivers" ? "#F4F6F6" : "#000" }}>
            Drivers
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleClick("Vehicles")}
          style={[
            styles.tab,
            {
              backgroundColor: activeTab === "Vehicles" ? "#29756F" : "#F4F6F6",
            },
          ]}
        >
          <Text
            style={{ color: activeTab === "Vehicles" ? "#F4F6F6" : "#000" }}
          >
            Vehicles
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {activeTab === "Drivers" ? 
        <Drivers   /> : 
        <Vehicles  />}
      </View>
    </View>
  );
};

export default TabsFleet;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#F4F6F6",
    borderRadius: 40,
    marginHorizontal: 25,
  },
  tab: {
    height: 45,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    marginHorizontal: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -450,
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
  },
});
