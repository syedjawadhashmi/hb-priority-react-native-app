import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  useWindowDimensions,
} from 'react-native';

import styles from './style';

import {useState} from 'react';
import CustomCalendar from '../../../core/Calender';
import {InboxFilterModalProps} from '../../../../data/Types';
import {COLOR, hp} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';
import DropDownButton from '../../../core/DropDownButton';
import Input from '../../../common/Input';
import { Assigneds, incomingList, Location, message, timePeriods } from '../../../../data/DummayData';

const InboxFilterModal = (props: InboxFilterModalProps) => {
  const {visible, onpress, saveFilter} = props;
  const [messagesOpen, setMessageOpen] = useState(false);
  const [messages, setMessage] = useState('Messages');
  const [locationsOpen, setLocationOpen] = useState(false);
  const [locations, setLocations] = useState('');
  const [timePeriodOpen, setTimePeriodOpen] = useState(false);
  const [timePeriod, setTimePeriod] = useState('');
  const [AssignedOpen, setAssignedOpen] = useState(false);
  const [incomingOpen, setncomingOpen] = useState(false);
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  const [Assigned, setAssigned] = useState('');
 
  return (
    <Modal transparent visible={visible}>
      <Pressable style={styles.container}>
        <View
          style={{
            ...styles.modal,
            marginTop: isLandscape ? hp('10%') : hp('15%'),
          }}>
          <ScrollView>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={onpress}
                style={{
                  ...styles.filterBtn,
                  backgroundColor: COLOR.white_4,
                  borderWidth: 1,
                  borderColor: COLOR.perpal,
                }}>
                <Text style={styles.text}>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterBtn} onPress={saveFilter}>
                <Text style={{...styles.text, color: COLOR.whites}}>
                  Save As
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.filterBtn, backgroundColor: COLOR.gray_4}}>
                <Image source={Icon.FilterIcon} style={styles.FilterIcon} />
                <Text style={styles.text}>Filter by</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.DropDownContainer}>
              <DropDownButton
                title={messages ? messages : 'Messages'}
                onpress={() => setMessageOpen(messagesOpen ? false : true)}
              />
              {messagesOpen &&
                message.map((item: any) => (
                  <TouchableOpacity
                    style={styles.messageContainer}
                    onPress={() => {
                      setMessage(item.name), setMessageOpen(false);
                    }}>
                    <Text
                      style={{
                        ...styles.text,
                        color:
                          messages == item.name ? COLOR.perpal : COLOR.gray_5,
                        fontWeight: messages == item.name ? '700' : '400',
                      }}>
                      {item.name}
                    </Text>
                    {messages == item.name && (
                      <Image source={Icon.Simpletick} style={styles.tickIcon} />
                    )}
                  </TouchableOpacity>
                ))}
            </View>
            <View style={styles.DropDownContainer}>
              <DropDownButton title={'State'} />
            </View>
            <View style={styles.DropDownContainer}>
              <DropDownButton title={'City'} />
            </View>
            <View style={styles.DropDownContainer}>
              <DropDownButton
                title={'Location'}
                onpress={() => setLocationOpen(locationsOpen ? false : true)}
              />
              {locationsOpen && (
                <View>
                  <Input
                    placeholder={'Search Messages'}
                    style={{backgroundColor: COLOR.white1}}
                  />
                  {Location.map((item: any) => (
                    <TouchableOpacity
                      style={styles.locationContainer}
                      onPress={() => {
                        setLocations(item.name);
                      }}>
                      <Image
                        source={
                          locations == item.name ? Icon.check : Icon.uncheck
                        }
                        style={{
                          ...styles.checkBx,
                          tintColor:
                            locations == item.name
                              ? COLOR.primary
                              : COLOR.gray_5,
                        }}
                      />

                      <Text
                        style={{
                          ...styles.text,
                          marginLeft: '4%',
                        }}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                  <View style={styles.LocationBtn}>
                    <TouchableOpacity
                      style={{
                        ...styles.filterBtn,
                        backgroundColor: COLOR.whites,
                        borderWidth: 1,
                        borderColor: COLOR.perpal,
                        marginRight: '4%',
                        paddingHorizontal: '6%',
                      }}
                      onPress={() => setLocationOpen(false)}>
                      <Text style={{...styles.text, color: COLOR.perpal_3}}>
                        Clear
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        ...styles.filterBtn,
                        backgroundColor: COLOR.primary,
                        marginRight: '10%',
                        paddingHorizontal: '6%',
                      }}
                      onPress={() => setLocationOpen(false)}>
                      <Text style={{...styles.text, color: COLOR.whites}}>
                        Apply
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
            <View style={styles.DropDownContainer}>
              <DropDownButton
                title={'Time Period'}
                onpress={() => setTimePeriodOpen(timePeriodOpen ? false : true)}
              />
              {timePeriodOpen && (
                <View>
                  {timePeriods.map((item: any) => (
                    <TouchableOpacity
                      style={styles.messageContainer}
                      onPress={() => {
                        setTimePeriod(item.name);
                      }}>
                      <Text
                        style={{
                          ...styles.text,
                          color:
                            timePeriod == item.name
                              ? COLOR.perpal
                              : COLOR.gray_5,
                          fontWeight: timePeriod == item.name ? '700' : '400',
                        }}>
                        {item.name}
                      </Text>
                      {timePeriod == item.name && (
                        <Image
                          source={Icon.Simpletick}
                          style={styles.tickIcon}
                        />
                      )}
                    </TouchableOpacity>
                  ))}

                  {timePeriod == 'Custom' && (
                    <View>
                      <CustomCalendar />
                    </View>
                  )}
                </View>
              )}
            </View>
            <View style={styles.DropDownContainer}>
              <DropDownButton
                title={'Assigned to'}
                onpress={() => setAssignedOpen(AssignedOpen ? false : true)}
              />
              {AssignedOpen && (
                <View>
                  <Input
                    placeholder={'Search Messages'}
                    style={{backgroundColor: COLOR.white1}}
                  />
                  {Assigneds.map((item: any) => (
                    <TouchableOpacity
                      style={styles.locationContainer}
                      onPress={() => {
                        setAssigned(item.name);
                      }}>
                      <Image
                        source={
                          Assigned == item.name ? Icon.check : Icon.uncheck
                        }
                        style={{
                          ...styles.checkBx,
                          tintColor:
                            Assigned == item.name
                              ? COLOR.primary
                              : COLOR.gray_5,
                        }}
                      />

                      <Text
                        style={{
                          ...styles.text,
                          marginLeft: '4%',
                        }}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                  <View style={styles.LocationBtn}>
                    <TouchableOpacity
                      style={{
                        ...styles.filterBtn,
                        backgroundColor: COLOR.primary,
                        marginRight: '10%',
                        paddingHorizontal: '5%',
                      }}
                      onPress={() => setAssignedOpen(false)}>
                      <Text style={{...styles.text, color: COLOR.whites}}>
                        Apply
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
            <View style={styles.DropDownContainer}>
              <DropDownButton
                title={'Last incoming message'}
                onpress={() => setncomingOpen(incomingOpen ? false : true)}
              />
              {incomingOpen && (
                <View>
                  <Input
                    placeholder={'Search Messages'}
                    style={{backgroundColor: COLOR.white1}}
                  />
                  {incomingList.map((item: any) => (
                    <TouchableOpacity
                      style={styles.locationContainer}
                      onPress={() => {
                        setAssigned(item.name);
                      }}>
                      <Image
                        source={
                          Assigned == item.name ? Icon.check : Icon.uncheck
                        }
                        style={{
                          ...styles.checkBx,
                          tintColor:
                            Assigned == item.name
                              ? COLOR.primary
                              : COLOR.gray_5,
                        }}
                      />

                      <Text
                        style={{
                          ...styles.text,
                          marginLeft: '4%',
                        }}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                  <View style={styles.LocationBtn}>
                    <TouchableOpacity
                      style={{
                        ...styles.filterBtn,
                        backgroundColor: COLOR.primary,
                        marginRight: '10%',
                      }}
                      onPress={() => setAssignedOpen(false)}>
                      <Text style={{...styles.text, color: COLOR.whites}}>
                        Apply
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
            <View style={styles.DropDownContainer}>
              <DropDownButton title={'Experience score'} />
            </View>
          </ScrollView>
        </View>
      </Pressable>
    </Modal>
  );
};
export default InboxFilterModal;
