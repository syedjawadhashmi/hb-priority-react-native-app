import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  Title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLOR.gray_5,
    width: '60%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '12%',
    marginBottom:"7%"
  },
  btnStyle: {marginBottom: '4%', width: '80%', marginTop: '10%'},
  logo: {
    width: '60%',
    height: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
   marginTop:"50%",
    marginBottom:"20%"
  },
  button: {alignSelf: 'center'},
  discription: {
    fontSize: 13,
    fontWeight: '400',
    color: COLOR.gray_5,
    textAlign: 'center',
    width: '78.8%',
    alignSelf:"center",
  },
  
});

export default styles;
