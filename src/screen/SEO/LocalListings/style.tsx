import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  TitleText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '5%',
    marginTop: '5%',
    marginBottom: '10%',
  },
  RatingCard: {
    width: '90%',
    // height: 80,
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    borderRadius: 10,
    ...commonStyles.verticleView,
    paddingVertical: '4%',
  },
  RateDot: {
    width: 10,
    height: 10,
    borderRadius: 15,
    marginRight: '6%',
  },
  DotTitle: {fontSize: 10, fontWeight: '700', color: COLOR.gray_5},
  DotContiner: {
    ...commonStyles.horizontalView,
    marginLeft: '10%',
    marginTop: '2%',
  },
  btnText: {fontSize: 10, fontWeight: '400', color: COLOR.white1},
  btn: {
    paddingHorizontal: '2%',
    paddingVertical: '6%',
    borderRadius: 10,
    backgroundColor: COLOR.perpal,
    ...commonStyles.center,
    marginTop: '5%',
  },
  locarionTitle: {fontSize: 12, fontWeight: '700', color: COLOR.gray_5},
  map: {
    width: 180,
    height: 180,
    alignSelf: 'center',
  },
  RangingShow: {
    width: 25,
    height: 25,
    borderRadius: 15,
    ...commonStyles.center,
    margin: '1.5%',
  },
  RangingShowText: {fontSize: 15, fontWeight: '700', color: COLOR.whites},
  RankingCard: {
    width: '90%',
    // height: 80,
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    borderRadius: 10,
    ...commonStyles.verticleView,
  },
  btnContainer: {alignSelf: 'flex-start', marginLeft: '5%', marginTop: '10%'},
  moreBtn:{alignSelf:"flex-end",marginRight:'5%',marginTop:'2%'},
  bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position:"absolute",
    bottom:0
  },
});

export default styles;
