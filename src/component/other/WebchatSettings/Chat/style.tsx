import {StyleSheet} from 'react-native';
import { COLOR, commonStyles, FONT } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  MessageCard: {
    width: '92%',
    marginTop: '8%',
    alignItems: 'flex-start',
    // marginLeft: "2%",
    alignSelf: 'center',
  },
  UserImage: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
  },

name:  {
    alignSelf: 'flex-end',
    width: 30,
    height: 30,
    borderRadius: 20,
    bottom: 28,
    backgroundColor:COLOR.blue,
    ...commonStyles.center
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
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    backgroundColor: COLOR.gray_7,
    borderRadius: 9,
    borderTopLeftRadius: 2,
    // marginLeft: '7%',
  },
  MesgSenderContainer: {
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    backgroundColor: COLOR.mhroon_1,
    borderRadius: 7,
    borderTopRightRadius: 2,
    // marginRight: '7%',
    ...commonStyles.center
  },
  MessageLabel: {
    fontSize: 12,
    fontFamily: FONT.Geist_Medium,
    color: COLOR.gray_5,
    width: 150,
    flexWrap: 'wrap',
  },
  MessageLabel2: {
    fontSize: 12,
    fontFamily: FONT.Geist_Medium,
    color: COLOR.whites,
    // width: 140,
    // flexWrap: 'wrap',
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
    marginTop: '2%',
    marginBottom: '2%',
    marginLeft: '7%',
  },
  timeSenderAndRacive2: {
    fontSize: 10,
    fontFamily: FONT.Geist_Regular,
    color: COLOR.gary2,
    marginTop: '1%',
    marginBottom: '1%',
    marginRight: '7%',
  },
});

export default styles;
