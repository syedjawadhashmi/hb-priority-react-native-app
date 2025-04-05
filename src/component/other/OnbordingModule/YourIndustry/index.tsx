import {Image, ScrollView, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import styles from './style';
import DropDown from '../../../core/DropDown';
import {inboxProp} from '../../../../data/Types';
import {useState} from 'react';
import {Dropdata, employ, revenue} from '../../../../data/DummayData';
import {COLOR, commonStyles, wp} from '../../../../themes/StyleGuides';
import Buttons from '../../../common/Buttons';
import { Images } from '../../../../assest';



const YourIndustry = (props: inboxProp) => {
  const {onpress} = props;
  const [openSize, setOpenSize] = useState(false);
  const [size, setSize] = useState(null);
  const [employs, setEmploy] = useState('');
  const [revenues, setrevenues] = useState('');
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;


  return (
    <View style={styles.container}>
        <ScrollView  >
      <Text style={styles.Title}>What’s your{'\n'} industry?</Text>
      <Text style={{...styles.discription, fontWeight: '700'}}>
        What industry are you in?{' '}
      </Text>
      <View style={{alignSelf: 'center'}}>
        <DropDown
          isOpen={openSize}
          placeText={{fontWeight: '400', fontSize: 14}}
          toggleDropdown={() => setOpenSize(openSize ? false : true)}
          options={Dropdata}
          onSelect={(e: any) => setSize(e)}
          selectedOption={size}
          container={styles.DropDown}
          placeHolder={'Select'}
          DropDownContaianer={styles.DrawerContainer}
        />
      </View>
      <Text style={{...styles.discription, fontWeight: '700', marginTop: 0}}>
        How many people work at your company?
      </Text>
      <View style={styles.EmployContainer}>
        {employ.map((item: any, index: any) => (
          <TouchableOpacity
            onPress={() => setEmploy(index)}
            style={{
              ...styles.Employselect,
              backgroundColor:
                employs === index ? COLOR.perpal_2 : COLOR.gray_5,
                width: isLandscape?wp("35%"):60,

            }}>
            <Text style={styles.employText}>{item.number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={{...styles.discription, fontWeight: '700', marginTop: "5%"}}>
        What’s your annual revenue?
      </Text>
      <View style={styles.RevenueContainer}>
        {revenue.map((item: any, index: any) => (
          <TouchableOpacity
            onPress={() => setrevenues(index)}
            style={{
              ...styles.RevenueSelect,
              backgroundColor:
                revenues === index ? COLOR.perpal_2 : COLOR.gray_5,
            }}>
            <Text style={styles.employText}>{item.number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Buttons title={'Continue'} container={styles.ContinueBtn}  onpress={onpress}  />
      <Image source={Images.HubSparkLogo} style={styles.logo} />

      </ScrollView>
    </View>
  );
};
export default YourIndustry;
