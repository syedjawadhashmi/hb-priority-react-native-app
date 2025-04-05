import {StyleSheet} from 'react-native';

import {Dimensions} from 'react-native';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.gray_4,
    borderRadius: 15,
  },
  header: {
    backgroundColor: COLOR.perpal,
    padding: 16,
    borderRadius: 15,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: COLOR.whites,
  },
  headerDescription: {
    fontSize: 12,
    color: COLOR.lightBlack,
    marginTop: 4,
    fontWeight: '900',
    paddingLeft: 10,
    marginBottom: '8%',
  },
  label: {
    fontSize: 15,
    color: COLOR.lightBlack,
    marginBottom: 8,
    marginTop: 16,
    paddingLeft: 10,
    fontWeight: '900',
  },
  dropdown: {
    backgroundColor: COLOR.white,
    ...commonStyles.horizontalView,
    borderRadius: 15,
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal: 10,
    paddingHorizontal: 8,
  },
  input: {
    fontSize: 14,
    color: COLOR.lightBlack,
  },
  checkboxRow: {
    ...commonStyles.horizontalView,
    marginBottom: 5,
    paddingLeft: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: COLOR.gray,
    marginRight: 5,
    backgroundColor: COLOR.white,
    borderRadius: 3,
  },
  checkboxChecked: {
    backgroundColor: COLOR.primary,
  },
  checkmark: {
    textAlign: 'center',
    fontWeight: '900',
  },
  checkboxText: {
    fontSize: 12,
    color: COLOR.lightBlack,
    marginLeft: 8,
    fontWeight: '900',
    flex: 1,
  },
  toggleRow: {
    ...commonStyles.horizontalView,
    marginBottom: 16,
    marginTop: '5%',
  },
  toggleText: {
    fontSize: 14,
    color: COLOR.lightBlack,
    marginLeft: 8,
  },
  switch: {},

  inputRow: {
    ...commonStyles.horizontalView,
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor: COLOR.white,
    width: '80%',
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  inputSmall: {
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
    fontSize: 14,
    color: COLOR.lightBlack,
  },
  inputUnit: {
    fontSize: 14,
    color: COLOR.lightBlack,
    fontWeight: '400',
  },
  DropDownIcon: {
    position: 'absolute',
    right: 5,
    bottom: '35%',
  },
  textArea: {
    backgroundColor: COLOR.white,
    borderRadius: 15,
    padding: 12,
    minHeight: 80,
    textAlignVertical: 'top',
    fontSize: 14,
    color: COLOR.lightBlack,
    marginBottom: '20%',
  },
  bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position: 'absolute',
    bottom: 0,
  },
  ments: {
    backgroundColor: COLOR.white_3,
    width: 100,
    height: 40,
    ...commonStyles.verticleView,
  },
  DropIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    tintColor: COLOR.gray_5,
  },
});

export default styles;
