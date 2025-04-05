import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import styles from './styles';
import CustomDropdown from '../../../core/CustomDropdown';
import LocationSelector from '../../../core/LocationSelector';
import SelectRoleComponent from '../../../core/SelectRoleComponent';
import CustomCheckbox from '../../../core/CustomCheckbox';
import SelectTeams from '../../../core/SelectTeams';
import { Icon } from '../../../../assest';
import { COLOR } from '../../../../themes/StyleGuides';

interface AddUserModal {
  isVisible: boolean;
  onClose: () => void;
  onAdd: () => void;
}

const AddUserModal: React.FC<AddUserModal> = ({isVisible, onClose, onAdd}) => {
  const [sendInvitation, setSendInvitation] = useState(false);
  const [showLocationDropDown, setShowLocationDropDown] = useState(false);
  const [showSelectRole, setShowSelectRole] = useState(false);
  const [showTeams, setShowTeams] = useState(false);

  const checkboxData = [
    {id: 1, label: 'Instantly'},
    {id: 2, label: 'Daily'},
  ];

  const handleSelectionChange = (
    selectedItems: {id: string | number; label: string}[],
  ) => {
    console.log('Selected Items:', selectedItems);
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <ScrollView scrollEnabled={true}  >
          <View style={styles.buttonContainer}>
            <Text style={styles.headerText}>Add A User</Text>
            <View style={{width: '50%', flexDirection: 'row', gap: 4}}>
              <TouchableOpacity onPress={onAdd} style={styles.addButton}>
                <Text
                  style={[styles.buttonText, {fontSize: 15, fontWeight: 900}]}>
                  Add
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
                <Text style={[styles.buttonText, {color: 'white'}]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView style={styles.formContainer}>
            {/* Input fields */}
            <View style={styles.row}>
              <TextInput style={styles.input} placeholder="First Name" placeholderTextColor={COLOR.gray_5} />
              <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor={COLOR.gray_5} />
            </View>
            <View style={styles.row}>
              <TextInput style={styles.input} placeholder="Email" placeholderTextColor={COLOR.gray_5} />
              <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor={COLOR.gray_5} />
            </View>

            <View style={styles.locationDropDown}>
              <TouchableOpacity onPress={() => setShowLocationDropDown(true)}>
                <TextInput
                  style={styles.input}
                  placeholder="Locations"
                  readOnly={true}
                  placeholderTextColor={COLOR.gray_5} 
                />
              </TouchableOpacity>
              {showLocationDropDown && (
                <View style={{position: 'absolute', zIndex: 1}}>
                  <LocationSelector
                    onClose={() => setShowLocationDropDown(false)}
                  />
                </View>
              )}
            </View>

            <View>
              <TouchableOpacity onPress={() => setShowSelectRole(true)}>
                <TextInput
                  style={styles.input}
                  placeholder="Select Role*"
                  readOnly={true}
                  placeholderTextColor={COLOR.gray_5}
                />
              </TouchableOpacity>
              {showSelectRole && (
                <View style={{position: 'absolute', zIndex: 1}}>
                  <SelectRoleComponent
                    onClose={() => setShowSelectRole(false)}
                  />
                </View>
              )}
            </View>

            <View>
              <TouchableOpacity onPress={() => setShowTeams(true)}>
                <TextInput
                  style={styles.input}
                  placeholder="Select Teams"
                  readOnly={true}
                  placeholderTextColor={COLOR.gray_5}
                />
              </TouchableOpacity>
              {showTeams && (
                <View style={{position: 'absolute', zIndex: 1,width:"100%"}}>
                  <SelectTeams onClose={() => setShowTeams(false)} />
                </View>
              )}
            </View>

            {/* Toggle Switch */}
            <View style={styles.switchContainer}>
              <Text style={styles.switchText}>Send Invitation Email</Text>

              <Switch
                value={sendInvitation}
                onValueChange={setSendInvitation}
                thumbColor={sendInvitation ? COLOR.primary :COLOR.gray_11}
              />
            </View>
            <Text style={styles.subText}>
              If turned off, a password is required for this user to log in.
            </Text>

            {/* Password Fields */}
            {sendInvitation ? null : (
              <View style={[styles.row]}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor={COLOR.gray_5}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  secureTextEntry
                  placeholderTextColor={COLOR.gray_5}
                />
              </View>
            )}

            {/* Notifications Section */}
            <Text style={styles.sectionTitle}>Notifications</Text>
            <Text style={styles.sectionTitle}>Review Emails</Text>

            <Text style={styles.subText}>
              Review Emails Send review emails for{' '}
              <Text style={styles.linkText}>All ratings</Text>{' '}
              <Text style={styles.linkText}>All reviews</Text>
            </Text>
            <View style={styles.column}>
              <View style={styles.checkboxContainer}>
                <SafeAreaView>
                  <CustomCheckbox
                    data={checkboxData}
                    onSelectionChange={handleSelectionChange}
                  />
                </SafeAreaView>
              </View>
              <View style={styles.checkboxContainer}></View>
            </View>

            <CustomDropdown />

            {/* SMS Section */}
            <Text style={styles.sectionTitle}>Review SMS</Text>
            <View style={{...styles.row,marginTop:'3%'}}>
              <Image
                source={Icon.Error}
                style={{width: 16, height: 16, marginRight: 10,tintColor:COLOR.primary}}
              />
              <Text style={styles.subText}>
                We did not find a mobile number for Amit. Please{' '}
                <Text style={styles.linkText}>add a mobile number</Text> to
                start SMS notifications.
              </Text>
            </View>
          </ScrollView>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AddUserModal;
