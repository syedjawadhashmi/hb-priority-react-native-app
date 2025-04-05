import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
} from 'react-native';
import {
  COLOR,
  commonStyles,
  FONT,
  TEXT_STYLE,
} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';

interface LinkedCalendarModalProps {
  onClose: () => void;
  onSave: () => void;
  visible?: any;
}

const LinkedCalendarModal: React.FC<LinkedCalendarModalProps> = ({
  onClose,
  onSave,
  visible,
}) => {
  const[selector,setSelector]=useState(false)
  return (
    <Modal transparent visible={visible}  >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <ScrollView>
            <TouchableOpacity style={{alignSelf:"flex-end",}}  onPress={onClose}  >
              <Image source={Icon.crose} style={{width:10,height:10,resizeMode:"contain"}} />
            </TouchableOpacity>
          <Text style={[TEXT_STYLE.text_medium, styles.title]}>
            Linked Calendar
          </Text>
          <Text style={[TEXT_STYLE.text_small, styles.description]}>
            All new events created in the system will be added to the linked
            calendar. Events created in the linked calendar will be synced to
            the system.
          </Text>

          <View style={styles.card}>
            <View style={styles.row}>
              <View style={styles.textWrapper}>
                <Image source={Icon.ConflictCalendar_1} style={styles.icon} />
                <Text style={{color: COLOR.black, fontSize: 12}}>System</Text>
              </View>

              <View style={{}}>
                <Image
                  source={Icon.rightArrow_2} // Replace with actual icon path
                  style={[styles.icon, {marginRight: 15}]}
                />

                <Image
                  source={Icon.rightArrow_1} // Replace with actual icon path
                  style={[styles.icon, {marginLeft: 10}]}
                />
              </View>

              <View style={styles.textWrapper}>
                <TouchableOpacity>
                  <Image source={Icon.GoogleCalender} style={styles.icon} />
                </TouchableOpacity>

                <Text style={{color: COLOR.black, fontSize: 12}}>
                  Linked Calendar
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={[TEXT_STYLE.text_small, styles.description]}>
              Which third-party calendar should we add new events to?
            </Text>
          </View>

          <View>
            <View style={{...commonStyles.horizontalView}}>
              <TouchableOpacity onPress={()=>setSelector(false)} >
                <Image
                  source={selector?Icon.circleSelection:Icon.circleSelection_1}
                  style={styles.radiobtn}
                />
              </TouchableOpacity>
              <View style={{...commonStyles.horizontalView, marginLeft: '4%'}}>
                <Image
                  source={Icon.GoogleCalender}
                  style={styles.selectorIcon}
                />
                <Text
                  style={styles.mailStyle}>
                  johndoe@companyname.com
                </Text>
              </View>
            </View>
            <View style={{...commonStyles.horizontalView, marginTop: '3%'}}>
              <TouchableOpacity onPress={()=>setSelector(true)} >
                <Image source={selector?Icon.circleSelection_1:Icon.circleSelection} style={styles.radiobtn} />
              </TouchableOpacity>
              <View style={{...commonStyles.horizontalView, marginLeft: '4%'}}>
                <Image
                  source={Icon.ErrorShow}
                  style={styles.selectorIcon}
                />
                <Text
                  style={styles.mailStyle}>
                  Do not add new events to any calendar
                </Text>
              </View>
            </View>
            <View></View>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.saveButton} onPress={onSave}>
              <Text
                style={[
                  TEXT_STYLE.text_medium,
                  {color: COLOR.black, fontWeight: 'bold'},
                ]}>
                Save
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={[TEXT_STYLE.text_medium, {color: COLOR.whites}]}>
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

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modal: {
    width: '90%',
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    color: COLOR.lightBlack,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: COLOR.lightBlack,
    textAlign: 'justify',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: COLOR.whites,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLOR.gray,
    padding: 10,
    marginTop: 10,
  },
  radioButtons: {
    marginBottom: 20,
  },
  radioText: {
    marginBottom: 10,
    color: COLOR.black,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
    gap: 10,
  },
  saveButton: {
    backgroundColor: '#40f440',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: '#ba0416',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  radiobtn: {width: 12, height: 12, resizeMode: 'contain'},
  mailStyle:{
    fontSize: 12,
    fontFamily: FONT.Geist_Regular,
    color: COLOR.gray_5,
    marginLeft: '3%',
  },
  selectorIcon:{width: 20, height: 20, resizeMode: 'contain'}
});

export default LinkedCalendarModal;
