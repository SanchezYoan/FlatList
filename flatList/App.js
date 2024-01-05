import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const obj = [
    { name: "Stan", age: 45 },
    { name: "Francine", age: 45 },
    { name: "hayley", age: 18 },
    { name: "Steve", age: 15 },
    { name: "Roger", age: 1020 },
    { name: "Klaus", age: 30 },
    { name: "Homer", age: 35 },
    { name: "Bart", age: 11 },
  ];

  const myObj = { age: 20, name: "toto" };
  // extraction
  const { age, name } = myObj;
  const [family, setFamily] = useState(obj);
  const [invert, setInvert] = useState(false);

  const renderItem = ({ item }) => (
    <View style={styles.viewList}>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Nom: </Text>
        {item.name}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Age: </Text>
        {item.age}
      </Text>
    </View>
  );

  const onRefresh = () => setInvert(!invert);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={family}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        // Change le sens du scroll à l'horizontal
        horizontal={true}
        inverted={invert}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    alignItems: "stretch",
    justifyContent: "flex-end",
  },
  viewList: {
    marginTop: 30,
    backgroundColor: "purple",
    padding: 19,
    marginRight: 5,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  textBold: {
    fontWeight: "bold",
  },
  list: {
    backgroundColor: "deepskyblue",
    alignItems: "center",
    margin: 10,
  },
  listText: {
    padding: 10,
    fontSize: 40,
    color: "white",
  },
});
