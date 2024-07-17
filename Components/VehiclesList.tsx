import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import BlackArrow from "@/assets/SVG/BlackArrow";
import VehiclesList from "@/data/Vehicles";
import { router } from "expo-router";

const Vehicles = () => {
  const [Vehicles, setVehicles] = useState(
    VehiclesList.map((driver) => ({
      ...driver,
      color: false,
    }))
  );

  const handleClick = (index: number) => {
    setVehicles((prevVehicles) => {
      const updatedVehicles = [...prevVehicles];
      updatedVehicles[index].color = !updatedVehicles[index].color;
      return updatedVehicles;
    });
  };

  const handleNavigate = ()=>{
    router.push("/VehiclesView")
  }

  return (
    <View style={[styles.container]}>
      <ScrollView contentContainerStyle={{ gap: 10 }}>
        {Vehicles.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleClick(index)}
            style={[
              styles.touchable,
              { backgroundColor: item.color ? "#29756F" : "#FBFBFB" },
            ]}
          >
            <View style={styles.row}>
              <Image
                style={{ width: 30, height: 30, borderRadius: 37 }}
                source={require("../assets/images/car.png")}
              />
              
              <View style={styles.column}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.txt}>{item.city}</Text>
              </View>
              <BlackArrow style={styles.arrow} onPress={handleNavigate}/>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "flex-start",
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 55,
    marginTop: 250,
  },
  touchable: {
    padding: 10,
    marginLeft: 10,
    borderRadius: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    marginLeft: 20,
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 3,
    marginTop: -5,
    fontFamily: "sfPro",
  },
  txt: {
    fontSize: 13,
    fontWeight: "400",
    marginRight: 5,
    fontFamily: "inter",
  },
  arrow: {
    right: 10,
  },
  rate: {
    flexDirection: "row",
    backgroundColor: "#429690",
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    right: 25,
  },
  star: {
    marginRight: 5,
    marginTop: 5,
  },
});

export default Vehicles;
