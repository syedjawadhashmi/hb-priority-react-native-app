import {Image, Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {COLOR} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';
import {useState} from 'react';

const Install = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCopyCode = () => {
    // Simulate copying action
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 2000); // Hide popup after 2 seconds
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Webchat</Text>
      <Text style={styles.discription}>
        When webchat is turned on, it will appear on the website it's installed
        on. The installation status was last updated 8 days ago, you can{' '}
        <Text style={{color: COLOR.perpal_3}}>refresh the status.</Text>
      </Text>

      <View style={styles.NotInstalledField}>
        <Image source={Icon.close_2} style={styles.close_2} />
        <Text style={styles.NotInstalledText}>Not Installed Yet</Text>
      </View>

      <Text style={styles.tittle}>Install Webchat To Your Website</Text>
      <Text style={{...styles.discription, width: '75%'}}>
        Copy and paste the code to the HTML in your website.{'  '}
        <Text style={{color: COLOR.perpal_3}}>Learn how to install..</Text>
      </Text>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={{...styles.btnEmailCode, borderWidth: 1, marginRight: '5%'}}>
          <Text style={{...styles.EmailCodeText, color: COLOR.perpal_3}}>
            Email Code
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleCopyCode}
          style={{
            ...styles.btnEmailCode,
            borderWidth: 1,
            backgroundColor: COLOR.perpal_3,
          }}>
          <Text style={{...styles.EmailCodeText, color: COLOR.whites}}>
            Copy Code
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.TextInput}>
        <TextInput
          placeholderTextColor={COLOR.gray_5}
          placeholder='<script defer type="text/javascript" src="https://birdse ye.com/embed/v6/71178/1/1691239846/c0e77ce949 ca1ca43f1bd876cbb8a87400b967adbd4a62"></script ><div id="bf-rev2-widget-1691239846"></div>'
          style={{
            flex: 1,
            color: COLOR.gray_5,
            textAlignVertical: 'top',
            fontSize: 12,
          }}
          multiline
        />
      </View>

      <Text style={styles.tittle}>Google Analytics</Text>
      <Text style={{...styles.discription, marginBottom: '5%'}}>
        Track the Webchat events in your Google Analytics account.{' '}
        <Text style={{color: COLOR.perpal_3}}>
          Learn how to find your tracking ID.
        </Text>
      </Text>
      <Text style={styles.tittle}>Advanced Analytics</Text>
      <Text style={{...styles.discription, width: '85%', marginBottom: '7%'}}>
        Integrate with Google Tag Manager, Adobe Analytics, and more.{' '}
        <Text style={{color: COLOR.perpal_3}}>Learn more.</Text>
      </Text>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Code copied to clipboard!</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Install;
