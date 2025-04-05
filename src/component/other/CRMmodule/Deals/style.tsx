import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, width} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  sattingContainer: {...commonStyles.verticleView, paddingHorizontal: '5%'},
  NewStageBtn: {
    paddingHorizontal: '2%',
    height: 32,
    backgroundColor: COLOR.perpal,
    borderRadius: 7,
    ...commonStyles.center,
  },
  btnText: {fontSize: 10, fontWeight: '700', color: COLOR.whites},
  dropDown: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    tintColor: COLOR.black,
    marginHorizontal: '1.5%',
  },
  containerText:{width:width*0.5,backgroundColor:COLOR.gray_7},
  TypeText: {fontSize: 10, fontWeight: '700', color: COLOR.perpal},
  containerList: {marginTop: '1%',marginBottom:"85%"},
  togalContainer: {
    ...commonStyles.verticleView,
    alignSelf: 'flex-end',
    marginRight:"5%",
    marginTop:"4%",
  },
  titletogal: {
    fontSize: 12,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft:'5%'
  },
  DropStage: {
    position: 'absolute',
    backgroundColor: COLOR.whites,
    zIndex: 1,
    borderWidth: 1.3,
    borderColor: COLOR.perpal,
    borderRadius: 14,
    alignSelf:"center",
    padding: 9,
    ...commonStyles.verticleView,
    width:"85%"
  },
  ExportDown: {
    position: 'absolute',
    backgroundColor: COLOR.whites,
    zIndex: 1,
    borderWidth: 1.3,
    borderColor: COLOR.perpal,
    borderRadius: 14,
    alignSelf:"center",
    top: '12%',
    overflow:"hidden",
    paddingVertical:"2%"
  },
  DropText:{fontSize:11,fontWeight:"500",color:COLOR.perpal_2}
});

export default styles;
