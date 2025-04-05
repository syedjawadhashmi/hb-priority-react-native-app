import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import Input from '../../../component/common/Input';
import {Icon} from '../../../assest';
import Header from '../../../component/common/Header';
import React, {useState} from 'react';
import {
  CalendarMobileList,
  CalenderMobileModalList,
} from '../../../data/DummayData';
import SCREEN from '../../../data/ScrName';
import {COLOR, commonStyles, hp, normalize} from '../../../themes/StyleGuides';
import JohnCalendarModal from '../../../component/other/CalendarMobileCom/JohnCalendarModal';

const CalendarSearch = (prop: any) => {
  const {navigation} = prop;
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState(false);

  const [modalVisible, setModalVisible] = React.useState(false);
  const handleModalClose = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Calendar"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView>
      <Input
        placeholder={'Search Calendar'}
        Icons={Icon.search}
        onChange={(e: any) => setSearch(e)}
        IconStyle={{tintColor:COLOR.gray}}
      />
      <View
        style={{
          alignSelf: 'flex-end',
          ...commonStyles.horizontalView,
          marginRight: '5%',
        }}>
        <TouchableOpacity
          style={styles.ListContainer}
          onPress={() => navigation.navigate(SCREEN.MeetingDetails)}>
          <Image source={Icon.IntegrateCalendar} style={styles.ListIcon} />
          <Text style={styles.ListText}>Integrate Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ListContainer}
              onPress={() =>
                  navigation.navigate(SCREEN.CalendarGoogleSign)
                }
          >
          <Image source={Icon.eye} style={styles.ListIcon} />
          <Text style={styles.ListText}>View Calendar</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignSelf: 'flex-end',
          ...commonStyles.horizontalView,
          marginRight: '5%',
        }}>
        <TouchableOpacity
          style={styles.ListContainer}
          onPress={() => setModalVisible(true)}>
          <Image source={Icon.Calender_1} style={styles.ListIcon} />
          <Text style={styles.ListText}>Create Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ListContainer}
          onPress={() => navigation.navigate(SCREEN.ScheduleAppointment)}>
          <Image source={Icon.Appointments} style={styles.ListIcon} />
          <Text style={styles.ListText}>Appointments</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: '10%', marginTop: '2%'}}>
        <View style={styles.TabalStatus}>
          <View style={{...styles.tabalStatusBox, borderTopLeftRadius: 10}}>
            <Text style={{...styles.TabalText, color: COLOR.whites}}>
              Calendar{'\n'}Name
            </Text>
          </View>
          <View style={styles.tabalStatusBox}>
            <Text style={{...styles.TabalText, color: COLOR.whites}}>
              Duration{'\n'}
              (mins)
            </Text>
          </View>
          <View style={styles.tabalStatusBox}>
            <Text style={{...styles.TabalText, color: COLOR.whites}}>
              Status
            </Text>
          </View>
          <View style={styles.tabalStatusBox}>
            <Text style={{...styles.TabalText, color: COLOR.whites}}>
              Date{'\n'}
              Updated
            </Text>
          </View>
          <View
            style={{
              ...styles.tabalStatusBox,
              borderTopRightRadius: 10,
              width: '14%',
            }}>
            <Text style={{...styles.TabalText, color: COLOR.whites}}></Text>
          </View>
        </View>
        <View>
          {CalendarMobileList.map((item, index) => (
            <View
            key={index}
              style={{
                ...commonStyles.verticleView,
                width: '90%',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  ...styles.TabalListContainer,
                  backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    ...styles.TabalText,
                    color: COLOR.gray_5,
                    
                  }}>
                  {item.name}
                </Text>
              </View>
              <View
                style={{
                  ...styles.TabalListContainer,
                  backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                }}>
                <Text
                  style={{
                    ...styles.TabalText,
                    color: COLOR.gray_5,
                  }}>
                  {item.Duration}
                </Text>
              </View>
              <View
                style={{
                  ...styles.TabalListContainer,
                  backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                }}>
                <Text
                  style={{
                    ...styles.TabalText,
                    color: COLOR.gray_5,
                  }}>
                  {item.Status}
                </Text>
              </View>
              <View
                style={{
                  ...styles.TabalListContainer,
                  backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                }}>
                <Text
                  style={{
                    ...styles.TabalText,
                    color: COLOR.gray_5,
                  }}>
                  {item.Date}
                </Text>
              </View>
              <View
                style={{
                  ...styles.TabalListContainer,
                  backgroundColor: index % 2 ? COLOR.whites : COLOR.white1,
                  width: '14%',
                }}>
                <TouchableOpacity
                onPress={()=>setModal(modal?false:true)}
                >
                  <Image source={Icon.ThreeDot} style={styles.threeDot} />
                </TouchableOpacity>
              </View>

           { modal&&  <View
                style={styles.DropContainer}>
                {CalenderMobileModalList.map(item => (
                  <TouchableOpacity
                  onPress={() => navigation.navigate(SCREEN.ContactsCalendar)}

                    style={{
                      ...commonStyles.horizontalView,
                      paddingHorizontal: '5%',
                      marginVertical: '2%',
                    }}>
                    <Image
                      source={item.icon}
                      style={{width: 10, height: 10, resizeMode: 'center'}}
                    />
                    <Text
                      style={styles.DropName}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>}
            </View>
          ))}
        </View>
      </View>
      <View  style={{height:hp(20)
      }}  />
      </ScrollView>
      <JohnCalendarModal isVisible={modalVisible} onClose={handleModalClose} />

      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default CalendarSearch;
