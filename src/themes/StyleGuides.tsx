import {StyleSheet,Dimensions, Platform, PixelRatio} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;
export function normalize(size:any) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
const ACTIVEOPACITY = 0.5;

const COLOR = {
  // perpal: '#672296',
  perpal: '#5F1762',
  perpal_2:"#5F1762",
  perpal_3:'#631363',
  primary: '#58e84c',
  primary1: 'rgba(84, 167, 255, 0.5)',
  Primary_2:"#6BC43C",
  DarkBlue: '#222751',
  errorRed: '#FF0000',
  black1: 'rgba(64, 71, 83, 1)',
  black: '#000',
  black_2: '#3D3D3D',
  black_3: '#101928',
  lightBlack: 'rgba(0, 0, 0, 0.7)',
  black_1: '#414141',
  black_4: '#3D3D3D',
  black_5:"#27272D",
  white: '#f5f7ff',
  whites: '#ffff',
  white1: '#F4F4F4',
  white2: 'rgba(230, 242, 255, 1)',
  white_3: '#F2EDFD',
  white_4:"#E0E0E0",
  white_5:"#F5F5F7",
  darkGray: '#404753',
  gray: '#d0d2d9',
  gray1: '#80a190',
  gary2: '#667085',
  gray_3: '#5F656F',
  gray_4: '#E0E0E0',
  gray_5: '#6D6D6D',
  gray_6: '#8C8C8C',
  gray_7: '#E0E0E0',
  gray_8: '#B3B3B3',
  gray_9:"#BCBCBC",
  gray_10:"#C6C6C6",
  gray_11:"#CCCCCC",
  gray_12:'#D8D8D8',
  gray_13:"#7C7C7C",
  gray_14:"#606060",
  gray_15:"#8C8C8C",
  red: '#ED0303',
  red_1:"#B70000",
  SkyBlue: '#649DF9',
  blue:'#3838AD',
  green:"#3FA04A",
  blackBlur:'rgba(0, 0, 0, 0.4)',
  mhroon:"#CF232A",
  mhroon_1:"#6B0B22",
  mhroon_2:"#A0002A",
  SkyBlue_1:"#1976D3"
};

const FONT = {
  Geist_Regular: 'Arimo-Regular',
  Geist_Medium: 'Arimo-Medium',
  Geist_SemiBold: 'Arimo-SemiBold',
  Geist_Bold: 'Arimo-Bold',
  Geist_Thin: 'Arimo-BoldItalic',
};

const TEXT_STYLE = StyleSheet.create({
  text_regular: {
    fontSize: 14,
    fontFamily: FONT.Geist_Regular,
    color: COLOR.black,
  },
  regular: {
    fontSize: 14,
    fontFamily: FONT.Geist_Regular,
    color: COLOR.black1,
  },
  text_medium: {
    fontSize: 14,
    fontFamily: FONT.Geist_Medium,
    color: COLOR.black,
  },
  text_small: {
    fontSize: normalize(14),
    fontFamily: FONT.Geist_SemiBold,
    color: COLOR.black,
  },
  subTitle: {
    fontSize: 18,
    fontFamily: FONT.Geist_SemiBold,
    color: COLOR.black,
  },
  title: {
    fontSize: 22,
    fontFamily: FONT.Geist_Bold,
    color: COLOR.black,
  },
  text_smallSemiBold: {
    fontSize: 10,
    fontFamily: FONT.Geist_SemiBold,
    color: COLOR.black,
  },
  AuthWellComeText: {
    fontSize: 20,
    fontFamily: FONT.Geist_SemiBold,
    color: COLOR.black,
    marginLeft: '5%',
    marginTop: '10%',
    marginBottom: '3%',
  },
});

const commonStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.white1,
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  justifyView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {width, height, ACTIVEOPACITY, FONT, COLOR, TEXT_STYLE, commonStyles,hp,wp};