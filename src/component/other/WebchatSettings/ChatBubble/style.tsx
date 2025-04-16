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
  chatIcon: {width: 20, height: 20, resizeMode: 'contain'},
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLOR.whites,
    ...commonStyles.center,
  },
  UploadText: {fontSize: 10, fontWeight: '800', color: COLOR.perpal_3},
  commentStyle: {
    width: '90%',
    height: 70,
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    marginTop: '5%',
    padding:10,
    textAlignVertical:"top",
    marginBottom:"10%",
    fontSize:12,
    fontWeight:"400",
    color:COLOR.gray_5
  },
});

export default styles;
