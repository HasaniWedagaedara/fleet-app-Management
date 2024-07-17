import { StyleSheet, Text,  View, Image } from "react-native";
import React from "react";
import colors from "@/constants/colors";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import EditSvg from "@/assets/SVG/EditSvg";
import SettingsSvg from "@/assets/SVG/SettingsSvg";
import ProfileDetails from "@/Components/ProfileDetails";
import TeamSvg from "@/assets/SVG/TeamSvg";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ShareSvg from "@/assets/SVG/ShareSvg";
import HelpSvg from "@/assets/SVG/HelpSvg";
import ManageSvg from "@/assets/SVG/ManageSvg";

const HeaderTitle = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#429690",
        height: 700,
        width: 385,
        position: "absolute",
        marginLeft: -20,
      }}
    >
      <Text style={styles.headerTitle}>Profile</Text>
      <View style={styles.row}>
        <EditSvg style={styles.icon} />
        <Image
          source={{
            uri: "https://xsgames.co/randomusers/avatar.php?g=female",
          }}
          style={styles.image}
        />
        <SettingsSvg style={styles.icon} />
      </View>
      <Text style={styles.name}>Alferdo Curits</Text>
      <Text style={styles.address}>@alfredo_curits</Text>
    </View>
  );
};

const Profile = () => {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: (props) => <HeaderTitle />,
        }}
      />
      <View style={styles.container}>
        <GestureHandlerRootView>
          <ProfileDetails
            title={"My Team"}
            SvgComponent={TeamSvg}
            setMarginTop={20}
          />
          <ProfileDetails
            title={"Share App"}
            SvgComponent={ShareSvg}
            setMarginTop={20}
          />
          <ProfileDetails
            title={"Help & resource"}
            SvgComponent={HelpSvg}
            setMarginTop={20}
          />
          <ProfileDetails
            title={"Manage Subscription"}
            SvgComponent={ManageSvg}
            setMarginTop={20}
          />
        </GestureHandlerRootView>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 270,
    top: 50,
    borderRadius: 30,
    zIndex: 2,
    margin: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: "#ffff",
    fontWeight: "600",
    top: 100,
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
  image: {
    width: 120,
    height: 120,
    borderRadius: 137,
    borderWidth: 3,
    borderColor: "#ffffff",
    top: 120,
  },
  row: {
    flexDirection: "row",
  },
  icon: {
    top: 130,
    margin: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ffffff",
    top: 140,
    fontFamily: "inter",
  },
  address: {
    fontSize: 14,
    fontWeight: "600",
    top: 150,
    color: "#F2F2F2",
    fontFamily: "inter",
  },
});
