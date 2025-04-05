import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR, commonStyles, FONT, normalize} from '../../../themes/StyleGuides';
import {LocationFieldProp} from '../../../data/Types';
import {Images} from '../../../assest';
import {useState} from 'react';

const InvoiceTitle = (props: LocationFieldProp) => {
  const {
    title,
    onpress,
    item,
    Icon,
    container,
    keyBoardtype,
    defaultValue,
    titleStyle,
    onChange,
    placeholder,
    IconStyle,
    showErrorIcon,
    maxLength,
    showErrorText,
  } = props;
  const [error, setErrorShow] = useState(false);
  console.log("Normalized Font Size:", normalize(12))
  return (
    <View>
      <View style={{marginLeft: '2%'}}>
        <View style={{...commonStyles.horizontalView}}>
          {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
          {showErrorIcon && (
            <TouchableOpacity
              onPress={() => setErrorShow(error ? false : true)}>
              <Image
                style={[styles.dropDown, IconStyle]}
                source={showErrorIcon}
              />
            </TouchableOpacity>
          )}
        </View>

        {showErrorText && (
          <View>
            {error && (
              <View style={styles.ErrorTextShow}>
                <Image
                  source={Images.angle}
                  tintColor={COLOR.perpal_3}
                  style={{
                    width: 15,
                    height: 15,
                    resizeMode: 'contain',
                    right: 14,
                  }}
                />
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: '400',
                    color: COLOR.whites,
                    width:100
                  }}>
                  {showErrorText}
                </Text>
              </View>
            )}
          </View>
        )}
      </View>
      <View style={[styles.container, container]}>
        {Icon && <Image style={[styles.dropDown, IconStyle]} source={Icon} />}
        <Text style={styles.defultText}>{defaultValue && defaultValue}</Text>
        <TextInput
          maxLength={maxLength && maxLength}
          style={styles.input}
          keyboardType={keyBoardtype}
          onChangeText={(e: any) => onChange(e)}
          placeholder={placeholder && placeholder}
          placeholderTextColor={COLOR.gray_5}
        />
      </View>
    </View>
  );
};
export default InvoiceTitle;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 33,
    alignSelf: 'center',
    paddingHorizontal: '4%',
    backgroundColor: COLOR.whites,
    borderRadius: 12,
    marginBottom: '0.7%',
    ...commonStyles.verticleView,
  },
  title: {
    fontSize: normalize(12),
    color: COLOR.gray_5,
    marginLeft: '4.5%',
    marginBottom: '1.5%',
    marginTop: '1.5%',
    fontWeight: '700',
  },
  dropDown: {width: 16, height: 16, resizeMode: 'contain'},
  input: {color: COLOR.gray_5, fontSize: 12, height: 40, flex: 1,padding:0},
  defultText: {fontSize: 15, color: COLOR.gray_5},
  ErrorTextShow: {
    backgroundColor: COLOR.perpal_3,
    paddingVertical: '3%',
    width: '40%',
    position: 'absolute',
    alignSelf: 'flex-end',
    zIndex: 9000,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    right: '6%',
    bottom: -10,
  },
});
