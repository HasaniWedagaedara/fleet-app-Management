import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
interface InvoiceListProps {
  title: string;
  text: string;
  value: string;
  SvgComponent: React.FC;
  setMarginTop?: number;
}

const InvoiceList: React.FC<InvoiceListProps> = ({
  title,
  SvgComponent,
  setMarginTop,
  text,
  value,
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
              style={[styles.text, { color: color ? "#FFFFFF" : "#000000" }]}
            >
              {title}
            </Text>
            <View style={styles.rowDate}>
              <Text
                style={[styles.txt, { color: color ? "#FFFFFF" : "#666666" }]}
              >
                {text}
              </Text>
            </View>
          </View>
          <Text style={styles.cash}>{value}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "flex-start",
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 55,
    top: 30,
    marginLeft: -10,
    marginBottom: 20,
    width: 350,
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
  cash: {
    flexDirection: "row",
    color: "#F95B51",
    position: "absolute",
    right: 10,
  },
});

export default InvoiceList;
