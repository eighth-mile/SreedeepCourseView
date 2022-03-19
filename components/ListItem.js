import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
export default function ListItem(prop) {
  const title = prop.title;
  const subtitle = prop.subtitle;
  const action = prop.action;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {action}

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#009900",
    borderBottomColor: "#009900",
  },
  title: {
    fontSize: 55,
  },
  subtitle: {
    fontSize: 25,
  },
});
