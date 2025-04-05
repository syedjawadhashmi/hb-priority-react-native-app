import React from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import {Icon} from '../../../../assest';
import {COLOR} from '../../../../themes/StyleGuides';
import styles from './style';

interface AddDocumentModalProps {
  visible: boolean;
  onClose: () => void;
  handleCamera: () => void;
}

const AddDocumentsModal = (props: AddDocumentModalProps) => {
  const {visible, onClose, handleCamera} = props;
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={{fontSize: 14, color: COLOR.gray_5}}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cameraButton} onPress={handleCamera}>
            <Image
              source={Icon.Camera_1}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'center',
                marginRight: '5%',
              }}
            />
            <Text style={styles.cameraButtonText}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default AddDocumentsModal;
