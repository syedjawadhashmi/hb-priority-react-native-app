import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, hp, normalize, wp} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {...commonStyles.mainContainer},

  buttonRow: {
    marginBottom: '2%',
    borderRadius: 10,
    backgroundColor: COLOR.gray_7,
    width: '90%',
    height: 70,
    alignSelf: 'center',
    ...commonStyles.center,
  },
  addButton: {
    backgroundColor: COLOR.perpal_3,
    borderRadius: 8,
    paddingHorizontal: '3%',
    height: 30,
    ...commonStyles.center,
  },
  addButtonText: {color: COLOR.whites, fontSize: normalize(12), fontWeight: '700'},
  folderTitle: {
    fontSize: normalize(10),
    fontWeight: 'bold',
    color: '#6d6d6d',
    marginTop: "2%",
    alignSelf:"center"
  },
  folderGrid: {
    ...commonStyles.center,
    width: wp("33%"),
    height: hp("16%"),
    backgroundColor: COLOR.gray_7,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: normalize(12),
    fontWeight: '800',
    marginBottom: '5%',
    color: COLOR.gray_5,
    marginLeft: '6%',
  },
  capturedImageContainer: {alignItems: 'center', marginVertical: 20},
  capturedImage: {width: 200, height: 200, borderRadius: 8},
  bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position:"absolute",
    bottom:0
  },
  FolderCotainer: {...commonStyles.horizontalView,marginLeft:"5%"},
  FolderICon: {width: 50, height: 50, resizeMode: 'contain'},
  PlusCircle: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: COLOR.whites,
    ...commonStyles.center,
  },
  plisIcon:{width:20,height:20,resizeMode:"contain",tintColor:COLOR.perpal_3}
});

export default styles;
