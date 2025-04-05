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
  import {Icon} from '../../../assest';
  import {COLOR} from '../../../themes/StyleGuides';
  import {InboxFilterModalProps} from '../../../data/Types';
  import DropDownButton from '../DropDownButton';
  import {useState} from 'react';
  import Input from '../../common/Input';
  import Calender from '../Calender';
  
  const RePutationFilterModal = (props: InboxFilterModalProps) => {
    const {visible, onpress, saveFilter} = props;
    const [messagesOpen, setMessageOpen] = useState(false);
    const [messages, setMessage] = useState('');
    const [locationsOpen, setLocationOpen] = useState(false);
    const [locations, setLocations] = useState('');
    const [timePeriodOpen, setTimePeriodOpen] = useState(false);
    const [timePeriod, setTimePeriod] = useState('');
    const [AssignedOpen, setAssignedOpen] = useState(false);
    const [incomingOpen, setncomingOpen] = useState(false);
    const [Assigned, setAssigned] = useState('');
    const [assignedList, setAssignedList] = useState<string[]>([]); 


    const handalSources=(itemName:any)=>{
      console.log(itemName)

      if (assignedList.includes(itemName)) {
        setAssignedList(assignedList.filter(name => name !== itemName)); // Remove if already selected
      } else {
        setAssignedList([...assignedList, itemName]); // Add if not selected
      }
    }

    const message = [
      {
        name: 'Leads',
      },
      {
        name: 'Reviews',
      },
      {
        name: 'Surveys',
      },
    ];
    const Location = [
        {
            name: 'Select All',
          },
      {
        name: 'Company Location 1',
      },
      {
        name: 'Company Location 2',
      },
      {
        name: 'Company Location 3',
      },
      {
        name: 'Company Location 4',
      },
      {
        name: 'Company Location 5',
      },
    ];
    const timePeriods = [
      {
        name: 'All Time',
      },
      {
        name: 'Yesterday',
      },
      {
        name: 'Past 7 Days',
      },
      {
        name: 'This Month',
      },
      {
        name: 'Past 30 Days',
      },
      {
        name: 'Past 3 Months',
      },
      {
        name: 'Past 6 Months',
      },
      {
        name: 'This Year',
      },
      {
        name: 'Past 12 Months',
      },
      {
        name: 'Custom',
      },
    ];
    const Assigneds = [
      {
        name: 'All',
      },
      {
        name: '9-10',
      },
      {
        name: '7-8',
      },
      {
        name: '0-6',
      },
      {
        name: 'Unknown',
      },
    ];
    const incomingList = [
      {
        name: 'Google',
      },
      {
        name: 'Yelp',
      },
      {
        name: 'Foursquare',
      },
      {
        name: 'Facebook',
      },
      {
        name: 'Tripadvisor',
      },
      {
        name: 'Yellowpages',
      },
      {
        name: 'Instagram',
      },
     
    ];
    const {width, height} = useWindowDimensions();
    const isLandscape = width > height;
    return (
      <Modal transparent visible={visible}>
        <View style={styles.container} >
          <View style={{...styles.modal, marginTop:isLandscape?"10%": '18%'}}>
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
                  title={'Location'}
                  onpress={() => setLocationOpen(locationsOpen ? false : true)}
                />
                {locationsOpen && (
                  <View>
                    <Input
                      placeholder={'Search Messages'}
                      style={{backgroundColor: COLOR.white1}}
                    />
                    {Location.map((item: any,index:any) => (
                      <TouchableOpacity
key={index}
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
                  title={'Date Range'}
                  onpress={() => setTimePeriodOpen(timePeriodOpen ? false : true)}
                />
                {timePeriodOpen && (
                  <View>
                    {timePeriods.map((item: any,index:any) => (
                      <TouchableOpacity
                      key={index}
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
                        <Calender />
                      </View>
                    )}
                  </View>
                )}
              </View>
              <View style={styles.DropDownContainer}>
                <DropDownButton
                  title={'Ratings'}
                  onpress={() => setAssignedOpen(AssignedOpen ? false : true)}
                />
                {AssignedOpen && (
                  <View>
                    {Assigneds.map((item: any,index:any) => (
                      <TouchableOpacity
                      key={index}
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
                <DropDownButton
                  title={'Sources'}
                  onpress={() => setncomingOpen(incomingOpen ? false : true)}
                />
                {incomingOpen && (
                  <View>
                    <Input
                      placeholder={'Search Messages'}
                      style={{backgroundColor: COLOR.white1}}
                    />
                    {incomingList.map((item: any,index:any) => (
                      <TouchableOpacity
                      key={index}
                        style={styles.locationContainer}
                        onPress={() => {
                          handalSources(item.name);
                        }}>
                        <Image
                          source={
                            assignedList.includes(item.name)  ? Icon.check : Icon.uncheck
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
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  };
  export default RePutationFilterModal;
  