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
// Firebase Authentication
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// Import general styles file
import { AppStyles } from "../styles/AppStyles";
// for Icons
import Icon from "react-native-vector-icons/Feather";
// import header and footer svgs
import { WavyHeader, WavyFooter } from "../components/WavyShapes";

// Login Screen
export default function LoginScreen({ navigation }) {
  // Create statements
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Login
  const loginHandler = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          alert("Signed In");
          navigation.navigate("Home");
          setEmail("");
          setPassword("");
        } else {
          alert("Something went wrong..");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      {/* Header Svg */}
      <WavyHeader customStyles={styles.svgCurve}></WavyHeader>
      {/* Login Text */}
      <Text style={styles.title}>Login</Text>
      {/* Form Container */}
      <View style={styles.formContainer}>
        <View style={[styles.InputContainer, AppStyles.InputAreaWithShadow]}>
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
          {/* Form seperator line */}
          <View style={styles.formSeperator} />
          {/* Login Button */}
          <View style={styles.buttonLogin}>
            <TouchableOpacity
              style={[styles.roundButton1, AppStyles.ButtonWithShadow]}
              onPress={loginHandler}
            >
              <Icon name="arrow-right" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
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
        </View>
      </View>
      {/* Forgot Button */}
      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={AppStyles.forgotText}>Forgot ?</Text>
        </TouchableOpacity>
      </View>
      {/* Register Button  */}
      <View style={styles.registerContainer}>
        <TouchableOpacity
          style={[styles.registerRouter, AppStyles.ButtonWithShadow]}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={AppStyles.registerText}>Register</Text>
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
    marginBottom: 20,
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
  buttonLogin: {
    position: "absolute",
    marginLeft: "95%",
    marginTop: "14%",
  },
  registerContainer: {
    width: "100%",
  },
  registerRouter: {
    width: AppStyles.register.main,
    height: AppStyles.register.height,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: AppStyles.color.grey,
    borderTopRightRadius: AppStyles.borderRadius.main,
    borderBottomRightRadius: AppStyles.borderRadius.main,
    backgroundColor: AppStyles.color.white,
    marginTop: "18%",
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
