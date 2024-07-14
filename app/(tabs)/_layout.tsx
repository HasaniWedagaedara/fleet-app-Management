import React from "react";
import { Tabs } from "expo-router";
import FleetSvg from "@/assets/SVG/FleetSvg";
import ScheduleSvg from "@/assets/SVG/ScheduleSvg";
import ActivitySvg from "@/assets/SVG/ActivitySvg";
import ProfileSvg from "@/assets/SVG/ProfileSvg";
import colors from "@/constants/colors";
import HomeSvg from "@/assets/SVG/HomeSvg";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          padding: 0,
        },

        tabBarActiveTintColor: "#29756F",
        tabBarInactiveTintColor: colors.inactive,
        tabBarLabelStyle: {
          marginBottom: 15,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeSvg color={focused ? "#29756F" : "#333333"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Fleet"
        options={{
          tabBarIcon: ({ focused }) => (
            <FleetSvg color={focused ? "#29756F" : "#333333"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Schedule"
        options={{
          tabBarIcon: ({ focused }) => (
            <ScheduleSvg color={focused ? "#29756F" : "#333333"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Activity"
        options={{
          tabBarIcon: ({ focused }) => (
            <ActivitySvg color={focused ? "#29756F" : "#333333"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <ProfileSvg color={focused ? "#29756F" : "#333333"} />
          ),
        }}
      />
    </Tabs>
  );
}
