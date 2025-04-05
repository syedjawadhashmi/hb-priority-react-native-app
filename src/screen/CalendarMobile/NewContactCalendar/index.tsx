import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {useState} from 'react';
import InvoiceTitle from '../../../component/core/InvoiceTitle';
import {COLOR, commonStyles, hp, wp} from '../../../themes/StyleGuides';
import Header from '../../../component/common/Header';
import {Icon} from '../../../assest';
import DropDown from '../../../component/core/DropDown';
import {Dropdata} from '../../../data/DummayData';
import FilePickerManager from 'react-native-file-picker';

const NewContactCalendar = (prop: any) => {
  const {navigation} = prop;
  const [opensector, setOpenSector] = useState(false);
  const [sector, setSector] = useState(null);
  const [document, setDocumentss] = useState('');


  const [selectData, setSelectData] = useState({});
  const handalData = (key: any, value: any) => {
    const trimmedKey = key.replace(/\s+/g, '');

    const updatedData = {...selectData, [trimmedKey]: value};
    setSelectData(updatedData);
  };
  
  const handleDocumentUpload = async () => {
    // try {
    //   const result = await DocumentPicker.pick({
    //     type: [
    //       DocumentPicker.types.xlsx,
    //       DocumentPicker.types.xls,
    //       DocumentPicker.types.pdf,
    //     ],
    //   });
    //   const fileName = result[0].name;
    //   setDocumentss(fileName);
    //   console.log('Selected File: ', document);
    // } catch (err) {
    //   if (DocumentPicker.isCancel(err)) {
    //     console.log('User canceled the document picker');
    //   } else {
    //     console.error('Error picking document: ', err);
    //   }
    // }
    FilePickerManager.showFilePicker(
      {
        title: 'Select Document',
        // Accept .xls, .xlsx, and .pdf
        type: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/pdf'],
      },
      (response) => {
        if (response.didCancel) {
          console.log('User canceled the document picker');
        } else if (response.error) {
          console.error('Error picking document: ', response.error);
        } else {
          const fileName = response.fileName || 'Unknown File';
          setDocumentss(fileName);
          console.log('Selected File: ', response);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Calendar"
        onpesDrawer={() => navigation.openDrawer()}
      />
              <ScrollView>

      <View style={styles.mcinContainer}>
        <View style={styles.Header}>
          <Text style={styles.HeaderText}>New Contact</Text>
        </View>
          <View
            style={{
              ...commonStyles.verticleView,
              paddingHorizontal: '5%',
              marginTop: '5%',
              marginBottom: '1%',
            }}>
            <InvoiceTitle
              titleStyle={styles.titleStyle}
              title="First Name"
              container={styles.containerText}
              onChange={(e: any) => handalData('Note', e)}
            />
            <InvoiceTitle
              titleStyle={styles.titleStyle}
              title="Last Name"
              container={styles.containerText}
              onChange={(e: any) => handalData('Note', e)}
            />
          </View>
          <View
            style={{
              ...commonStyles.verticleView,
              paddingHorizontal: '5%',
            }}>
            <InvoiceTitle
              titleStyle={styles.titleStyle}
              title="Title"
              container={styles.containerText}
              onChange={(e: any) => handalData('Note', e)}
            />
            <DropDown
              isOpen={opensector}
              toggleDropdown={() => setOpenSector(opensector ? false : true)}
              options={Dropdata}
              onSelect={(e: any) => setSector(e)}
              selectedOption={sector}
              title={'Sector'}
              container={{width:wp("40%")}}
              DropDownContaianer={{    left:6,
              }}
            />
          </View>
          <InvoiceTitle
            titleStyle={styles.titleStyle}
            title="Email"
            container={styles.filedContainer}
            onChange={(e: any) => handalData('Note', e)}
            keyBoardtype="email-address"
          />
          <View
            style={{
              ...commonStyles.verticleView,
              paddingHorizontal: '5%',
            }}>
            <InvoiceTitle
              titleStyle={styles.titleStyle}
              title="Phone Number 1"
              container={styles.containerText}
              onChange={(e: any) => handalData('Note', e)}
            />
            <InvoiceTitle
              titleStyle={styles.titleStyle}
              title="Phone Number 2"
              container={styles.containerText}
              onChange={(e: any) => handalData('Note', e)}
            />
          </View>
          <InvoiceTitle
            titleStyle={styles.titleStyle}
            title="Background"
            container={styles.filedContainer}
            onChange={(e: any) => handalData('Note', e)}
          />

          <Text style={styles.docomentFieldTitle}>Avatar</Text>
          <View style={styles.docomentField}>
            <TouchableOpacity

            onPress={()=>handleDocumentUpload()}
              style={{
                backgroundColor: COLOR.gray_5,
                paddingVertical: '1%',
                paddingHorizontal: '3%',
                borderRadius: 10,
              }}>
              <Text style={styles.docomentBtnText}>Choose file</Text>
            </TouchableOpacity>
            <Text style={styles.NoFile}>No file chosen</Text>
          </View>

          <View
            style={{
              ...commonStyles.verticleView,
              paddingHorizontal: '5%',
            }}>
            <InvoiceTitle
              titleStyle={styles.titleStyle}
              title="Title"
              container={styles.containerText}
              onChange={(e: any) => handalData('Note', e)}
            />
          </View>
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.SaveBtn}>Save </Text>
          </TouchableOpacity>
      </View>
      <View  style={{height:hp(10)}}/>
      </ScrollView>

      <View style={styles.bottomBar}></View>
    </View>
  );
};
export default NewContactCalendar;
