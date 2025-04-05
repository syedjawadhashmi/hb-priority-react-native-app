import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import styles from './DocumentTypeModalStyle';
import {Icon} from '../../../../assest';
import { COLOR } from '../../../../themes/StyleGuides';
interface DocumentTypeModal {
  visible: boolean;
  onClose: () => void;
  setSteps: (step: number) => void;
}

const documentTypes = ['PDF', 'JPEG', 'PNG', 'DOCX'];

const DocumentTypeModal: React.FC<DocumentTypeModal> = ({
  visible,
  onClose,
  setSteps,
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(documentTypes[0]);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleSelectType = (type: string) => {
    setSelectedType(type);
    setIsAccordionOpen(false);
    setSteps(3);
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={{fontSize: 14,color:COLOR.gray_5}}>X</Text>
          </TouchableOpacity>

          {/* Accordion Drop-down for Document Type */}
          <Text style={styles.label}>Save As</Text>
          <TouchableOpacity
            style={styles.accordionButton}
            onPress={toggleAccordion}>
            <Text style={styles.selectedTypeText}>{selectedType}</Text>

            <View style={{position: 'absolute', right: 10, top: 10}}>
              <Image
                source={Icon.DropDown}
                style={{width: 16, height: 16, resizeMode: 'center',tintColor:COLOR.gray_5}}
              />
              {/* <DropDownIcon/> */}
            </View>

            {isAccordionOpen && (
              <View style={styles.accordionContent}>
                <FlatList
                  data={documentTypes}
                  keyExtractor={item => item}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={styles.accordionItem}
                      onPress={() => handleSelectType(item)}>
                      <Text style={styles.accordionItemText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DocumentTypeModal;
