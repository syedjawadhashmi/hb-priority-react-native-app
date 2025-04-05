import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  Image,
  useWindowDimensions,
} from 'react-native';
import styles from './style';
import {launchImageLibrary} from 'react-native-image-picker';
import {ScrollView} from 'react-native-gesture-handler';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';
import {Icon, Images} from '../../../assest';
import Header from '../../../component/common/Header';
import PrimarySettingsCalendar from '../../../component/other/CalendarMobileCom/PrimarySettingsCalendar';
import ToggleSwitch from 'toggle-switch-react-native';
import { CameraPermission } from '../../../component/other/CameraPermission';
const CustomizationsCalendar = (props: any) => {
  const {navigation} = props;
  const [isModern, setIsModern] = useState(true);
  const [allowStaffSelection, setAllowStaffSelection] = useState(false);
  const [Setting, setSetting] = useState(false);
    const {width, height} = useWindowDimensions();
    const isLandscape = width > height;
    const handleImagePicker = async () => {
      await CameraPermission();
  
      const options = {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
        quality: 1,
      };
  
      launchImageLibrary(options, response => {
        if (!response.didCancel && !response.errorCode) {
          const imageUri = response.assets[0].uri;
        }
      });
    };
  return (
    <View style={{...commonStyles.mainContainer}}>
      <Header
        firstIcon={Icon.bars}
        title="Calendar"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView style={{padding: 20}} scrollEnabled={true}  >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Customizations</Text>
          </View>

          <View style={styles.innerContainer}>
            <Text style={styles.headerDescription}>
              Set widget style and other preferences.
            </Text>

            {/* Calendar Cover Image */}
            <Text style={styles.label}>Calendar Cover Image</Text>
            <Text style={styles.description}>
              The uploaded image will be visible within the Group View for Neo
              templates and won’t appear on the individual calendar link.
            </Text>
            <TouchableOpacity style={styles.uploadBox} onPress={()=>handleImagePicker()}  >
              <View style={styles.uploadIconWraper}>
                <Image source={Icon.Upload_2} style={styles.uploadIcon} />
              </View>

              <Text style={styles.uploadText}>
                <TouchableOpacity>
                  <Text style={styles.clickLink}>Click to upload</Text>
                </TouchableOpacity>
                or drag and drop
              </Text>
              <Text style={styles.uploadSubText}>PNG, JPEG, JPG or GIF</Text>
              <Text style={styles.uploadSubText}>
                ( max. dimensions 180x180px | max.size 2.5mb)
              </Text>
            </TouchableOpacity>
            <Text style={styles.label}>Calendar Widget Style</Text>
            <Text style={styles.description}>
              Choose between our classic or the sleek Neo widget
            </Text>
            <View style={styles.radioGroup}>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  isModern && styles.radioButtonSelected,
                ]}
                onPress={() => setIsModern(true)}></TouchableOpacity>
              <Text style={styles.radioText}>Modern</Text>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  !isModern && styles.radioButtonSelected,
                ]}
                onPress={() => setIsModern(false)}></TouchableOpacity>
              <Text style={styles.radioText}>Classic</Text>
            </View>
            <View style={styles.widgetCustomization}>
              <Image source={Images.CalendarView} style={{...styles.widgetImage,bottom:isLandscape?"1%":"5%",marginRight:isLandscape?4:12}} />
              <View>
                <Text style={styles.widgetTitle}>
                  Customize calendar widget
                </Text>
                <Text style={{...styles.widgetDescription, width: '40%'}}>
                  Customize widget appearance: primary color, background color,
                  and button text.
                </Text>
                <View style={{...commonStyles.verticleView, width: '35%'}}>
                  <TouchableOpacity style={styles.learnMoreButton}>
                    <Text style={{...styles.learnMoreText, fontWeight: '400'}}>
                      Learn More
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setSetting(Setting ? false : true)}>
                    <Image
                      source={Setting ? Icon.Updown : Icon.DropDown}
                      style={{
                        width: 10,
                        height: 10,
                        resizeMode: 'contain',
                        tintColor: COLOR.gray_5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View>{Setting && <PrimarySettingsCalendar />}</View>
            {/* Insert Custom Code */}
            <Text style={styles.label}>Insert Custom Code</Text>
            <TextInput
              style={styles.input}
              placeholder="Please input custom code here"
              placeholderTextColor={COLOR.lightBlack}
              multiline
            />

            {/* Staff Selection */}
            <Text style={[styles.label, {marginBottom: 10}]}>
              Staff Selection
            </Text>
            <Text style={styles.description}>
              Enable bookings to choose a staff member directly from the
              calendar during appointment booking. Only works with Neo widget.
            </Text>
            <View style={styles.toggleRow}>
              <ToggleSwitch
                isOn={allowStaffSelection}
                onColor={COLOR.primary}
                offColor={COLOR.gray_5}
                size="small"
                onToggle={isOn => {
                  setAllowStaffSelection(isOn);
                }}
              />
              <Text style={styles.toggleText}>
                Allow staff selection during booking
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}></View>
    </View>
  );
};

export default CustomizationsCalendar;
