// import react-native components
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// Firebase Authentication for user's info
import { getAuth } from "firebase/auth";
// Configuration file for communicate with firebase
import { app } from "../../firebase-config";

// Create Auth and Get User's info
const auth = getAuth();
// Create HomeScreen
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Welcome Text */}
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Welcome to Home Page</Text>
      </View>
      {/* Last Login */}
      <Text style={styles.lastSignInText}>Your last login:</Text>
      <Text style={styles.lastSignInText}>
        {auth.currentUser.metadata.lastSignInTime}
      </Text>
      {/* Show Email */}
      <Text style={styles.lastSignInText}>Email: {auth.currentUser.email}</Text>
      {/* Sign Out Button  */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          auth
            .signOut()
            .then(() => {
              alert("Logged Out");
              navigation.navigate("Login");
            })
            .catch((error) => alert(error.message));
        }}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

// Create Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EEE6CE",
  },
  button: {
    backgroundColor: "#FF3300",
    width: "80%",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: "30%",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  welcomeText: {
    color: "#313552",
    fontWeight: "700",
    fontSize: 32,
    marginTop: "5%",
  },
  welcomeTextContainer: {
    alignItems: "center",
    marginTop: "30%",
    marginBottom: "30%",
  },
  lastSignInText: {
    color: "#313552",
    fontWeight: "700",
    fontSize: 25,
  },
});
