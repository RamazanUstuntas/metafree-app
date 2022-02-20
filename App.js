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
