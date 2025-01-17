import React from "react";
import {  Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  

  return (
    <Stack>
      <Stack.Screen name="(login)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="MapLargeView" options={{ headerShown: false }} />
      <Stack.Screen name="Spending" />
      <Stack.Screen name="DriversView" />
      <Stack.Screen name="VehiclesView" />
    </Stack>
  );
}
