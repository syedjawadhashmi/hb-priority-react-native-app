import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../themes/StyleGuides';
import {ReputationModalType} from '../../../data/Types';
import {Icon} from '../../../assest';
import InvoiceTitle from '../InvoiceTitle';

const ReputationModal = (props: ReputationModalType) => {
  const {visible, onpress, onpressOfModal,title} = props;
  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.coreseIcon} onPress={onpressOfModal}>
            <Image
              source={Icon.crose}
              style={{resizeMode: 'contain', width: 10, height: 10}}
            />
          </TouchableOpacity>
          <Text style={styles.Title}>Edit URL -{title}</Text>
          <Text style={styles.discription}>
            You can edit a URL below to update it or you can exclude it, if you
            don’t want this business listing to be used in your report.
          </Text>
          <InvoiceTitle title="URL:*" />

          <View style={styles.btnCiontainer}>
            <View style={{...commonStyles.verticleView}} >
            <TouchableOpacity style={styles.ListingBtn} >
              <Text style={styles.ListBtnText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity  
             onPress={onpressOfModal}
            style={{...styles.ListingBtn,backgroundColor:COLOR.red,marginLeft:"5%"}}>
              <Text style={{...styles.ListBtnText,color:COLOR.white}}>Cancel</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{...styles.ListingBtn, backgroundColor: COLOR.perpal_3}}>
              <Text style={{...styles.ListBtnText, color: COLOR.white}}>
              Exclude
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ReputationModal;

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
  discription: {
    fontSize: normalize(10),
    fontWeight: '700',
    color: COLOR.gray_5,
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  ListBtnText: {fontSize: normalize(12), fontWeight: '700', color: COLOR.perpal_3},
  ListingBtn: {
    width:70,
    backgroundColor: COLOR.primary,
    borderRadius: 6,
    alignSelf: 'flex-end',
    marginTop: '5%',
    marginBottom: '5%',
    ...commonStyles.center,
    height:30
  },
  btnCiontainer: {...commonStyles.verticleView, paddingHorizontal:"5%"},
});
