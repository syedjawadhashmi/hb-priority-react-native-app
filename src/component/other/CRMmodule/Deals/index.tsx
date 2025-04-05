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
import Input from '../../../common/Input';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';
import CRMDealsList from '../../../core/CRMDealsList';
import {CRMDealsListdata} from '../../../../data/DummayData';
import ToggleSwitch from 'toggle-switch-react-native';
import {useState} from 'react';
import InvoiceTitle from '../../../core/InvoiceTitle';
import DealInformation from '../../../core/DealInformation';
const data = [
  {name: 'Other'},
  {name: 'Copywriting'},
  {name: 'Print Project'},
  {name: 'UI Design'},
  {name: 'Website Design'},
];
const Deals = () => {
  const [togal, setTogal] = useState(false);
  const [openStage, setopenStage] = useState(false);
  const [deal, setDeal] = useState(false);
  const [openExpert, setopenExpert] = useState(false);
  const [Expert, setExpert] = useState('');
  const [stageName, setStageName] = useState('');
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        {deal ? (
          <DealInformation onpress={() => setDeal(false)} />
        ) : (
          <View>
            <Input
              IconStyle={{tintColor: COLOR.gray_9}}
              placeholder={'Search'}
            />
            <View style={styles.sattingContainer}>
              <TouchableOpacity
                style={styles.NewStageBtn}
                onPress={() => setopenStage(openStage ? false : true)}>
                <Text style={styles.btnText}>+ New Stage</Text>
              </TouchableOpacity>
              <View style={{...commonStyles.verticleView}}>
                <TouchableOpacity
                  style={{...commonStyles.verticleView}}
                  onPress={() => setopenExpert(openExpert ? false : true)}>
                  <Image source={Icon.DropDown} style={styles.dropDown} />
                  <Text style={styles.TypeText}>TYPE</Text>
                  <Image source={Icon.Sort} style={styles.dropDown} />
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
                  onPress={() => setDeal(true)}
                  style={{...styles.NewStageBtn, paddingHorizontal: '4%'}}>
                  <Text style={styles.btnText}>+ New Deal</Text>
                </TouchableOpacity>
              </View>
            </View>

            {openExpert && (
              <View style={styles.ExportDown}>
                {data.map(item => (
                  <View>
                    <TouchableOpacity
                      style={{
                        padding: 5,
                        backgroundColor:
                          item.name == Expert ? COLOR.white1 : COLOR.whites,
                        paddingHorizontal: '8%',
                      }}
                      onPress={() => {
                        setExpert(item.name);
                        setopenExpert(false);
                      }}>
                      <Text style={styles.DropText}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}

            {openStage && (
              <View style={{...styles.DropStage,top:isLandscape?"12%":"18%"}}>
                <InvoiceTitle
                  title="Stage Name"
                  container={{...styles.containerText,width:isLandscape?width*0.6:width*0.5}}
                  onChange={(e:any)=>setStageName(e)}
                />
                <TouchableOpacity
                  onPress={() => setopenStage(false)}
                  style={{
                    ...styles.NewStageBtn,
                    paddingHorizontal: '9%',
                    borderRadius: 10,
                    top: 10,
                  }}>
                  <Text style={styles.btnText}>Add Stage</Text>
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.togalContainer}>
              <ToggleSwitch
                isOn={togal}
                onColor={COLOR.primary}
                offColor={COLOR.whites}
                labelStyle={{color: 'black', fontWeight: '200'}}
                size="small"
                onToggle={isOn => {
                  setTogal(isOn);
                }}
              />
              <Text style={styles.titletogal}>Only Companies I Manage</Text>
            </View>

            <View style={styles.containerList}>
              <FlatList
                nestedScrollEnabled={true}
                data={CRMDealsListdata}
                renderItem={({item}) => (
                  <CRMDealsList title={item.title} data={item.data}  />
                )}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default Deals;
