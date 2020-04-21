import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { FlatList } from "react-native-gesture-handler";

const exampleData = [...Array(7)].map((d, index) => ({
  key: `item-${index}`, // For example only -- don't use index as your key!
  label: index,
  backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index *
    5}, ${132})`,
}));

class Example extends Component {
  state = {
    data: exampleData,
  };

  renderItem = ({ item, index, drag, isActive }) => {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          backgroundColor: isActive ? "blue" : item.backgroundColor,
          alignItems: "center",
          justifyContent: "center",
        }}
        onLongPress={drag}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 32,
          }}
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.spacing}>
        <ScrollView>
          <View style={styles.positioning}>
            <Text style={styles.font}>Monday</Text>
            <Text style={styles.font}>Tuesday</Text>
            <Text style={styles.font}>Wednesday</Text>
            <Text style={styles.font}>Thursday</Text>
            <Text style={styles.font}>Friday</Text>
            <Text style={styles.font}>Saturday</Text>
            <Text style={styles.font}>Sunday</Text>
          </View>
        </ScrollView>

        <DraggableFlatList
          style
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          onDragEnd={({ data }) => this.setState({ data })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spacing: { flex: 1 },
  font: {
    fontSize: 30,
    paddingBottom: 70,
  },
});
export default Example;
