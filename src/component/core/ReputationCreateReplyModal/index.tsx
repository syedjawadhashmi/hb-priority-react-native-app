import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Icon} from '../../../assest';
import {ReputationModalType} from '../../../data/Types';
import {COLOR, commonStyles, normalize} from '../../../themes/StyleGuides';
import InvoiceTitle from '../InvoiceTitle';
import DropDown from '../DropDown';
import {Dropdata, ReviewModal} from '../../../data/DummayData';
import {useState} from 'react';

const ReputationCreateReplyModal = (props: ReputationModalType) => {
  const {visible, onpress, onpressOfModal} = props;
  const [openlocationReport, setOpenlocationReport] = useState(false);
  const [locationReport, setlocationReport] = useState(null);
  const [template, setTemplate] = useState("");
  const [cliend, setClient] = useState("");

  return (
    <Modal transparent visible={visible}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <ScrollView>
          <TouchableOpacity style={styles.coreseIcon} onPress={onpressOfModal}>
            <Image
              source={Icon.crose}
              style={{resizeMode: 'contain', width: 10, height: 10}}
            />
          </TouchableOpacity>
          <Text style={styles.Title}>Respond To Review</Text>
          <View style={styles.discriptionConatiner}>
            <Text style={styles.discription}>
              <Text style={{color: COLOR.gray_5}}>Tags:</Text> Add First Name{' '}
              {'  '}Add Business Name
            </Text>
          </View>
          <View style={styles.discriptionConatiner}>
            <Text style={{...styles.discription, fontWeight: '400'}}>
              Thank you {'{{FirstName}}'}, for your support and for being a
              valued customer. We can’t wait to welcome you back soon!
            </Text>
          </View>
          <InvoiceTitle title="Name Template" onChange={(e:any)=>setTemplate(e)} />
          <InvoiceTitle title="Link To Client" onChange={(e:any)=>setClient(e)} />
          <DropDown
            isOpen={openlocationReport}
            toggleDropdown={() =>
              setOpenlocationReport(openlocationReport ? false : true)
            }
            options={ReviewModal}
            onSelect={(e: any) => setlocationReport(e)}
            selectedOption={locationReport}
            title={'Link To Rating'}
            DropDownContaianer={{zindex:9999,    height: 50,
            }}
          />
          <View
            style={{
              ...commonStyles.verticleView,
              alignSelf: 'flex-end',
              marginRight: '5%',
            }}>
            <TouchableOpacity style={styles.ListingBtn} onPress={onpress}>
              <Text style={{...styles.ListBtnText,color:COLOR.black}}>Create Template</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onpressOfModal}
              style={{
                ...styles.ListingBtn,
                backgroundColor: COLOR.red,
                marginLeft: '5%',
              }}>
              <Text style={{...styles.ListBtnText, color: COLOR.white}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
export default ReputationCreateReplyModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ' rgba(0, 0, 0, 0.5)',
    flex: 1,
    ...commonStyles.center,
  },
  modalContainer: {
    width: '90%',
    backgroundColor: COLOR.white1,
    borderRadius: 10,
  },
  coreseIcon: {alignSelf: 'flex-end', marginRight: '5%', marginTop: '5%'},
  Title: {
    fontSize: normalize(20),
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '5%',
  },
  discriptionConatiner: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: '3%',
    marginTop: '2%',
    paddingVertical: '3%',
  },
  discription: {fontSize: normalize(13), fontWeight: '700', color: COLOR.perpal_3},
  ListingBtn: {
    backgroundColor: COLOR.primary,
    borderRadius: 6,
    alignSelf: 'flex-end',
    marginTop: '5%',
    marginBottom: '5%',
    ...commonStyles.center,
    height: 30,
    paddingHorizontal: '5%',
  },
  ListBtnText: {fontSize: normalize(12), fontWeight: '700', color: COLOR.whites},
});
