import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {

  return (
    // SafeAreaView -> adds padding to prevent content from being blocked by notches
    <SafeAreaView style={styles.container}>
      <Text> This is a test </Text>
      <Image style={styles.logo} source={{ uri : "https://picsum.photos/200" }} />
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
  logo : {
    width : 200,
    height : 200
  }
});
