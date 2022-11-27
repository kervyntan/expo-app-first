import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    // SafeAreaView -> adds padding to prevent content from being blocked by notches
    <SafeAreaView style={styles.container}>
      <Text>But don't vibe too much. </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    color : "#fff",
    // alignItems: 'center',
    // justifyContent: 'center'
  },
});
