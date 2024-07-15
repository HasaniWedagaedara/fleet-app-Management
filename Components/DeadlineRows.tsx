import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ArrowSvg from "@/assets/SVG/ArrowSvg"; 

interface DeadlineRowsProps {
  title: string;
  SvgComponent: React.FC;
  setMarginTop?: number;
}

const DeadlineRows: React.FC<DeadlineRowsProps> = ({
  title,
  SvgComponent,
  setMarginTop,
}) => {
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setColor(!color);
  };

  return (
    <View style={[styles.container, { marginTop: setMarginTop }]}>
      <TouchableOpacity
        onPress={handleClick}
        style={[
          styles.touchable,
          { backgroundColor: color ? "#29756F" : "#FBFBFB" },
        ]}
      >
        <View style={styles.row}>
          <SvgComponent />
          <View style={styles.column}>
            <Text
              style={[
                styles.text,
                { color: color ? "#FFFFFF" : "#000000" }, 
              ]}
            >
              {title}
            </Text>
            <View style={styles.rowDate}>
              <Text
                style={[
                  styles.txt,
                  { color: color ? "#FFFFFF" : "#666666" }, 
                ]}
              >
                Due On:
              </Text>
              <Text
                style={[
                  styles.txt,
                  { color: color ? "#FFFFFF" : "#666666" }, 
                ]}
              >
                Date
              </Text>
            </View>
          </View>
          <ArrowSvg style={styles.arrow} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "90%",
    justifyContent: "flex-start",
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 55,
    top: 30,
    marginLeft: 20,
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
    marginLeft: 30,
  },
  dueDate: {
    marginLeft: 10,
    color: "gray",
  },
  rowDate: {
    flexDirection: "row",
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
    marginLeft: 120,
  },
});

export default DeadlineRows;
