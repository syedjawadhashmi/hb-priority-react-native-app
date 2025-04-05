import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLOR.white,
  },
  dropDown: {
    backgroundColor: COLOR.gray_7,
    borderRadius: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: COLOR.perpal,
    paddingVertical: "3%",
    // alignItems: 'center',
    borderRadius: 12,
    paddingLeft:"5%"
  },
  expandedContent: {
    backgroundColor: COLOR.gray_7,
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginBottom: 16,
  },
  crmButton: {
    backgroundColor: COLOR.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 15,
  },
  crmButtonText: {
    fontWeight: '700',
    fontSize: 14,
    color: COLOR.gray_5,
  },
  buttonText: {
    color: COLOR.whites,
    fontWeight: 'bold',
    fontSize: 16,
  },
  expandedLastContent: {
    backgroundColor: COLOR.gray_7,
    paddingVertical: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginBottom: 16,
  },
  chatICon: {width: 20, height: 20, resizeMode: 'contain'},
  ChatCOntainer: {
    width: '90%',
    height: 100,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    padding: 5,
  },
  ChatTExt: {
    flex: 1,
    textAlignVertical: 'top',
    color: COLOR.black,
    fontSize: 14,
    fontWeight: '800',
  },
  AssignBtn: {
    width: '90%',
    borderRadius: 12,
    ...commonStyles.verticleView,
    backgroundColor: COLOR.whites,
    paddingHorizontal: '5%',
    paddingVertical:"2%",
    marginBottom:"5%"
  },
  AllBtn: {
    backgroundColor: COLOR.perpal_3,
    borderRadius: 10,
    paddingHorizontal: '3%',
  },
  ALlBtnText: {fontSize: 12, fontWeight: '800', color: COLOR.whites},
  MarketingText:{fontSize:14,fontWeight:"900",color:COLOR.gray_5,marginLeft:5},
  Assigninstalll: {
    width: '90%',
    borderRadius: 12,
    backgroundColor: COLOR.whites,
    paddingHorizontal: '5%',
    paddingVertical:"2%",
    marginBottom:"5%"
  },
  LisContaonet:{
    ...commonStyles.verticleView,
    width: '100%',
    alignSelf: 'flex-end',
    marginBottom:"4%",
    borderBottomWidth:1,
    borderBottomColor:COLOR.white,
    paddingHorizontal:"2%",
    paddingVertical:"1.5%"
  },
  ImageStyle:{
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: '2%',
  }
});
export default styles;
