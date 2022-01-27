import { StyleSheet } from 'react-native';

import Colors from 'utils/colors';

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 8,
    backgroundColor: Colors.zircon,
  },
  marginBottom5: {
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  errorMessage: {
    display: 'flex',
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 10,
    color: Colors.error,
    // height: 15,
  },
  btn: {
    marginTop: 10,
    width: '100%',
    backgroundColor: Colors.green,
  },
  btnText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
