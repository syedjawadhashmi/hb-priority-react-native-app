import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';
const {width, height} = Dimensions.get('window');

const InternalMessages = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Internal Messages</Text>
      <TouchableOpacity>
        <Image source={Icon.RightlongArrow} style={styles.Arrow} />
      </TouchableOpacity>
      <View style={styles.ImagesAndDropDown}>
        <Image source={Icon.DashImage} style={styles.Chatimage} />

        <TouchableOpacity style={styles.DropDown}>
          <Text style={styles.DropDowntext}>Online</Text>
          <Image source={Icon.DropDown} style={styles.DropDowImage} />
        </TouchableOpacity>
      </View>
      <Text style={styles.pendingText}>Pending Messages</Text>
      <Text style={styles.numberText}>7</Text>
    </View>
  );
};
export default InternalMessages;

const styles = StyleSheet.create({
  container: {
    width: width * 0.3,
    height: 107,
    borderWidth: 1.5,
    borderRadius: 25,
    backgroundColor: COLOR.gray_7,
    borderColor: COLOR.perpal_3,
  },
  Title: {
    fontSize: normalize(10),
    fontWeight: '700',
    color: COLOR.black,
    marginTop: '5%',
    marginLeft: '10%',
  },
  Arrow: {
    width: 15,
    height: 10,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginTop: '3%',
  },
  Chatimage: {width: 50, height: 30, resizeMode: 'contain'},
  DropDown: {
    paddingVertical: '1%',
    backgroundColor: COLOR.gray_5,
    ...commonStyles.verticleView,
    borderRadius: 20,
    width: 35,
    paddingHorizontal: '2%',
  },
  DropDowImage: {width: 10, height: 10, resizeMode: 'contain'},
  DropDowntext: {fontSize: normalize(6), fontWeight: '400', color: COLOR.whites},
  ImagesAndDropDown: {...commonStyles.verticleView, paddingHorizontal: '5%'},
  pendingText: {
    fontSize: normalize(9),
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '5%',
  },
  numberText: {
    fontSize: normalize(18),
    fontWeight: '700',
    color: COLOR.primary,
    marginLeft: '6%',
  },
});
