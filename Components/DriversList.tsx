import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import BlackArrow from "@/assets/SVG/BlackArrow";
import StarYellow from "@/assets/SVG/StarYellow";
import DriversList from "@/data/Drivers";



const Drivers = () => {
  const [drivers, setDrivers] = useState(
    DriversList.map((driver) => ({
      ...driver,
      color: false, 
    }))
  );

  const handleClick = (index: number) => {
    setDrivers((prevDrivers) => {
      const updatedDrivers = [...prevDrivers];
      updatedDrivers[index].color = !updatedDrivers[index].color;
      return updatedDrivers;
    });
  };

  return (
    <View style={[styles.container, ]}>
      <ScrollView contentContainerStyle={{ gap: 10 }}>
        {drivers.map((item, index) => (
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
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=male",
                }}
                style={{ width: 30, height: 30, borderRadius: 37 }}
              />
              <View style={styles.column}>
                <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.txt}>{item.city}</Text>
              </View>
              <View style={styles.rate}>
                <StarYellow style={styles.star} />
                <Text>{item.rate}</Text>
              </View>
              <BlackArrow style={styles.arrow} />
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
  },
  txt: {
    fontSize: 13,
    fontWeight: "400",
    marginRight: 5,
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

export default Drivers;
