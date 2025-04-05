import {StyleSheet} from 'react-native';
import { COLOR, commonStyles, FONT } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  mainCOntainer: {...commonStyles.horizontalView},
  image: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    borderRadius: 15,
    marginLeft: '3%',
  },
  name: {
    fontSize: 19,
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft: '3.6%',
  },
  date: {
    fontSize: 12,
    fontWeight: '400',
    color: COLOR.gray_8,
    marginLeft: '5%',
    marginTop: '1%',
  },
  for: {
    fontSize: 14,
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft: '15.8%',
  },
  discription:{
    fontSize: 10,
    fontWeight: '400',
    color: COLOR.gray_5,
    width:"91%",
    alignSelf:"center",
    flexWrap:"wrap",
    marginLeft:'5%',
    marginTop:"4%"
  }
});

export default styles;
