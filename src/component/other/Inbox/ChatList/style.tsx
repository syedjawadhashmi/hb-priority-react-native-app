import {StyleSheet} from 'react-native';
import { COLOR, commonStyles, FONT } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  MessageCard: {
    width: '92%',
    marginTop: '3%',
    alignItems: 'flex-start',
    // marginLeft: "2%",
    alignSelf: 'center',
  },
  UserImage: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
  },

  name: {
    alignSelf: 'flex-end',
    width: 30,
    height: 30,
    borderRadius: 20,
    bottom: 28,
    backgroundColor: COLOR.blue,
    ...commonStyles.center,
  },
  dateContainer: {
    backgroundColor: COLOR.gray,
    borderRadius: 10,
    width: '35%',
    height: 30,
    ...commonStyles.center,
    marginTop: '5%',
    alignSelf: 'center',
    marginBottom: '5%',
  },
  dates: {
    fontSize: 15,
    color: COLOR.gray_3,
    alignSelf: 'center',
  },
  MessageContainer: {
    paddingVertical: '3%',
    paddingHorizontal: '5%',
    backgroundColor: COLOR.perpal_3,
    borderRadius: 15,
    borderBottomLeftRadius: 2,
    marginLeft: '7%',
  },
  MesgSenderContainer: {
    paddingVertical: '5%',
    paddingHorizontal: '8%',
    backgroundColor: COLOR.primary,
    borderRadius: 15,
    borderBottomRightRadius: 2,
    marginRight: '7%',
  },
  MessageLabel: {
    fontSize: 10,
    color: COLOR.white_5,
    width: 150,
    flexWrap: 'wrap',
    fontWeight: '400',
  },
  MessageLabel2: {
    fontSize: 10,
    color: COLOR.whites,
    width: 140,
    flexWrap: 'wrap',
    fontWeight:"400"
  },
  typeImage: {
    width: 97,
    height: 32,
    position: 'absolute',
    bottom: '17%',
    resizeMode: 'contain',
    left: 6,
  },
  timeSenderAndRacive: {
    fontSize: 10,
    fontFamily: FONT.Geist_Regular,
    color: COLOR.gary2,
    marginTop: '4%',
    marginBottom: '5%',
    marginLeft: '7%',
  },
  timeSenderAndRacive2: {
    fontSize: 10,
    fontFamily: FONT.Geist_Regular,
    color: COLOR.gary2,
    marginTop: '4%',
    marginBottom: '5%',
    marginRight: '7%',
  },
  ChatPart: {
    position: 'absolute',
    tintColor: COLOR.perpal_3,
    width: 15,
    height: 15,
    resizeMode: 'contain',
    bottom: 0,
    left: -12,
  },
  CatPart_1: {
    position: 'absolute',
    tintColor: COLOR.primary,
    width: 15,
    height: 15,
    resizeMode: 'contain',
    bottom: 0,
    alignSelf: 'flex-end',
    right: -11,
  },
});

export default styles;
