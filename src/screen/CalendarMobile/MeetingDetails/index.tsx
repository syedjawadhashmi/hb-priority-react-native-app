import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './style';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import {COLOR, commonStyles, hp, normalize} from '../../../themes/StyleGuides';
import InvoiceTitle from '../../../component/core/InvoiceTitle';
import Notepade from '../../../component/core/Notepade';
import DropDown from '../../../component/core/DropDown';
import {useState} from 'react';
import {Dropdata} from '../../../data/DummayData';
import SCREEN from '../../../data/ScrName';
import DropDownKeyWord from '../../../component/other/CalendarMobileCom/DropDownKeyWord';

const MeetingDetails = (prop: any) => {
  const {navigation} = prop;
  const [openManager, setOpenManager] = useState(false);
  const [radio, setradio] = useState(false);
  const [custom, setCustom] = useState(false);
  const [customText, setCustomText] = useState(null);
  const [MediumText, setMediumText] = useState(null);
  const [Medium, setMedium] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const [selectData, setSelectData] = useState({});
  const handalData = (key: any, value: any) => {
    const trimmedKey = key.replace(/\s+/g, '');

    const updatedData = {...selectData, [trimmedKey]: value};
    setSelectData(updatedData);
  };

  const colors = [
    {
      color: '#D50000',
    },
    {
      color: '#E67C73',
    },
    {
      color: '#F4511E',
    },
    {
      color: '#F6BF26',
    },
    {
      color: '#33B679',
    },
    {
      color: '#0B8043',
    },
    {
      color: '#039BE5',
    },
    {
      color: '#3F51B5',
    },
    {
      color: '#7986CB',
    },
    {
      color: '#8E24AA',
    },
    {
      color: '#616161',
    },
    {
      color: '#D50000',
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Calendar"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
        <View style={styles.mainCintainer}>
          <View style={styles.Header}>
            <Text style={styles.title}>Meeting Details</Text>
          </View>
          <Text style={styles.discription}>
            These are the details which will be shown in the calendar list page.
          </Text>
          <Text style={styles.Logo}>Calendar Logo </Text>
          <TouchableOpacity style={styles.uploadBtn}>
            <View style={styles.IconContainer}>
              <Image source={Icon.Upload_2} style={styles.UploadStyle} />
            </View>

            <Text style={styles.ClickText}>
              <Text style={{color: COLOR.perpal_3}}>Click to upload </Text>or
              drag and drop
            </Text>
            <Text style={styles.PNGText}>PNG, JPEG, JPG or GIF</Text>
            <Text style={{...styles.PNGText, fontWeight: '500'}}>
              ( max. dimensions 180x180px | max.size 2.5mb)
            </Text>
          </TouchableOpacity>
          <InvoiceTitle
            title="Calendar Name"
            onChange={(e: any) => handalData('CalendarName', e)}
          />
          <Text style={{...styles.Logo, marginBottom: '2%'}}>Description </Text>
          <Notepade />
          <InvoiceTitle
            title="Group"
            onChange={(e: any) => handalData('Group', e)}
          />
          <Text style={styles.Logo}>Custom URL* </Text>

          <View style={styles.FieldContaoer}>
            <TextInput
              style={{flex: 1}}
              placeholder="/widget/bookings/"
              placeholderTextColor={COLOR.gray_5}
            />
            <TextInput
              style={{flex: 1}}
              placeholder="newcalendar12"
              placeholderTextColor={COLOR.gray_5}
            />
          </View>

          <InvoiceTitle
            title="Meeting Invite Title"
            onChange={(e: any) => handalData('Meeting', e)}
          />
          <Text style={styles.Logo}>Meeting Invite Title</Text>

          <View style={styles.radioaCOntainer}>
            <View style={{...commonStyles.horizontalView}}>
              <TouchableOpacity onPress={() => setradio(false)}>
                <Image
                  source={radio ? Icon.circleSelection : Icon.circleSelection_1}
                  style={{width: 15, height: 15, resizeMode: 'contain'}}
                />
              </TouchableOpacity>

              <Text style={styles.radioTitle}>Optimize For Availability</Text>
            </View>
            <View style={{...commonStyles.horizontalView, marginTop: '3%'}}>
              <TouchableOpacity onPress={() => setradio(true)}>
                <Image
                  source={radio ? Icon.circleSelection_1 : Icon.circleSelection}
                  style={{width: 15, height: 15, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text style={styles.radioTitle}>Optimize For Availability</Text>
            </View>
          </View>

          <DropDownKeyWord
            isOpen={openManager}
            toggleDropdown={() => setOpenManager(openManager ? false : true)}
            options={Dropdata}
            placeHolder="Select Team Members"
            title="Team Members"
            container={{marginBottom: '5%'}}
          />

          <View style={styles.Drop}>
            <DropDown
              isOpen={Medium}
              toggleDropdown={() => setMedium(Medium ? false : true)}
              options={Dropdata}
              onSelect={(e: any) => setMediumText(e)}
              selectedOption={MediumText}
              container={styles.DropShort}
              DropDownContaianer={{top: 30, width: 130, left: 0}}
              placeHolder={'Medium Priority'}
            />
            <DropDown
              DropDownContaianer={{top: 30, width: 130, left: 0}}
              isOpen={custom}
              toggleDropdown={() => setCustom(custom ? false : true)}
              options={Dropdata}
              onSelect={(e: any) => setCustomText(e)}
              selectedOption={customText}
              container={styles.DropShort}
              placeHolder={'Custom'}
            />
            <TouchableOpacity>
              <Image source={Icon.Delete} style={styles.delete} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate(SCREEN.CalendarFullTime)}>
            <Text style={styles.textBtn}>Add Location</Text>
          </TouchableOpacity>
          <View style={styles.FieldContaoer}>
            <TextInput
              style={{flex: 1, fontSize: normalize(12)}}
              placeholder="/widget/bookings/"
              placeholderTextColor={COLOR.gray_5}
            />
            <Text
              style={{
                flex: 1,
                fontSize: normalize(12),
                fontWeight: '800',
                color: COLOR.perpal_3,
              }}>
              Add Display Label
            </Text>
          </View>
          <Text style={styles.Logo}>Event Color </Text>
          <View
            style={{
              ...commonStyles.verticleView,
              marginBottom: '4%',
              paddingHorizontal: '5%',
              marginTop: '3%',
            }}>
            {colors.map(item => (
              <TouchableOpacity
                onPress={() => setSelectedColor(item.color)}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 6,
                  backgroundColor: item.color,
                  borderWidth: selectedColor == item.color ? 2 : 0,
                  borderColor: COLOR.perpal_3,
                }}
              />
            ))}
          </View>
        </View>
        <View style={{height: hp(13)}} />
      </ScrollView>

      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default MeetingDetails;
