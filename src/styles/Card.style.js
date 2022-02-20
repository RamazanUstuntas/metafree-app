// Card Component styles file
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 10,
    // borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
  },
  body: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    marginBottom: 3,
  },
  text: {
    fontSize: 18,
    margin: 10,
    marginTop: 3,
  },
  button_1: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  button_2: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  button_title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  buttons_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
});
