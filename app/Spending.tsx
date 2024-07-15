import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "@/constants/colors";
import {Stack, useNavigation } from "expo-router";
import ArrowBackSvg from "@/assets/SVG/ArrowBackSvg";
import { useHeaderHeight } from "@react-navigation/elements";
import UploadSvg from "@/assets/SVG/UploadSvg";
import TabsBar from "@/Components/TabsBar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import UpDownSvg from "@/assets/SVG/UpDownSvg";
import InvoiceList from "@/Components/InvoiceList";
import OilSvg from "@/assets/SVG/OilSvg";
import MotorSvg from "@/assets/SVG/MotorSvg";
import { StackNavigationProp } from "@react-navigation/stack";
import LineChartComponent from "@/Components/LineChart";



const HeaderTitle = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.headerTitle}>Spendings</Text>
    </View>
  );
};



export type RootStackParamList = {
  Home: undefined;
};


const Spending= () => {
  const headerHeight = useHeaderHeight();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: (props) => <HeaderTitle />,
          headerLeft: (props) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.headerLeft}
            >
              <ArrowBackSvg />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // Handle onPress
              }}
              style={styles.headerRight}
            >
              <UploadSvg />
            </TouchableOpacity>
          ),
        }}
      />




      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <GestureHandlerRootView>
          <TabsBar />
        </GestureHandlerRootView>
        <View style={[styles.chart, ]}>
          <LineChartComponent heightChart={220}/>
        </View>
        <View style={styles.titleRow}>
          <Row />
        </View>
      </View>
    </>
  );
};

export default Spending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 18,
    color: colors.primary,
    marginTop: 40,
    marginLeft: 75,
  },
  headerLeft: {
    marginLeft: 20,
    marginTop: 50,
  },
  headerRight: {
    marginRight: 20,
    marginTop: 45,
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 11,
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    top:20,
  },
  txt: {
    flexDirection: "row",
    marginTop: 55,
    color: "#666666",
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 50,
    marginLeft: 20,
    flexDirection: "row",
  },
  titleRow: {
    flexDirection: "row",
    top: -300,
    marginLeft: 20,
  },
  icon: {
    flexDirection: "row",
    marginTop:50,
    marginLeft:170,
  },
  list: {
    marginTop: 20,
  },
  chart:{
    top:-100,
    height:400,
    marginLeft:10,
  }
});

const Row = () => {
  return (
    <View>
      <View style={styles.row1}>
        <Text style={styles.headerTxt}>Invoice List</Text>
        <UpDownSvg style={styles.icon} />
      </View>
      <View style={styles.list}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <InvoiceList
            title={"Reliance"}
            text={"UKW 3929"}
            SvgComponent={OilSvg}
            value="- $ 150.00"
          />
          <InvoiceList
            title={"Shell"}
            text={"UKW 8221"}
            SvgComponent={OilSvg}
            value="- $ 85.00"
          />
          <InvoiceList
            title={"Ford Motors"}
            text={"UKW 3012"}
            SvgComponent={MotorSvg}
            value="- $ 11.99"
          />
        </GestureHandlerRootView>
      </View>
    </View>
  );
};
