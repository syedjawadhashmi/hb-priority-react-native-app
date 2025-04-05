import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import {useState} from 'react';
  import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
  import {Icon} from '../../../../assest';
  import {DropDownProps} from '../../../../data/Types';
  import {styles} from './style';
  
  const DropDownKeyWord = (props: DropDownProps) => {
    const {
      options,
      isOpen,
      toggleDropdown,
      placeText,
      title,
      container,
      placeHolder,
      DropDownContaianer,
      titleICon,
      titleIConOnPress,
      LearnMoreIndex,
    } = props;
  
    const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  
    const handleSelectOption = (option: string) => {
      setSelectedOptions(prevState =>
        prevState.includes(option)
          ? prevState.filter(item => item !== option) // Remove if already selected
          : [...prevState, option] // Add to selected
      );
      toggleDropdown()
    };
  
    const handleRemoveOption = (option: string) => {
      setSelectedOptions(prevState => prevState.filter(item => item !== option));
    };
  
    return (
      <View style={styles.container}>
        {/* Title Section */}
        <View style={{...commonStyles.horizontalView, marginLeft: '6%'}}>
          {title && <Text style={styles.title}>{title}</Text>}
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
  
        {/* Dropdown Button */}
        <View
         
          style={[styles.button, container]}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
            {selectedOptions.map((option, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal:"2%",
                  paddingVertical: 4,
                  borderRadius: 10,
                  backgroundColor: COLOR.gray_5,
                  margin: 4,
                }}>
                <Text style={[styles.buttonText, {color: COLOR.white}]}>
                  {option}
                </Text>
                <TouchableOpacity onPress={() => handleRemoveOption(option)}>
                  <Image
                    source={Icon.close}
                    tintColor={COLOR.white}
                    style={{
                      width: 8,
                      height: 8,
                      resizeMode: 'contain',
                      marginLeft: 6,
                    }}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity  onPress={toggleDropdown }style={{width:40,}} >
          <Image
            source={Icon.DropDown}
            tintColor={COLOR.black}
            style={{...styles.iconStyle,alignSelf:"flex-end"}}
          />
          </TouchableOpacity>
      
        </View>
  
        {/* Dropdown Options */}
        {isOpen && (
          <ScrollView style={[styles.openDropDown, DropDownContaianer]}>
            {options.map((option: any, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelectOption(option.title)}>
                <Text
                  style={[
                    styles.optionText,
                    selectedOptions.includes(option.title) && {color: COLOR.blue},
                  ]}>
                  {option.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
  
        {/* Learn More Section */}
        {LearnMoreIndex && (
          <TouchableOpacity style={styles.modalLearn} onPress={titleIConOnPress}>
            <Text style={styles.ModelText}>
              This Citation allows you to hide the address. Perfect for
              Service-area businesses.
            </Text>
            <View style={styles.triangleShape} />
          </TouchableOpacity>
        )}
      </View>
    );
  };
  
  export default DropDownKeyWord;
  