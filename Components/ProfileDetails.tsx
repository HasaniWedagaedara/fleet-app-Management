import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BlackArrow from "@/assets/SVG/BlackArrow";

interface ProfileDetailsProps {
  title: string;
  SvgComponent: React.FC;
  setMarginTop?: number;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({
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
              style={[styles.text, { color: color ? "#FFFFFF" : "#000000" }]}
            >
              {title}
            </Text>
          </View>
          <BlackArrow style={styles.arrow} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    justifyContent: "flex-start",
    borderColor: "transparent",
    borderRadius: 55,
    top: 30,
    padding:10,
    
  },
  touchable: {
    padding: 10,
    borderRadius: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    marginLeft: 5,
    flex:1,
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
    marginRight: 10,
  },
});

export default ProfileDetails;
