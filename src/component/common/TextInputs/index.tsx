import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {inputProps} from '../../../data/Types';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const TextInputs = (prop: inputProps) => {
  const {
    placeholder,
    keyboardType,
    onChange,
    value,
    style,
    secureText,
    onFocus,
    onBlur,
    textStyle,
    placeholderColor,
    textAlignVertical,
    onSubmitEditing,
    title,
    Icons,
    IconStyle,
    IconOnpress,
    defaultValue,
  } = prop;
  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value && value}
        placeholderTextColor={placeholderColor}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={x => onChange && onChange(x)}
        defaultValue={defaultValue && defaultValue}
        secureTextEntry={secureText}
        style={{flex: 1, color: COLOR.black}}
      />
      {Icons && (
        <TouchableOpacity onPress={IconOnpress}>
          <Image source={Icons} style={[styles.icon, IconStyle]} />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default TextInputs;

const styles = StyleSheet.create({
  container: {
    width: '65%',
    height: 38,
    ...commonStyles.verticleView,
    backgroundColor: COLOR.whites,
    borderRadius: 15,
    alignSelf: 'center',
    paddingHorizontal: '4%',
  },
  icon: {width: 20, height: 18, resizeMode: 'contain'},
});
