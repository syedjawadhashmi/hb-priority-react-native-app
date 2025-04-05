import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import styles from './style';
import {Icon} from '../../../../assest';
import Input from '../../../common/Input';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import CRMcontactList from '../../../core/CRMcontactList';
import {CRMContactListdata} from '../../../../data/DummayData';
import {useState} from 'react';
import CRMContactsDetails from '../../../core/CRMContactsDetails';
import ProfileInformation from '../../../core/ProfileInformation';

const data = [
  {name: 'Last name ascending'},
  {name: 'First name ascending'},
  {name: 'Last seen ascending'},
];

const CRMContacts = (props: any) => {
  const {navigation} = props;
  const [openExpert, setopenExpert] = useState(false);
  const [Expert, setExpert] = useState('');
  const [details, setDetails] = useState(false);
  const [ProfileInformations, setProfileInformation] = useState(false);
  const [sort, setSort] = useState('');
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <View style={styles.container}>
      {ProfileInformations ? (
        <ScrollView scrollEnabled={true}>
          <ProfileInformation onpress={() => setProfileInformation(false)} />
        </ScrollView>
      ) : (
        <View>
          <ScrollView scrollEnabled={true}>
            <Input
              IconStyle={{tintColor: COLOR.gray_9}}
              placeholder={'Search'}
            />
            {details ? (
              <CRMContactsDetails />
            ) : (
              <View>
                <View style={styles.sattingContainer}>
                  <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={Icon.Filters} style={styles.filter} />
                  </TouchableOpacity>
                  <View style={{...commonStyles.verticleView}}>
                    <TouchableOpacity
                      style={{...commonStyles.verticleView}}
                      onPress={() => setopenExpert(openExpert ? false : true)}>
                      <Image
                        source={Icon.DropDown}
                        style={{...styles.dropDown, right: 7}}
                      />
                      <Text style={styles.TypeText}>SORT BY</Text>
                      <Image
                        source={Icon.Sort}
                        style={{...styles.dropDown, marginHorizontal: 5}}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        ...styles.NewStageBtn,
                        paddingHorizontal: '3%',
                        ...commonStyles.verticleView,
                      }}>
                      <Image
                        source={Icon.Export}
                        style={{...styles.dropDown, tintColor: COLOR.white}}
                      />
                      <Text style={styles.btnText}>Export</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setProfileInformation(true)}
                      style={{...styles.NewStageBtn, paddingHorizontal: '4%'}}>
                      <Text style={styles.btnText}>+ New Contact</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {openExpert && (
                  <View style={{...styles.ExportDown,  marginLeft:isLandscape?width*0.55:width*0.18
                  }}>
                    {data.map((item: any, index: any) => (
                      <View>
                        <TouchableOpacity
                          style={{
                            padding: 5,
                            backgroundColor:
                              index == Expert ? COLOR.white1 : COLOR.whites,
                            paddingHorizontal: '3%',
                            alignItems: 'center',
                          }}
                          onPress={() => {
                            setExpert(index);
                            setopenExpert(false);
                            setSort(item.name);
                          }}>
                          <Text style={styles.DropText}>{item.name}</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                )}
                <FlatList
                scrollEnabled={false}
                  style={{marginTop: '10%', marginBottom: '75%'}}
                  data={CRMContactListdata}
                  renderItem={({item, index}) => (
                    <CRMcontactList
                      onpress={() => {
                        setDetails(true);
                      }}
                      name={item.name}
                      status={item.status}
                      activetime={item.activetime}
                      Icons={item.icon}
                      index={index}
                    />
                  )}
                />
              </View>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};
export default CRMContacts;
