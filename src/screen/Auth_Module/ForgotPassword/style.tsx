import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, hp, normalize} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  Title: {
    fontSize: normalize(25),
    fontWeight: '600',
    color: COLOR.perpal_3,
    marginLeft: '5%',
    marginTop: hp('22%'),
  },
  discription: {
    fontSize: normalize(15),
    fontWeight: '400',
    color: COLOR.gray_5,
    marginTop: '1%',
    marginLeft: '5%',
    marginBottom: '7%',
  },
  TextInputStyle: {
    width: '91%',
    height: 50,
    backgroundColor: COLOR.gray_7,
    marginTop: '5%',
  },
  LoginBtn: {
    height: 40,
    borderRadius: 10,
    backgroundColor: COLOR.primary,
    alignSelf:"center",
    ...commonStyles.center,
    marginRight: '5%',
    paddingHorizontal:"7%",
    marginTop:"7%"
  },
  LognText: {fontSize: 16, fontWeight: '800', color: COLOR.black},
  forgetText: {fontSize: 10, fontWeight: '500', color: COLOR.black},
  ForgetBtn: {marginLeft: '5%', marginVertical: '2%'},
  line: {width: 80, height: 1, backgroundColor: COLOR.black},
  OrLoginCOntoaner: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    marginTop: '6%',
  },
  OrLogintext: {fontSize: 14, fontWeight: '400', color: COLOR.gray_5},
  linkBtn: {
    width: '70%',
    height: 40,
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    ...commonStyles.center,
    alignSelf:"center",
    marginTop:"5%"
  },
  Icons: {width: 20, height: 20, resizeMode: 'contain'},
  textCOntainer:{...commonStyles.horizontalView,alignSelf:"center",marginTop:"5%"},
  SignUpText:{fontSize:16,fontWeight:"400",color:COLOR.gray_5}
});

export default styles;
