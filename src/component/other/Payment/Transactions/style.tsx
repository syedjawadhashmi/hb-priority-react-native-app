import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, height, width} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
    marginBottom:"20%"
  },
  mainBtnContainer: {
    ...commonStyles.horizontalView,
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginBottom:'2%'
  },
  btnMain: {
    paddingVertical: height * 0.009, 
    paddingHorizontal: width * 0.02, 
    backgroundColor: COLOR.perpal,
    borderRadius: width * 0.02, 
    ...commonStyles.center,
    marginRight: width * 0.01,
  },
  btnText: {fontSize: 9, color: COLOR.whites, fontWeight: '700'},
});

export default styles;
