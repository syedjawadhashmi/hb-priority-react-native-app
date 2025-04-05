import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '../../../assest';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import {DropDownButtonProps} from '../../../data/Types';

const DropDownButton = (props: DropDownButtonProps) => {
  const {title, onpress} = props;
  return (
    <TouchableOpacity style={styles.dropDowN} onPress={onpress} >
      <Text style={styles.text}>{title}</Text>
      <Image source={Icon.dropDown2} style={styles.DropwDownIcon} />
    </TouchableOpacity>
  );
};
export default DropDownButton;

const styles = StyleSheet.create({
  text: {fontSize: 12, fontWeight: '700', color: COLOR.gray_5},
  dropDowN: {
    width: '95%',
    height: 20,
    backgroundColor: COLOR.whites,
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    alignSelf: 'center',
    borderRadius: 13,
    marginBottom: '3%',
    top:2
  },
  DropwDownIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    tintColor: COLOR.perpal,
    marginRight: '4%',
    top:2
  },
});
