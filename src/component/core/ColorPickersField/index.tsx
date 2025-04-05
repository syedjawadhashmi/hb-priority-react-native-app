import React from 'react';
import {View, StyleSheet, Text, Modal, TouchableOpacity} from 'react-native';
import ColorPicker, {Panel1, HueSlider} from 'reanimated-color-picker';
import {ColorickerProps} from '../../../data/Types';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const ColorPickersField = (props: ColorickerProps) => {
  const {isoPen, color, onpres, selectColor} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.field} onPress={onpres}>
        <View style={[styles.color, {backgroundColor: color?color:COLOR.black}]} />
        <Text style={styles.textTField}>{color || 'Select a color'}</Text>
      </TouchableOpacity>

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
            onPress={() => {
              selectColor({hex: color}); // Trigger selection manually
            }}>
            <Text style={styles.selectText}>Select Color</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ColorPickersField;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  field: {
    width: '90%',
    height: 35,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    elevation: 1,
    overflow:"hidden"
  },
  color: {
    width: 50,
    height: 35,
    borderRadius: 10,
  },
  textTField: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    marginLeft: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  picker: {
    width: '70%',
  },
  selectBtn: {
    width: '90%',
    height: 40,
    borderRadius: 10,
    backgroundColor: COLOR.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  selectText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLOR.white,
  },
});
