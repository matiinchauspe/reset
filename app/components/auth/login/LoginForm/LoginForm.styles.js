import { StyleSheet } from "react-native";

import Colors from "@utils/colors";

const styles = StyleSheet.create({
  formContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  icon: {
    padding: 10,
    color: "#c1c1c1",
  },
  btn: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    fontWeight: "bold",
    width: "100%",
    borderRadius: 5,
    padding: 10,
    backgroundColor: Colors.green,
  },
  btnText: {
    color: Colors.white,
    fontWeight: "bold",
  },
});

export default styles;
