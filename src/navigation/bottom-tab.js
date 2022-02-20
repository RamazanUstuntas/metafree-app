// To use this tab navigator, import it
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// for icons
import Icon from "react-native-vector-icons/Feather";

// The pages that will be included in the bottom-tab
import HomeScreen from "../screens/home-screen";
import UserScreen from "../screens/user-screen";
import PostScreen from "../screens/post-screen";

// Create bottom-tab
const Tab = createBottomTabNavigator();

/* it also contains the contents of the defined pages. 
We will place it as a whole in the stack screen as BottomTabs. */
const BottomTabs = () => {
  return (
    <Tab.Navigator
      // tab design options
      screenOptions={{
        tabBarStyle: [
          {
            position: "absolute",
            elevation: 0,
            backgroundColor: "#ffffff",
            height: 50,
            display: "flex",
            // it calls the style I defined below
            ...styles.shadow,
          },
          null,
        ],
        headerStyle: {
          backgroundColor: "#FA9600",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarShowLabel: false,
      }}
    >
      {/* Home Page */}
      <Tab.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Icon
                name="home"
                style={{ color: focused ? "#242625" : "#D0D0D0" }}
                size={30}
                color="#999"
              />
            </View>
          ),
        }}
      />
      {/* Users Page */}
      <Tab.Screen
        name="Users"
        component={UserScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Icon
                name="users"
                style={{ color: focused ? "#242625" : "#D0D0D0" }}
                size={30}
                color="#999"
              />
            </View>
          ),
        }}
      />
      {/* Posts Page */}
      <Tab.Screen
        name="Posts"
        component={PostScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Icon
                name="file-text"
                style={{ color: focused ? "#242625" : "#D0D0D0" }}
                size={30}
                color="#999"
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

// Create Style
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
