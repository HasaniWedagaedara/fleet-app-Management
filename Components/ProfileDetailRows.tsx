import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StarBarSvg from '@/assets/SVG/StarBarSvg'
import ProfileIconSvg from '@/assets/SVG/ProfileIcon';
import ShareIconSvg from '@/assets/SVG/ShareIconSvg';

const ProfileDetailRows = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <View style={styles.column}>
          <Text style={styles.text1}>Devon</Text>
          <Text style={styles.text2}>Aug 6 2019 . Mesa, AZ</Text>
        </View>
        <ProfileIconSvg style={styles.iconProfile}/>
      </View>
      <View style={styles.row2}>
        <StarBarSvg />
        <Text style={styles.text3}>Google</Text>
      </View>
      <Text style={styles.text4}>Text</Text>
      <ShareIconSvg style={styles.shareIcon}/>
    </View>
  );
}

export default ProfileDetailRows

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderColor: "#E9EBEE",
    borderWidth: 1,
  },
  row1: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  row2: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  text1: {
    fontSize: 14,
    fontWeight: "700",
    color: "#323334",
    fontFamily: "sfPro",
  },
  text2: {
    fontSize: 11,
    fontWeight: "500",
    color: "#7A7F85",
    fontFamily: "sfPro",
  },
  text3: {
    fontSize: 12,
    fontWeight: "500",
    color: "#7A7F85",
    backgroundColor: "#F1F2F4",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 4,
    marginLeft: 10,
    margin: -4,
    fontFamily: "sfPro",
  },
  text4: {
    fontSize: 13,
    fontWeight: "400",
    color: "#323334",
    paddingHorizontal: 10,
    fontFamily: "sfPro",
  },
  column: {
    flex: 1,
  },
  iconProfile: {
    marginRight: 10,
  },
  shareIcon: {
    left: 330,
    bottom: 10,
  },
});