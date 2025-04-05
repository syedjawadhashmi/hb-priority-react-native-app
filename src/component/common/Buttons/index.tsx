import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Buttonprops} from '../../../data/Types';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const Buttons = (props: Buttonprops) => {
  const {onpress, title, container, titleStyle} = props;
  return (
    <TouchableOpacity style={[styles.container, container]} onPress={onpress}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Buttons;

const styles = StyleSheet.create({
  container: {
    width: '65%',
    borderRadius: 15,
    height: 38,
    backgroundColor: COLOR.perpal,
    ...commonStyles.center,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: COLOR.whites,
  },
});
