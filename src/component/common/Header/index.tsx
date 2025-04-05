import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR, FONT, commonStyles} from '../../../themes/StyleGuides';
import {HeaderProp} from '../../../data/Types';

const Header = (prop: HeaderProp) => {
  const {firstIcon, title, secodIcon, onpesDrawer} = prop;
  return (
    <View style={styles.container}>
      {firstIcon ? (
        <TouchableOpacity onPress={onpesDrawer}>
          <Image style={styles.firsticon} source={firstIcon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.icon} />
      )}
      <Text style={styles.titleStyel}>{title}</Text>
      <View style={styles.icon} />
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    alignItems: 'center',
    height: 60,
    backgroundColor: COLOR.gray,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
  },
  icon: {width: 30, height: 30, resizeMode: 'contain'},
  firsticon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  titleStyel: {fontSize: 20, fontFamily: FONT.Geist_Bold, color: COLOR.gray_3},
});
