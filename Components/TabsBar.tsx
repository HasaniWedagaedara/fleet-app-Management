import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const Category = [
  { title: "Day" },
  { title: "Week" },
  { title: "Month" },
  { title: "Year" },
];

const TabsBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {Category.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleSelectCategory(index)}
          style={activeIndex === index ? styles.active : styles.item}
        >
          <Text style={{ color: activeIndex === index ? "#fff" : "#666666",fontFamily:'sfPro',fontWeight:"400" }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default TabsBar;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#429690",
    flexDirection: "row",
    height: 40,
    width: 90,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
