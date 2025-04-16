import {View, StyleSheet, Text, Modal, TouchableOpacity} from 'react-native';
import ColorPicker, {Panel1, HueSlider} from 'reanimated-color-picker';

import styles from './style';
import {ColorickerProps} from '../../../../data/Types';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const BackgroundColorPicker = (props: ColorickerProps) => {
  const {isoPen, color, onpres, selectColor,close} = props;

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 10,
          fontWeight: '700',
          color: COLOR.gray_5,
          alignSelf: 'flex-start',
          marginLeft: '5%',
          marginBottom: '2%',
        }}>
        Color Code
      </Text>
      <View
        style={{
          ...commonStyles.horizontalView,
          alignSelf: 'flex-start',
          marginLeft: '5%',
        }}>
        <TouchableOpacity style={styles.field} onPress={onpres}>
          <Text style={styles.textTField}>{color || 'Select a color'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onpres}
          style={[
            styles.color,
            {backgroundColor: color ? color : COLOR.black, marginLeft: '5%'},
          ]}
        />
      </View>

      <Modal visible={isoPen} animationType="slide" transparent>
        <View style={styles.modal}>
          <ColorPicker
            style={styles.picker}
            value={color}
            onComplete={selectColor}>
            <Panel1 />
            <HueSlider />
          </ColorPicker>

          <TouchableOpacity
            style={styles.selectBtn}
            onPress={close}>
            <Text style={styles.selectText}>Select Color</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
export default BackgroundColorPicker;
