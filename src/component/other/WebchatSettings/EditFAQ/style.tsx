import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.lightBlack,
    ...commonStyles.center,
  },
  modal: {
    // paddingHorizontal: '4%',
    borderRadius: 10,
    backgroundColor: COLOR.white1,
    width: '90%',
  },
  titleContainer: {
    ...commonStyles.verticleView,
    marginTop: '3%',
    paddingHorizontal: '5%',
  },
  title: {fontSize: 20, fontWeight: '700', color: COLOR.gray_5},
  QuestionText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginTop: '3%',
    marginLeft: '5%',
    marginBottom:'2%'
    
  },
  QuestionInput: {
    width: '90%',
    height: 70,
    borderRadius: 15,
    backgroundColor: COLOR.whites,
    padding: 10,
    textAlignVertical: 'top',
    alignSelf: 'center',
  },
  btnContainer: {
    ...commonStyles.horizontalView,
    alignSelf: 'flex-end',
    marginTop: '10%',
    marginBottom: '10%',
  },
  btnSave: {
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    borderRadius: 10,
    marginRight: '5%',
    ...commonStyles.center,
  },
  SaveBtnText: {fontSize: 12, fontWeight: '700', color: COLOR.whites},
  Personalize:{fontSize:11,fontWeight:"400",color:COLOR.perpal_3,marginRight:"2%"},
  dropText:{fontSize:12,fontWeight:"700",color:COLOR.gray_5,marginTop:'2%'},
  ex:{fontSize:10,fontWeight:"400",color:COLOR.gray_5},
  PersonalizeDropDown:{
    width: 130,
    height: 180,
    borderWidth: 1,
    borderColor: COLOR.perpal_3,
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: "19%",
    zIndex: 999,
    // t:"5%",
    right: '7%',
    backgroundColor: COLOR.whites,
    borderRadius: 13,
    justifyContent: 'center',
  }
});

export default styles;
