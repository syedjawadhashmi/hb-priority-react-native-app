import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import FilePickerManager from 'react-native-file-picker'; // Alternative to react-native-document-picker
import styles from './styles';
import { COLOR } from '../../../../themes/StyleGuides';
import { Icon } from '../../../../assest';

const ImportUsersModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const [step, setStep] = useState(1);
  const [fileName, setFileName] = useState<string | null>(null)

  // Function to handle file upload
  const handleFileUpload = () => {
    FilePickerManager.showFilePicker(null, (response) => {
      if (response.didCancel) {
        console.log('User cancelled file picker');
      } else if (response.error) {
        console.error('FilePickerManager Error: ', response.error);
      } else {
        setFileName(response.fileName || 'Unknown File');
      }
    });
  };

  // Function to reset the modal
  const resetModal = () => {
    setStep(1);
    setFileName(null);
    onClose();
  };

  return (
    <Modal transparent={true} visible={visible} onRequestClose={resetModal}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <ScrollView>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Import Users</Text>
              <TouchableOpacity onPress={resetModal} style={styles.closeButton}>
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Step Indicator */}
            <View style={styles.stepIndicator}>
              <View
                style={[
                  styles.stepCircle,
                  step == 1 && styles.activeStep,
                  step === 2 && styles.activeStep,
                  step === 3 && styles.activeStep,
                ]}
              >
                <Text style={[styles.stepText, { color: 'white' }]}>
                  {step === 1 ? '1' : '✔'}
                </Text>
              </View>
              <View style={styles.stepLine}></View>
              <View style={[styles.stepCircle1]}>
                <Text style={styles.stepText}>2</Text>
              </View>
            </View>

            <View style={styles.stepIndicatorTitle}>
              <Text style={{ fontWeight: '900', color: COLOR.lightBlack }}>
                Upload
              </Text>
              <Text style={{ fontWeight: '900', color: COLOR.lightBlack }}>
                Import
              </Text>
            </View>

            {/* Content Based on Steps */}
            {step === 1 && (
              <View style={styles.stepContainer}>
                <Image
                  source={Icon.Upload_1}
                  style={{ width: 40, height: 40, resizeMode: 'contain' }}
                />
                <TouchableOpacity onPress={handleFileUpload}>
                  <Text style={styles.subtitle}>Upload Spreadsheet</Text>
                </TouchableOpacity>
                <Text style={styles.description}>
                  Drag and drop or upload your file. All .xls and .xlsx file types
                  are supported.
                </Text>
                <Text style={styles.link}>
                  Download a{" "}
                  <Text
                    style={{
                      color: COLOR.perpal,
                      fontWeight: "400",
                      marginTop: "3%",
                    }}>
                    sample spreadsheet
                  </Text>
                  {"\n"}to quickly start your import
                </Text>
              </View>
            )}

            {step === 2 && (
              <View style={styles.stepContainer}>
                <View style={styles.uploadedFileContainer}>
                  <View style={styles.fileDetails}>
                    <Image source={Icon.attechment} style={{ width: 20, height: 20, resizeMode: "center" }} />
                    <Text style={{ ...styles.fileName, width: "65%", fontSize: 10 }}>{fileName}</Text>
                    <TouchableOpacity onPress={() => setFileName(null)}>
                      <Text style={styles.removeFile}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.successIconContainer}>
                    <Image source={Icon.tickcheck} />
                  </View>
                </View>
                <Text style={styles.helperText}>
                  Download a{' '}
                  <Text style={styles.linkText}>sample spreadsheet</Text> to
                  quickly start your import.
                </Text>
              </View>
            )}

            {step === 3 && (
              <View style={styles.stepContainer}>
                <View style={styles.readyContainer}>
                  <View style={styles.iconContainer}>
                    <Image source={Icon.Upload_1} style={{ width: 40, height: 40, resizeMode: "center" }} />
                  </View>
                  <Text style={styles.readyTitle}>We’re Ready To Import</Text>
                  <View
                    style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <Image
                      source={Icon.Error}
                      style={{
                        width: 20,
                        height: 20,
                        marginTop: 10,
                        resizeMode: 'center',
                        tintColor: COLOR.primary,
                      }}
                    />
                    <Text style={styles.helperText}>
                      This might take a few minutes
                    </Text>
                  </View>
                </View>
              </View>
            )}

            {/* Footer Navigation */}
            <View style={styles.footer}>
              {step === 1 && (
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity
                    onPress={() => (fileName ? setStep(step + 1) : '')}
                    style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Next</Text>
                  </TouchableOpacity>
                </View>
              )}
              {step === 2 && (
                <View style={styles.actionButtons}>
                  <TouchableOpacity
                    style={styles.startImportButton}
                    onPress={() => (fileName ? setStep(step + 1) : '')}>
                    <Text style={styles.startImportText}>Next</Text>
                  </TouchableOpacity>
                </View>
              )}
              {step === 3 && (
                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.startImportButton}>
                    <Text style={{ ...styles.startImportText, color: COLOR.gray_5 }}>
                      Start Import
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cancelButton} onPress={resetModal}>
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ImportUsersModal;
