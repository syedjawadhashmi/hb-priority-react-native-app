import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: COLOR.gray_7,
    marginTop: '5%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: COLOR.perpal,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  headerText: {
    color: COLOR.white,
    fontSize: normalize(15),
    fontWeight: '900',
  },
  searchContainer: {
    backgroundColor: COLOR.white,
    borderRadius: 10,
    width:"90%",
    height:35,
    alignSelf:"center",
    marginTop:"5%",
    overflow:"hidden",
    paddingHorizontal:"3%",
    ...commonStyles.verticleView

  },
  searchInput: {
    backgroundColor: COLOR.white,
    flex: 1,
    fontSize: normalize(12),
    color: COLOR.black,
    padding: 0,
    
  },
  listContainer: {},
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLOR.white,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLOR.perpal,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: COLOR.white,
    fontSize: normalize(15),
    fontWeight: '900',
  },
  contactInfo: {
    width: '100%',
  },
  contactName: {
    fontSize: normalize(15),
    fontWeight: '900',
    color: COLOR.lightBlack,
  },
  contactDetails: {
    fontSize: normalize(15),
    color: COLOR.lightBlack,
    marginTop: 2,
  },
  bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position: 'absolute',
    bottom: 0,
  },
  NofoundContainer: {
    height: '65%',
    backgroundColor: COLOR.gray_7,
  },
  NoFountText: {
    fontSize: normalize(14),
    fontWeight: '700',
    color: COLOR.gray_5,
    alignSelf: 'center',
    marginTop: '10%',
  },
  NewContactBtn: {
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    borderRadius: 10,
    backgroundColor: COLOR.primary,
    alignSelf: 'center',
    ...commonStyles.center,
    marginTop: '5%',
  },
  BtnText: {
    fontSize: normalize(15),
    fontWeight: '700',
    color: COLOR.gray_5,
    alignSelf: 'center',
  },
  closeIcon:{width:8,height:8,resizeMode:"contain"}
});
export default styles;
