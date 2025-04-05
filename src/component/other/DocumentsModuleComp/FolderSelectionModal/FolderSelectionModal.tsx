import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import styles from './FolderSelectionModalStyle';
import {Icon} from '../../../../assest';
import {COLOR} from '../../../../themes/StyleGuides';

interface FolderSelectionModal {
  visible: boolean;
  onClose: () => void;
  setSteps: (step: number) => void;
  defaultFolderName: any;
  documentName: any;
  setIsCreateFolderModalVisible: (isVisible: boolean) => void;
}

const FolderSelectionModal: React.FC<FolderSelectionModal> = ({
  visible,
  onClose,
  folders,
  documentName,
  setIsCreateFolderModalVisible,
}) => {
  const [selectedFolder, setSelectedFolder] = useState(false);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
        
          <View style={styles.successSection}>
            <Image source={Icon.tickcheck} style={styles.iconStyle} />
            <Text style={styles.successText}>File successfully converted</Text>
          </View>
          <View style={styles.documentSection}>
            <Image source={Icon.Docoments_1} style={styles.iconStyle} />
            <Text style={styles.documentNameText}>{documentName}</Text>
          </View>
          <Text style={styles.chooseFolderText}>Choose a folder</Text>


          <ScrollView style={styles.folderOptions} horizontal >
            {folders.map((item: any, index: any) => (
              <View key={index} style={styles.folderOption}>
                <TouchableOpacity
                  onPress={() =>
                    setSelectedFolder(selectedFolder ? false : true)
                  }>
                  <Image
                    source={
                      selectedFolder ? Icon.radio_buttonOn : Icon.radio_buttonof
                    }
                    style={styles.iconStyle}
                  />
                </TouchableOpacity>

                <Text style={styles.folderOptionText}>{item.name}</Text>
              </View>
            ))}
            <View style={styles.folderOption}>
              <TouchableOpacity
                style={styles.plusContainer}
                onPress={setIsCreateFolderModalVisible}>
                <Image
                  source={Icon.plus}
                  style={{...styles.plusStyle, tintColor: COLOR.perpal_3}}
                />
              </TouchableOpacity>
              <Text style={styles.folderOptionText}>Create New Folder</Text>
            </View>
          </ScrollView>


        </View>
      </View>
    </Modal>
  );
};

export default FolderSelectionModal;
