// To use stack navigator, import it
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Specific pages without bottom-tab
import LoginScreen from "../screens/login-screen";
import RegisterScreen from "../screens/register-screen";
// A set of pages containing a bottom-tab
import BottomTabs from "./bottom-tab";

/* createNativeStackNavigator is a function 
that returns an object containing 2 properties: 
Screen and Navigator.  */
// Create it
const Stack = createNativeStackNavigator();

//The Navigator should contain Screen elements as its children to define the configuration for routes.
const ScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#B8405E",
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#B8405E",
          },
          headerTintColor: "white",
        }}
      />
      {/* it includes HomePage, User Page, PostPage */}
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#B8405E",
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
};

export { ScreenNavigator };
