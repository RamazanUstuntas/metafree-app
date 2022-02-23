<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { ScreenNavigator } from "./src/navigation/custom-navigator";

export default function App() {
  return (
    /* component which manages our navigation 
     tree and contains the navigation state.*/ 
    <NavigationContainer>
      <ScreenNavigator />
    </NavigationContainer>
  );
}
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> a021b0d8f07416a8b711b50b49ed8b74d3d613c3
