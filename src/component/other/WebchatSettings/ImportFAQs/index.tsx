import {
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import styles from './style';
import {Icon} from '../../../../assest';
import {useState} from 'react';
import {COLOR, commonStyles, wp} from '../../../../themes/StyleGuides';
import {UpdatePaymentModal} from '../../../../data/Types';
// import DocumentPicker from 'react-native-document-picker';
import {TableImportFAQs} from '../../../../data/DummayData';
import FilePickerManager from 'react-native-file-picker';

const ImportFAQs = (props: UpdatePaymentModal) => {
  const {close, visible, save} = props;
  const [status, setStatus] = useState(1);
  const [document, setDocumentss] = useState('');
  const [readyImport, setreadyImport] = useState(1);
  const [completeImport, setCompleteImport] = useState(1);
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  const handleDocumentUpload = async () => {
    // try {
    //   const result = await DocumentPicker.pick({
    //     type: [
    //       DocumentPicker.types.xlsx,
    //       DocumentPicker.types.xls,
    //       DocumentPicker.types.pdf,
    //     ],
    //   });
    //   const fileName = result[0].name;
    //   setDocumentss(fileName);
    //   console.log('Selected File: ', document);
    // } catch (err) {
    //   if (DocumentPicker.isCancel(err)) {
    //     console.log('User canceled the document picker');
    //   } else {
    //     console.error('Error picking document: ', err);
    //   }
    // }
    FilePickerManager.showFilePicker(null, (response) => {
      if (response.didCancel) {
        console.log('User cancelled file picker');
      } else if (response.error) {
        console.error('FilePickerManager Error: ', response.error);
      } else {
      }
    });
  };

  const renderView = () => {
    switch (status) {
      case 1:
        return (
          <View>

            {document ? (
              <View style={styles.selectedDoc}>
                <View
                  style={{
                    ...commonStyles.verticleView,
                    backgroundColor: COLOR.gray_7,
                    height: 30,
                    paddingHorizontal: '2%',
                  }}>
                  <View style={{...commonStyles.horizontalView}}>
                    <Image
                      source={Icon.attechment}
                      style={{width: 13, height: 13, resizeMode: 'center'}}
                    />
                    <Text
                      style={{
                        ...styles.RemoveText,
                        color: COLOR.gray_5,
                        marginLeft: '2%',
                      }}>
                      {document}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => setDocumentss('')}>
                    <Text style={styles.RemoveText}>Remove</Text>
                  </TouchableOpacity>
                </View>
                <Image source={Icon.tickcheck} style={styles.tickcheck} />
              </View>
            ) : (
              <View>
                <TouchableOpacity onPress={() => handleDocumentUpload()}>
                  <Image source={Icon.Upload_1} style={styles.UploadIcon} />
                  <Text style={styles.UploadText}>Upload Spreadsheet</Text>
                </TouchableOpacity>
                <Text style={styles.disText}>
                  Drag and drop to upload your FAQs{'\n'} All .xlsx and .xls
                  file types are supported
                </Text>
                <Text style={{...styles.DownloadText, marginTop: '6%'}}>
                  Download a{' '}
                  <Text style={{color: COLOR.perpal_3}}>
                    {' '}
                    sample spreadsheet
                  </Text>
                  {'\n'} to quickly start your import
                </Text>
              </View>
            )}
          </View>
        );
      case 2:
        return (
          <View>
            {readyImport == 1 ? (
              <View>
                <View style={styles.MatchLinkField}>
                  <Image
                    source={Icon.attechment}
                    style={{width: 13, height: 13, resizeMode: 'center'}}
                  />
                  <Text
                    style={{
                      ...styles.RemoveText,
                      color: COLOR.gray_5,
                      marginLeft: '2%',
                    }}>
                    {document ? document : 'NewFAQs_01542442313.csv'}
                  </Text>
                </View>
                <Text style={styles.matchViewText}>Spreadsheet Preview</Text>
                <View style={styles.Table}>
                  <View style={{width: '100%', ...commonStyles.verticleView}}>
                    <View style={{...styles.tabHeaderContainer,width:isLandscape?wp(48):80}}>
                      <Text style={styles.tabHeadreText}>Matched</Text>
                    </View>
                    <View style={{...styles.tabHeaderContainer,width:isLandscape?wp(48):80}}>
                      <Text style={styles.tabHeadreText}>
                        Spreadsheet{'\n'}column
                      </Text>
                    </View>
                    <View style={{...styles.tabHeaderContainer,width:isLandscape?wp(48):80}}>
                      <Text style={styles.tabHeadreText}>Sample{'\n'}data</Text>
                    </View>
                    <View style={{...styles.tabHeaderContainer,width:isLandscape?wp(48):80}}>
                      <Text style={styles.tabHeadreText}>
                        HubSpark{'\n'}property
                      </Text>
                    </View>
                  </View>

                  {TableImportFAQs.map(item => (
                    <View style={{width: '100%', ...commonStyles.verticleView}}>
                      <View
                        style={{
                          ...styles.tabHeaderContainers,
                          backgroundColor: COLOR.whites,
                          width:isLandscape?wp(48):80
                        }}>
                        <View
                          style={styles.circleView}
                        />
                      </View>
                      <View
                        style={{
                          ...styles.tabHeaderContainers,
                          backgroundColor: COLOR.whites,
                          width:isLandscape?wp(48):80
                        }}>
                        <Text
                          style={{
                            ...styles.tabHeadreText,
                            color: COLOR.gray_5,
                          }}>
                          {item.Spreadsheet}
                        </Text>
                      </View>
                      <View
                        style={{
                          ...styles.tabHeaderContainers,
                          backgroundColor: COLOR.whites,
                          width:isLandscape?wp(48):80
                        }}>
                        {item.SampleData.map(items => (
                          <Text
                            style={{
                              ...styles.tabHeadreText,
                              color: COLOR.gray_5,
                            }}>
                            {items.Q}
                          </Text>
                        ))}
                      </View>
                      <View
                        style={{
                          ...styles.tabHeaderContainers,
                          backgroundColor: COLOR.whites,
                          ...commonStyles.horizontalView,
                          width:isLandscape?wp(48):80
                        }}>
                        <Text
                          style={{
                            ...styles.tabHeadreText,
                            color: COLOR.gray_5,
                            width: 50,
                          }}>
                          {item.HubSpark}
                        </Text>
                        <Image
                          source={Icon.DropDown}
                          style={{width: 10, height: 10, resizeMode: 'contain'}}
                          tintColor={COLOR.gray_5}
                        />
                      </View>
                    </View>
                  ))}
                </View>
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    onPress={() => setreadyImport(readyImport + 1)}
                    style={{...styles.btnSave, backgroundColor: COLOR.primary}}>
                    <Text style={{...styles.SaveBtnText, color: COLOR.black}}>
                      Next
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setStatus(status - 1)}
                    style={{...styles.btnSave, backgroundColor: COLOR.red}}>
                    <Text style={styles.SaveBtnText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <TouchableOpacity onPress={() => handleDocumentUpload()}>
                  <Image source={Icon.Upload_1} style={styles.UploadIcon} />
                  <Text style={styles.UploadText}>We’re Ready To Import</Text>
                </TouchableOpacity>

                <View
                  style={{
                    ...commonStyles.horizontalView,
                    alignSelf: 'center',
                    marginVertical: '1%',
                  }}>
                  <Image source={Icon.Error} style={styles.Error} />
                  <Text style={styles.disText}>
                    This might take a few minutes{' '}
                  </Text>
                </View>
                <Text style={styles.disText}>
                  No need to wait here, we’ll take care{'\n'} of everything
                  else.
                </Text>
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    onPress={() => setStatus(status + 1)}
                    style={{...styles.btnSave, backgroundColor: COLOR.primary}}>
                    <Text style={{...styles.SaveBtnText, color: COLOR.black}}>
                      Start Import
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setStatus(status - 1)}
                    style={{...styles.btnSave, backgroundColor: COLOR.red}}>
                    <Text style={styles.SaveBtnText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        );
      case 3:
        return (
          <View>
            {completeImport == 1 ? (
              <View>
                <TouchableOpacity onPress={() => handleDocumentUpload()}>
                  <Image source={Icon.Upload_1} style={styles.UploadIcon} />
                  <Text style={styles.UploadText}>We’re Ready To Import</Text>
                </TouchableOpacity>

                <View
                  style={{
                    ...commonStyles.horizontalView,
                    alignSelf: 'center',
                    marginVertical: '1%',
                  }}>
                  <Image source={Icon.Error} style={styles.Error} />
                  <Text style={styles.disText}>
                    This might take a few minutes{' '}
                  </Text>
                </View>
                <Text style={styles.disText}>
                  No need to wait here, we’ll take care{'\n'} of everything
                  else.
                </Text>
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    onPress={() => setCompleteImport(completeImport + 1)}
                    style={{...styles.btnSave, backgroundColor: COLOR.primary}}>
                    <Text style={{...styles.SaveBtnText, color: COLOR.black}}>
                      Return to FAQs
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : completeImport == 2 ? (
              <View>
                <View>
                  <TouchableOpacity onPress={() => handleDocumentUpload()}>
                    <Image source={Icon.tickcheck} style={styles.UploadIcon} />
                    <Text style={styles.UploadText}>
                      Your Import Is Complete
                    </Text>
                  </TouchableOpacity>

                  <Text style={styles.disText}>3 rows were processed</Text>
                  <Text style={styles.disText}>3 FAQs added</Text>
                  <View style={styles.btnContainer}>
                    <TouchableOpacity
                      onPress={() => setCompleteImport(completeImport + 1)}
                      style={{
                        ...styles.btnSave,
                        backgroundColor: COLOR.primary,
                      }}>
                      <Text style={{...styles.SaveBtnText, color: COLOR.black}}>
                        Return to FAQs
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : (
              <View>
                <View>
                  <TouchableOpacity onPress={() => handleDocumentUpload()}>
                    <Image source={Icon.tickcheck} style={styles.UploadIcon} />
                    <Text style={styles.UploadText}>
                      Your Import Is Complete{' '}
                    </Text>
                  </TouchableOpacity>

                  <Text style={styles.disText}>
                    We couldn’t import any data from your file
                  </Text>
                  <Text style={styles.disText}>2 rows were processed</Text>
                  <View
                    style={{
                      ...commonStyles.horizontalView,
                      alignSelf: 'center',
                      marginTop: '3%',
                    }}>
                    <Image
                      source={Icon.warrning}
                      style={styles.Error}
                      tintColor={COLOR.red}
                    />
                    <Text style={styles.disText}>2 rows were not imported</Text>
                  </View>

                  <TouchableOpacity style={styles.DownloadBtn}>
                    <Image
                      source={Icon.Download_3}
                      style={styles.DownloadIcon}
                    />
                    <Text style={styles.Downloadtext}>Download error file</Text>
                  </TouchableOpacity>
                  <Text style={{...styles.disText, marginTop: '4%'}}>
                    You can fix the errors, and start a new bulk import{'\n'}{' '}
                    when you are ready.
                  </Text>
                  <View style={styles.btnContainer}>
                    <TouchableOpacity
                      onPress={() => setCompleteImport(completeImport + 1)}
                      style={{
                        ...styles.btnSave,
                        backgroundColor: COLOR.primary,
                      }}>
                      <Text style={{...styles.SaveBtnText, color: COLOR.black}}>
                        Return to contacts{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <Modal transparent visible={visible}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Import FAQs</Text>
            <TouchableOpacity onPress={close}>
              <Image
                source={Icon.close}
                style={{width: 10, height: 10, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              ...commonStyles.horizontalView,
              alignSelf: 'center',
              marginTop: '7%',
            }}>
            <View
              style={{
                ...styles.Circle,
                backgroundColor: status >= 1 ? COLOR.perpal_3 : COLOR.white1,
              }}>
              <Text
                style={{
                  ...styles.number,
                  color: status == 1 ? COLOR.whites : COLOR.perpal_3,
                }}>
                {document ? (
                  <Image
                    source={Icon.Simpletick}
                    style={styles.tick}
                    tintColor={COLOR.whites}
                  />
                ) : (
                  <Text
                    style={{
                      ...styles.number,
                      color: status == 1 ? COLOR.whites : COLOR.perpal_3,
                    }}>
                    1
                  </Text>
                  
                )}
              </Text>
            </View>
            <View style={{...styles.line,width:isLandscape?"33%":80}} />
            <View
              style={{
                ...styles.Circle,
                backgroundColor: status >= 2 ? COLOR.perpal_3 : COLOR.white1,
              }}>
              {readyImport == 1 ? (
                <Text
                  style={{
                    ...styles.number,
                    color: status == 2 ? COLOR.whites : COLOR.perpal_3,
                  }}>
                  2
                </Text>
              ) : (
                <Image
                  source={Icon.Simpletick}
                  style={styles.tick}
                  tintColor={COLOR.whites}
                />
              )}
            </View>
            <View style={{...styles.line,width:isLandscape?"33%":80}} />
            <View
              style={{
                ...styles.Circle,
                backgroundColor: status == 3 ? COLOR.perpal_3 : COLOR.white1,
              }}>
              {completeImport == 1 ? (
                <Text
                  style={{
                    ...styles.number,
                    color: status == 3 ? COLOR.whites : COLOR.perpal_3,
                  }}>
                  3
                </Text>
              ) : (
                <Image
                  source={Icon.Simpletick}
                  style={styles.tick}
                  tintColor={COLOR.whites}
                />
              )}
            </View>
          </View>
          <View
            style={{
              ...commonStyles.verticleView,
              paddingHorizontal: '9%',
              marginTop: '2%',
            }}>
            <Text style={styles.textUpload}>Upload</Text>
            <Text style={styles.textUpload}>Match</Text>
            <Text style={styles.textUpload}>Import</Text>
          </View>
          <View style={{marginVertical: 20}}>{renderView()}</View>

          {status >= 2 || (
            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={() => setStatus(status + 1)}
                style={{...styles.btnSave, backgroundColor: COLOR.primary}}>
                <Text style={{...styles.SaveBtnText, color: COLOR.black}}>
                  Next
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setStatus(status - 1)}
                style={{...styles.btnSave, backgroundColor: COLOR.red}}>
                <Text style={styles.SaveBtnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ImportFAQs;
