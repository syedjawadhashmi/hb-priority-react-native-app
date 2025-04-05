import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Modal} from 'react-native';
import styles from './CreateFolderStyle';
import { COLOR } from '../../../../themes/StyleGuides';
interface CreateFolderModalProps {
  visible: boolean;
  onCreateFolder: (folderName: string) => void;
  onClose: () => void;
}

const CreateFolderModal: React.FC<CreateFolderModalProps> = ({
  visible,
  onCreateFolder,
  onClose,
}) => {
  const [folderName, setFolderName] = useState('');

  const handleCreate = () => {
    if (folderName.trim()) {
      onCreateFolder(folderName);
      setFolderName('');
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={{position: 'absolute', top: 10, right: 10}}
            onPress={onClose}>
            <Text style={{fontSize: 12, color: 'gray'}}>X</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Create Folder</Text>
          <Text
            style={{
              width: '100%',
              marginBottom: 5,
              fontSize: 12,
              color: '#6d6d6d',
              fontWeight: "900",
            }}>
            Folder name
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter folder name"
            placeholderTextColor={COLOR.gray_5}
            value={folderName}
            onChangeText={setFolderName}
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.createButton}
              onPress={handleCreate}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={{fontSize: 12, color: 'white'}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CreateFolderModal;
