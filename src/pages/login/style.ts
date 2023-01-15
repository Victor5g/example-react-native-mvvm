import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingleft: 40,
    paddingRight: 40,
  },

  input: {
    borderColor: "#000",
    borderWidth: 0.3,
    borderRadius: 6,
    width: 230,
    height: 35,
    marginBottom: 50,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    placeholderTextColor: "#808080",
    paddingLeft: 8,
    paddingRight: 8,
  },

  button: {
    width: 140,
    height: 38,
    backgroundColor: "#000",
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonTitle: {
    color: "#FFFF",
    fontSize: 23,
  },
});

export default style;
