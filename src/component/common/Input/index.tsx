import React, {memo} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import {inputProps} from '../../../data/Types';
import {COLOR, FONT, commonStyles} from '../../../themes/StyleGuides';
import {Icon} from '../../../assest';

const Input = (props: inputProps) => {
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
    container,
    IconStyle,
  } = props;
  return (
    <View style={[container]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={[styles.InputStyle, style]}>
        <Image
          source={Icons ? Icons : Icon.search}
          style={[styles.Icon, IconStyle]}

          />
        <TextInput
          style={[styles.Input, textStyle]}
          placeholder={placeholder}
          placeholderTextColor={
            placeholderColor ? placeholderColor : COLOR.gray
          }
          keyboardType={keyboardType}
          onChangeText={x => onChange && onChange(x)}
          value={value}
          secureTextEntry={secureText}
          onFocus={onFocus}
          autoCapitalize="none"
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          textAlignVertical={textAlignVertical}
        />
      </View>
    </View>
  );
};

export default memo(Input);

const styles = StyleSheet.create({
  InputStyle: {
    ...commonStyles.justifyView,
    width: '90%',
    height: 33,
    alignSelf: 'center',
    paddingHorizontal: '5%',
    backgroundColor: COLOR.whites,
    marginVertical: '4%',
    borderRadius: 20,
  },

  Input: {
    flex: 1,
    fontFamily: FONT.Geist_Regular,
    fontSize: 14,
    color: COLOR.darkGray,
    height: 40,
    marginLeft: '2%',
    top: 2,
    padding:0
  },

  Icon: {width: 15, height: 15, resizeMode: 'contain'},
  title: {
    fontSize: 17,
    fontFamily: FONT.Geist_Bold,
    color: COLOR.gray_5,
    marginLeft: '9%',
    marginBottom: '1.5%',
    marginTop: '1.5%',
  },
});
