import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  inputStyle: {
    marginTop: '25%',
    width: '80%',
  },
  button: {alignSelf: 'center'},
  searchBarStyle: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: '35%',
    paddingVertical: '5%',
    height: '50%',
  },
  title: {fontSize: 12, fontWeight: '700', color: COLOR.black_4},
  ListConTainer: {alignSelf: 'center', width: '70%', height: 40},
  discription: {fontSize: 10, fontWeight: '400', color: COLOR.black_4},
  largeSearchBarStyle: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: '35%',
    paddingVertical: '5%',
  },
  btnStyle: {width: '80%', marginBottom: '4%'},
  CityStateContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '10%',
    marginBottom: '4%',
  },
  CityAndState: {width: '48.5%'},
  DropDown: {width:"69%",right:18,height:37},
  feildsContainer:{marginBottom:"6%"},
  logo: {
    width: '60%',
    height: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop:"20%",
    
  },
});

export default styles;
