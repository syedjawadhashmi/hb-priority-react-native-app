import {Image, Switch, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import ColorPickersField from '../../../core/ColorPickersField';
import InvoiceTitle from '../../../core/InvoiceTitle';
import {useState} from 'react';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';
import ToggleSwitch from 'toggle-switch-react-native';

const PrimarySettingsCalendar = () => {
  const [allowStaffSelection, setAllowStaffSelection] = useState(false);
  const [description, setDescription] = useState(false);
  const [details, setDetails] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [showPrimaryPicker, setShowPrimaryPicker] = useState(false);
  const [showBackgroundPicker, setShowBackgroundPicker] = useState(false);

  const handleSelectPrimaryColor = ({hex}) => {
    setPrimaryColor(hex); // Update primary color
    setShowPrimaryPicker(false); // Close the picker
  };

  const handleSelectBackgroundColor = ({hex}) => {
    setBackgroundColor(hex); // Update background color
    setShowBackgroundPicker(false); // Close the picker
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Primary Settings</Text>
      <Text style={styles.discription}>
        Configure the primary color, background color, and other widget
        preferences to tailor your calendar widget.
      </Text>
      <Text style={{...styles.title, marginTop: '8%'}}>Primary Color</Text>
      <Text style={styles.discription}>
        Define the color for buttons, dates, time slots, and actions
      </Text>
      <ColorPickersField
        onpres={() => setShowPrimaryPicker(true)}
        color={primaryColor}
        isoPen={showPrimaryPicker}
        selectColor={handleSelectPrimaryColor}
      />
      <Text style={{...styles.title, marginTop: '8%'}}>Background Color</Text>
      <Text style={styles.discription}>
        Set the background color that serves as the backdrop for both date-time
        selector and form.
      </Text>
      <ColorPickersField
        onpres={() => setShowBackgroundPicker(true)}
        color={backgroundColor}
        isoPen={showBackgroundPicker}
        selectColor={handleSelectBackgroundColor}
      />
      <Text style={{...styles.title, marginTop: '8%'}}>Button Text</Text>
      <Text style={styles.discription}>
        Customize the text displayed on the button when booking an appointment
      </Text>
      <InvoiceTitle
        placeholder={'Schedule Meeting'}
        container={{width: '100%', marginTop: '5%'}}
      />
      <View style={styles.switchContainer}>
        <ToggleSwitch
          isOn={allowStaffSelection}
          onColor={COLOR.primary}
          offColor={COLOR.gray_5}
          size="small"
          onToggle={isOn => {
            setAllowStaffSelection(isOn);
          }}
        />
        <View style={{width: '90%', marginLeft: '2%'}}>
          <Text style={styles.titile}>Calendar Title</Text>
          <Text style={styles.discription}>The name of your calendar</Text>
        </View>
      </View>
      <View style={styles.switchContainer}>
        <ToggleSwitch
          isOn={description}
          onColor={COLOR.primary}
          offColor={COLOR.gray_5}
          size="small"
          onToggle={isOn => {
            setDescription(isOn);
          }}
        />

        <View style={{width: '90%', marginLeft: '2%'}}>
          <Text style={styles.titile}>Calendar Description</Text>
          <Text style={styles.discription}>The entered description</Text>
        </View>
      </View>
      <View style={styles.switchContainer}>
        <ToggleSwitch
          isOn={details}
          onColor={COLOR.primary}
          offColor={COLOR.gray_5}
          size="small"
          onToggle={isOn => {
            setDetails(isOn);
          }}
        />
        <View style={{width: '90%', marginLeft: '2%'}}>
          <Text style={styles.titile}>Calendar Details</Text>
          <Text style={styles.discription}>
            Includes information such as duration, date & time, recurring
            details, and timezone
          </Text>
        </View>
      </View>

      <View
        style={{
          ...commonStyles.horizontalView,
          alignSelf: 'flex-end',
          marginTop: '7%',
          marginBottom: '5%',
        }}>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: COLOR.gray_7,
            borderColor: COLOR.perpal_3,
            borderWidth: 1,
            marginRight: '3%',
          }}>
          <Image
            source={Icon.Arrow}
            tintColor={COLOR.perpal_3}
            style={{
              width: 15,
              height: 15,
              resizeMode: 'contain',
              marginRight: '3%',
            }}
          />
          <Text style={{...styles.btnText, color: COLOR.perpal_3}}>
            Reset To Default
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={Icon.PreviewWidget}
            style={{
              width: 15,
              height: 15,
              resizeMode: 'contain',
              marginRight: '3%',
            }}
          />
          <Text style={styles.btnText}>Preview Widget</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PrimarySettingsCalendar;
