import { StyleSheet } from "react-native";

import Colors from "@utils/colors";

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 8,
    backgroundColor: Colors.zircon,
  },
  marginBottom5: {
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
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
