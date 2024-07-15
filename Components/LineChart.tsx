import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import { LineChart as RNLineChart } from "react-native-chart-kit";

interface LineChartProps {
  heightChart?: number;
}

const LineChartComponent: React.FC<LineChartProps> = ({
  heightChart = 220,
}) => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <View style={[styles.chartContainer, { height: heightChart }]}>
      <RNLineChart
        data={data}
        width={Dimensions.get("window").width - 20}
        height={heightChart}
        chartConfig={{
          backgroundColor: "#429690",
          backgroundGradientFrom: "#429690",
          backgroundGradientTo: "#FBFBFB",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#429690",
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

export default LineChartComponent;

const styles = StyleSheet.create({
  chartContainer: {
    marginVertical: 8,
  },
  chart: {
    borderRadius: 16,
  },
});
