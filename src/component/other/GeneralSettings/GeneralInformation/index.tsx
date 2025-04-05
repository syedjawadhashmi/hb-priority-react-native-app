import {Image, Text, TextInput, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import styles from './style';
import InvoiceTitle from '../../../core/InvoiceTitle';
import {useState} from 'react';
import {COLOR, commonStyles, wp} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';

const GeneralInformation = () => {
  const [selectData, setSelectData] = useState({});
  const[use,setUsa]=useState(false)
  const[canada,setCanada]=useState(false)
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  const handalData = (key: any, value: any) => {
    const trimmedKey = key.replace(/\s+/g, '');

    const updatedData = {...selectData, [trimmedKey]: value};
    setSelectData(updatedData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.AmmountContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>General Information</Text>
        </View>

        <View style={{...styles.CardBoard,marginTop:isLandscape?"3%":"10%"}}>
          <View style={styles.BoardHeader}>
            <Text style={{...styles.BoardText, width: '40%'}}>Filename</Text>
            <Text style={styles.BoardText}>Size</Text>
            <Text style={styles.BoardText}>Status</Text>
          </View>
          <View style={styles.BoardTextHeader}>
            <TextInput
            multiline
              style={{
                width: '50%',
                height: 65,
                textAlignVertical: 'top',
                color:COLOR.black
              }}
            />
            <TextInput
            multiline
              style={styles.FileNameInputText}
            />
            <TextInput
            multiline
              style={{
                ...styles.TextinputBoard,
                height: 65,
                textAlignVertical: 'top',
                color:COLOR.black

              }}
            />
          </View>
        </View>
        <Text style={styles.selectText}>
          jpg/png/gif format only. Max size 2MB. Image will be cropped to fit
        </Text>

        <InvoiceTitle
          title="Friendly Business Name"
          onChange={(item: any) => handalData('Friendly', item)}
        />
        <InvoiceTitle
          title="Legal Business Name"
          onChange={(item: any) => handalData('Legal', item)}
        />
        <Text style={styles.selectText}>Enter the exact legal business name, as registered with the EIN</Text>
        <View style={{...commonStyles.verticleView, paddingHorizontal: '5%'}}>
          <InvoiceTitle title="Business Email" container={{width:isLandscape?wp("80%"):wp("40%")}} onChange={(item: any) => handalData('BusinessEmail', item)}  />
          <InvoiceTitle title="Business Phone" container={{width:isLandscape?wp("80%"):wp("40%")}}  onChange={(item: any) => handalData('BusinessPhone', item)} />
        </View>
        <InvoiceTitle title="Branded Domain"  onChange={(item: any) => handalData('BrandedDomain', item)} />
        <InvoiceTitle title="Business Website"  onChange={(item: any) => handalData('BusinessWebsite', item)} />
        <InvoiceTitle title="Business Industry"  onChange={(item: any) => handalData('BusinessIndustry', item)} />
        <Text style={styles.discription}>Business Regions Of Operations</Text>
        <View style={styles.USAConatiner}>
          <TouchableOpacity   onPress={()=>setUsa(use?false:true)}>
            <Image source={use?Icon.check_1:Icon.uncheck_1} style={styles.CheckBox}  />
          </TouchableOpacity>
          <Text style={styles.CheckText}>USA</Text>
        </View>
        <View style={styles.USAConatiner}>
          <TouchableOpacity  onPress={()=>setCanada(canada?false:true)} >
            <Image source={canada?Icon.check_1:Icon.uncheck_1} style={styles.CheckBox}  />
          </TouchableOpacity>
          <Text style={styles.CheckText}>Canada</Text>
        </View>
        <View style={{...styles.USAConatiner, marginLeft: '4%'}}>
          <Text style={styles.CheckText}>API Key</Text>
          <Image
            source={Icon.Error}
            style={{...styles.CheckBox, marginLeft: '3%'}}
          />
          <TouchableOpacity style={styles.GenerateKeyBtn}>
            <Text style={styles.GenerateKeyText}>Generate Key</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              ...styles.GenerateKeyBtn,
              backgroundColor: COLOR.primary,
              alignSelf: 'flex-end',
              marginBottom: '5%',
              marginRight: '5%',
              marginTop: '7%',
            }}>
            <Text style={{...styles.GenerateKeyText, color: COLOR.gray_5}}>
              Update Information
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default GeneralInformation;
