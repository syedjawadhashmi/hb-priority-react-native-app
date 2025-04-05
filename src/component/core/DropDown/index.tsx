import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DropDownProps} from '../../../data/Types';
import {COLOR, commonStyles, FONT, normalize} from '../../../themes/StyleGuides';
import {Icon} from '../../../assest';

const DropDown = (props: DropDownProps) => {
  const {
    options,
    isOpen,
    toggleDropdown,
    onSelect,
    selectedOption,
    placeText,
    title,
    container,
    placeHolder,
    DropDownContaianer,
    titleICon,
    titleIConOnPress,
    LearnMoreIndex,
    firstIcon,
  } = props;

  const handleSelectOption = (option: any) => {
    onSelect(option);
    toggleDropdown();
  };
  return (
    <View style={styles.container}>
      <View style={{...commonStyles.horizontalView, marginLeft: '6%'}}>
        {title && <Text style={[styles.title]}>{title}</Text>}
        {titleICon && (
          <TouchableOpacity onPress={titleIConOnPress}>
            <Image
              source={titleICon}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                marginLeft: '1%',
              }}
            />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        onPress={toggleDropdown}
        style={[styles.button, container]}>
        <View style={{...commonStyles.horizontalView}}>
          {firstIcon && <Image source={firstIcon} style={styles.NetIcon} />}
          <Text
            style={[
              styles.buttonText,
              placeText,
              {color: selectedOption ? COLOR.black : COLOR.gray_6},
            ]}>
            {selectedOption ? selectedOption : placeHolder && placeHolder}
          </Text>
        </View>
        <Image
          source={Icon.DropDown}
          tintColor={COLOR.gray_5}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={[styles.openDropDown, DropDownContaianer]}>
          <ScrollView nestedScrollEnabled={true}>
            {options.map((option: any, index: any) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelectOption(option.title)}>
                <Text style={styles.optionText}>{option.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {LearnMoreIndex && (
        <TouchableOpacity style={styles.modalLearn} onPress={titleIConOnPress}>
          <Text style={styles.ModelText}>
            This Citation allows you to hide the address. Perfect for
            Service-areabusinesses.
          </Text>
          <View style={styles.triangleShape} />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default DropDown;

const styles = StyleSheet.create({
  container: {},
  button: {
    width: '90%',
    height: 33,
    alignSelf: 'center',
    paddingHorizontal: '4%',
    backgroundColor: COLOR.whites,
    borderRadius: 12,
    marginBottom: '0.7%',
    ...commonStyles.verticleView,
  },
  openDropDown: {
    position: 'absolute',
    top: 48,
    left: 15,
    right: 0,
    backgroundColor: COLOR.whites,
    zIndex: 1,
    borderWidth: 1,
    borderColor: COLOR.gray,
    borderRadius: 4,
    marginTop: '2%',
    width: '91%',
    height: 100,
  },
  buttonText: {
    fontSize: normalize(13),
    color: COLOR.black,
  },
  optionText: {
    fontSize: normalize(13),
    color: COLOR.black,
    padding: '2%',
  },
  title: {
    fontSize: normalize(12),
    color: COLOR.gray_5,

    marginBottom: '1.5%',
    marginTop: '1.5%',
    fontWeight: '700',
  },
  NetIcon: {width: 17, height: 17, resizeMode: 'contain', marginRight: '5%'},

  iconStyle: {width: 10, height: 10, resizeMode: 'contain'},
  modalLearn: {
    width: 130,
    height: 70,
    backgroundColor: COLOR.perpal_3,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: '7%',
    ...commonStyles.center,
    borderRadius: 15,
    padding: 10,
    bottom: 55,
  },
  ModelText: {fontSize: normalize(10), fontWeight: '400', color: COLOR.whites},
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  triangleShape: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 18,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: COLOR.perpal_3,
    position: 'absolute',
    bottom: -13,
    alignSelf: 'flex-start',
    left: '10%',
  },
});
