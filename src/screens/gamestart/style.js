import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
  },
  text: {
    color: '#2B4570',
    fontSize: 30,
    flexGrow: 0.05,
    marginTop: '5%',
    fontFamily: 'Roboto-Medium',
  },
  containerButtons: {
    flexDirection: 'row',
  },
  customBtnText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'Roboto-Regular',
  },
  customBtnBG: {
    backgroundColor: '#7180AC',
    padding: '3%',
    borderRadius: 5,
    marginHorizontal: '.8%',
  },
});
