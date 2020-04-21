import { LineChart } from "react-native-chart-kit";

const line = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  datasets: [
    {
      data: [2564, 4599, 9513, 8662, 9900, 4679],
      strokeWidth: 2
    }
  ]
};

<View>
  <Text>Steps for the Week</Text>
  <LineChart
    data={line}
    width={Dimensions.get("window").width}
    height={220}
    yAxisLabel={"steps"}
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>;
