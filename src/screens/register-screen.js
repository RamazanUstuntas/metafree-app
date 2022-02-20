// import react-native components you use
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import react components you use
import { useState } from "react";
// Configuration file for communicate with firebase
import { app } from "../../firebase-config";
// Firebase Authentication - create user
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Import general styles file
import { AppStyles } from "../styles/AppStyles";
// for Icons
import Icon from "react-native-vector-icons/Feather";
// import header and footer svgs
import { WavyHeader, WavyFooter } from "../components/WavyShapes";

// Register Screen
export default function RegisterScreen({ navigation }) {
  // Create statements
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Sign Up handle func.
  const registerHandler = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password, userName)
      .then((userCredential) => {
        if (userCredential.user) {
          alert("Account has been created.");
          navigation.navigate("Login");
        } else {
          alert("Account has not been created :(");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      {/* Header Svg */}
      <WavyHeader customStyles={styles.svgCurve}></WavyHeader>
      {/* Register Text */}
      <Text style={styles.title}>Register</Text>
      {/* Form Container */}
      <View style={styles.formContainer}>
        <View style={[styles.InputContainer, AppStyles.InputAreaWithShadow]}>
          {/* User Name Area */}
          <View style={styles.InputArea}>
            <Icon name="user" size={30} color="#999" />
            <TextInput
              style={styles.body}
              placeholder="User Name"
              placeholderTextColor={AppStyles.color.grey}
              value={userName}
              onChangeText={(text) => setUserName(text)}
            ></TextInput>
          </View>
          {/* Form Seperator Line */}
          <View style={styles.formSeperator} />
          {/* Email Area */}
          <View style={styles.InputArea}>
            <Icon name="user" size={30} color="#999" />
            <TextInput
              style={styles.body}
              placeholder="Email"
              placeholderTextColor={AppStyles.color.grey}
              value={email}
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
          </View>
          {/* Form Seperator Line */}
          <View style={styles.formSeperator} />
          {/* Password Area */}
          <View style={styles.InputArea}>
            <Icon name="lock" size={30} color="#999" />
            <TextInput
              style={styles.body}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            ></TextInput>
          </View>
          {/* Register Button */}
          <View style={styles.buttonRegister}>
            <TouchableOpacity
              style={[styles.roundButton1, AppStyles.ButtonWithShadow]}
              onPress={registerHandler}
            >
              <Icon name="check" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Login Router Button */}
      <View style={styles.loginContainer}>
        <TouchableOpacity
          style={[styles.loginRouter, AppStyles.ButtonWithShadow]}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={AppStyles.registerText}>Login</Text>
        </TouchableOpacity>
      </View>
      {/* Footer Svg */}
      <WavyFooter customStyles={styles.svgCurve}></WavyFooter>
    </View>
  );
}

// Create Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: AppStyles.color.bgWhite,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.tint,
    textAlign: "center",
    fontFamily: "",
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: "11%",
    borderStyle: "solid",
    borderColor: AppStyles.color.grey,
    borderTopRightRadius: AppStyles.borderRadius.main,
    borderBottomRightRadius: AppStyles.borderRadius.main,
    flexDirection: "column",
    backgroundColor: AppStyles.color.white,
  },
  InputArea: {
    flexDirection: "row",
    padding: "5%",
  },
  body: {
    height: 42,
    paddingBottom: "3%",
    paddingLeft: "9%",
    paddingRight: "15%",
    color: AppStyles.color.text,
    fontSize: AppStyles.fontSize.input,
    fontWeight: "bold",
  },
  svgCurve: {
    // position: 'absolute',
    width: "100%",
  },
  roundButton1: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: AppStyles.color.roundButton1,
    left: "-100%",
    position: "absolute",
  },
  formContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonRegister: {
    position: "absolute",
    marginLeft: "95%",
    marginTop: "25%",
  },
  loginContainer: {
    width: "100%",
  },
  loginRouter: {
    width: AppStyles.register.main,
    height: AppStyles.register.height,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: AppStyles.color.grey,
    borderTopRightRadius: AppStyles.borderRadius.main,
    borderBottomRightRadius: AppStyles.borderRadius.main,
    backgroundColor: AppStyles.color.white,
    marginTop: "20%",
  },
  forgotContainer: {
    marginLeft: "65%",
    marginTop: "10%",
  },
  formSeperator: {
    borderBottomColor: "#f0f0f0",
    borderBottomWidth: 4,
  },
});
