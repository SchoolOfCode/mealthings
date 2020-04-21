import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

import FlatList from "react-native-drag-flatlist";

const colors = ["#d3f261", "#7cb305", "#5b8c00", "#3f6600", "#254000"];

const originalData = new Array(3).fill(0).map((item, index) => ({
  text: index,
  color: colors[index % colors.length],
}));

const App = () => {
  const [data, setData] = useState(originalData);

  const keyExtractor = (item) => item.text.toString();

  const renderItem = ({ item, drag }) => (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: item.color }]}
      onLongPress={drag}
    >
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text> Tuesday </Text>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onMoveEnd={setData}
      />
      <Text> Monday</Text>
      <Text> Calories</Text>
      <Text> Protein</Text>
      <Text> Carbohydrates</Text>
      <Text> Fat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    alignItems: "center",
    width: 390,
    height: 40,
    padding: -10,
    margin: 5,
  },
});

export default App;
