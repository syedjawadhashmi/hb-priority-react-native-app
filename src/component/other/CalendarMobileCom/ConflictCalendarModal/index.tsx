import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Modal,
} from 'react-native';
import {COLOR, commonStyles, TEXT_STYLE} from '../../../../themes/StyleGuides';
import CustomCheckbox from '../../../core/CustomCheckbox';
import {Icon} from '../../../../assest';

interface ConflictCalendarModalProps {
  onClose?: () => void;
  visible?:any,
  onSave?: () => void;

}

const ConflictCalendarModal: React.FC<ConflictCalendarModalProps> = ({
  onClose,
  visible,
  onSave
}) => {
  const [isHourDropdownOpen, setIsHourDropdownOpen] = useState(false);
console.log(isHourDropdownOpen)
  const WeeklyCheckBox = [
    {id: 1, label: 'Calendar1'},
    {id: 2, label: 'Calendar1'},
    {id: 3, label: 'Calendar1'},
  ];

  const handleSelectionChange = (
    selectedItems: {id: string | number; label: string}[],
  ) => {
    console.log('Selected Items:', selectedItems);
  };
  return (
    <Modal transparent  visible={visible}  >
    <View style={styles.modalContainer}>
      <View style={styles.modal}>
        <ScrollView scrollEnabled={true}  >
              <TouchableOpacity style={{alignSelf:"flex-end",}}  onPress={onClose}  >
                        <Image source={Icon.crose} style={{width:10,height:10,resizeMode:"contain"}} />
                      </TouchableOpacity>
        <Text style={[TEXT_STYLE.text_medium, styles.title]}>
          Conflict Calendars
        </Text>
        <Text style={[TEXT_STYLE.text_small, styles.description]}>
          Add additional calendars to be checked to prevent double bookings.
        </Text>

        <View style={{...commonStyles.horizontalView}}>
          <Image source={Icon.GoogleCalender} />
          <Text
            style={styles.emailsStyle}>
            johndoe@companyname.com
          </Text>
        </View>

        <View>
          <Text style={{fontSize: 12, marginTop: 20,fontWeight:"700",color:COLOR.gray_5}}>
            Check these calendars for conflicts
          </Text>
        </View>
        <View style={styles.checkList}>
          <View style={{...commonStyles.horizontalView,marginTop:"2%"}}>
            <TouchableOpacity onPress={()=>setIsHourDropdownOpen(isHourDropdownOpen?false:true)} > 
            <Image source={isHourDropdownOpen?Icon.check:Icon.uncheck} style={styles.check}  />
            </TouchableOpacity>
            <Text style={{fontSize: 12, fontWeight:"700",color:COLOR.gray_5,marginLeft:"3%"}}>johndoe@companyname.com</Text>
          </View>
          <Text style={{fontSize: 10, fontWeight:"400",color:COLOR.gray_5,marginLeft:"5%",marginTop:'1%'}}>Linked calendar is checked for conflict by default</Text>

          <Text style={[TEXT_STYLE.text_small, styles.checkItem]}>
            <CustomCheckbox
              data={WeeklyCheckBox}
              onSelectionChange={handleSelectionChange}
            />
          </Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} nestedScrollEnabled={true} >
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.saveButton} onPress={onSave}>
              <Text
                style={[
                  styles.text,
                  {color: COLOR.lightBlack, fontWeight: 'bold'},
                ]}>
                Save
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={[styles.text, {color: COLOR.whites}]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 25,
  },
  description: {
    color: COLOR.lightBlack,
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 20,
  },
  input: {
    backgroundColor: COLOR.whites,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLOR.gray,
    padding: 10,
    marginBottom: 20,
  },
  checkList: {
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'scroll',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  checkItem: {
    marginBottom: 10,
    color: COLOR.black,
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    gap: 10,
  },
  saveButton: {
    backgroundColor: '#40f440',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: COLOR.red,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
  emailsStyle:{
    fontSize: 12,
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '4%',
  },
  check:{width:16,height:16,resizeMode:"contain"},
  
});

export default ConflictCalendarModal;
