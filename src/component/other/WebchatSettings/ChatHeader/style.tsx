import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {},
  tittle: {
    fontSize: 14,
    fontWeight: '800',
    color: COLOR.perpal_3,
    marginLeft: '5%',
  },
  UploadText: {fontSize: 10, fontWeight: '800', color: COLOR.perpal_3},
  chatIcon: {width: 20, height: 20, resizeMode: 'contain'},
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLOR.whites,
    ...commonStyles.center,
  },
  textInput:  {
    width: 120,
    height: 35,
    padding: 0,
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    marginRight: '5%',
    paddingHorizontal:8
  },
  comment:  {
    width: '90%',
    height: 70,
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    padding: 10,
    textAlignVertical: 'top',
    alignSelf:"center",
    color:COLOR.gray_5,
    marginBottom:"5%",
    fontSize:12
  }

});

export default styles;
