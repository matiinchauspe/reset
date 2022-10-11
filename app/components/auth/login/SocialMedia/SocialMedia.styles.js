import { StyleSheet } from 'react-native';

import Colors from '@utils/colors';

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.blue,
  },
  btnText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  btnIcon: {
    color: Colors.white,
    marginHorizontal: 10,
  },
});

export default styles;
