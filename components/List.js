import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import DownloadButton from "./DownloadButton copy";
import ListItem from "./ListItem";
import SyncButton from "./SyncButton";
export default function List() {
  return (
    <View style={styles.container}>
      <ListItem
        title="s1 BME"
        subtitle="10 topics"
        action={<DownloadButton></DownloadButton>}
      />
      <ListItem
        title="s1 Chemistry"
        subtitle="40 topics"
        action={<SyncButton />}
      />
      <ListItem
        title="s1 Graphics"
        subtitle="45topics"
        action={<DownloadButton></DownloadButton>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
