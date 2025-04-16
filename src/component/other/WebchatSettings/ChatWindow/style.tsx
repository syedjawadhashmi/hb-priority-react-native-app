import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    //   ...commonStyles.mainContainer
  },
  tittle: {
    fontSize: 14,
    fontWeight: '800',
    color: COLOR.perpal_3,
    marginLeft: '5%',
  },

  WindowSIzeContainer: {
    ...commonStyles.horizontalView,
    marginLeft: '1%',
    marginTop: '5%',
  },
  WindowSIze: {
    width: 120,
    height: 90,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
  },
  WindowsHeader: {
    width: 120,
    height: 20,
    backgroundColor: COLOR.gray_7,
    ...commonStyles.horizontalView,
  },
  WindowsCircle: {
    width: 8,
    height: 8,
    borderRadius: 6,
    backgroundColor: COLOR.gray_5,
    marginLeft: '4%',
  },
  SizeText: {
    fontSize: 12,
    fontWeight: '800',
    color: COLOR.perpal_3,
    alignSelf: 'center',
    marginTop: '2%',
  },

  location: {
    fontSize: 12,
    fontWeight: '400',
    color: COLOR.perpal_3,
    marginLeft: '5%',
    marginTop: '2%',
  },
  ErrorStyle:{width:15,height:15,resizeMode:"contain",marginLeft:"2%"},
  comment:  {
    width: '90%',
    height: 80,
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
