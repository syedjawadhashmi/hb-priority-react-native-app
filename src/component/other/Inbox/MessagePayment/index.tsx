import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MessagePaymentProps} from '../../../../data/Types';
import {useState} from 'react';
import {MessagePaymentList} from '../../../../data/DummayData';
import {COLOR, commonStyles, hp} from '../../../../themes/StyleGuides';
import * as component from '../../../../component';
import {Icon} from '../../../../assest';

const MessagePayment = (prosp: MessagePaymentProps) => {
  const {visible, ofDropDown, close} = prosp;
  const [check, uncheck] = useState(false);
  const [openlocation, setOpenLocation] = useState(false);
  const [location, setLocation] = useState(null);
  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.closebtn} onPress={close}>
            <Image source={Icon.crose} style={styles.closeICon} />
          </TouchableOpacity>
          <Text style={styles.Title}>Add To Another Location</Text>
          <Text style={styles.discription}>
            Add a conversation with John Doe in a new location
          </Text>
          <component.DropDown
            title={'Select a location*'}
            options={MessagePaymentList}
            isOpen={openlocation}
            toggleDropdown={() => setOpenLocation(openlocation ? false : true)}
            onSelect={(e: any) => setLocation(e)}
            selectedOption={location}
          />
          <Text style={{...styles.Title, fontSize: 12, marginTop: hp('2%')}}>
            Conversation history
          </Text>
          <View style={styles.checkContainer}>
            <TouchableOpacity
              onPress={() => uncheck(check ? false : true)}
              style={{marginLeft: '7%'}}>
              <Image
                source={check ? Icon.check : Icon.uncheck}
                style={styles.checkIcon}
              />
            </TouchableOpacity>
            <Text
              style={{
                ...styles.discription,
                fontSize: 12,
                marginTop: 0,
                marginLeft: '2%',
              }}>
              Share the previous messages of this conversation with the selected
              location{' '}
            </Text>
          </View>

          <component.Buttons
            title={'Add'}
            container={styles.button}
            onpress={ofDropDown}
          />
        </View>
      </View>
    </Modal>
  );
};
export default MessagePayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...commonStyles.center,
    backgroundColor: COLOR.blackBlur,
  },
  modal: {
    width: '90%',
    backgroundColor: COLOR.white,
    // paddingVertical: hp('2%'),
    borderRadius: 14,
  },
  Title: {
    fontSize: 14,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '5%',
  },
  closebtn: {alignSelf: 'flex-end', marginRight: '5%', marginTop: hp('2%')},
  closeICon: {width: 17, height: 17, resizeMode: 'contain'},
  discription: {
    fontSize: 10,
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '5%',
    marginTop: hp('1%'),
    marginBottom: hp('2%'),
    width: '90%',
  },
  checkContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp('3%'),
  },
  checkIcon: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
    tintColor: COLOR.green,
  },
  button: {
    alignSelf: 'flex-end',
    width: '30%',
    borderRadius: 12,
    marginRight: '5%',
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
  },
});
