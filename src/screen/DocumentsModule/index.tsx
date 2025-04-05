import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {useState} from 'react';
import Header from '../../component/common/Header';
import {Icon} from '../../assest';
import Input from '../../component/common/Input';
import FileItem from '../../component/other/DocumentsModuleComp/FileItem/FileItem';
import DocumentTypeModal from '../../component/other/DocumentsModuleComp/DocumentTypeModal/DocumentTypeModal';
import {launchImageLibrary} from 'react-native-image-picker';
import {CameraPermission} from '../../component/other/CameraPermission';
import FolderSelectionModal from '../../component/other/DocumentsModuleComp/FolderSelectionModal/FolderSelectionModal';
import CreateFolderModal from '../../component/other/DocumentsModuleComp/CreateFolderModal/CreateFolderModal';
import {COLOR, hp} from '../../themes/StyleGuides';
import AddDocumentsModal from '../../component/other/DocumentsModuleComp/AddDocumentsModal';

const DocumentsModule = (props: any) => {
  const {navigation} = props;
  const [isAddDocumentModalVisible, setIsAddDocumentModalVisible] =
    useState(false);
  const [SaveAs, setSaveAs] = useState(false);
  const [ChooseFolder, setChooseFolder] = useState(false);
  const [isCreateFolderModalVisible, setIsCreateFolderModalVisible] =
    useState(false);
  const [steps, setSteps] = useState(1);
  const [folders, setFolders] = useState([
    {id: '1', name: 'Default Folder', icon: 'folder'},
  ]);

  const [recentFiles, setRecentFiles] = useState([
    {id: '1', name: 'Invoice For Customer 1', type: 'pdf'},
    {id: '2', name: 'Invoice For Customer 2', type: 'pdf'},
    {id: '3', name: 'Proof Of Delivery 3', type: 'pdf'},
  ]);

  const handleCreateFolder = (folderName: any) => {
    setFolders([
      ...folders,
      {id: Date.now().toString(), name: folderName, icon: 'folder-open'},
    ]);
    setIsCreateFolderModalVisible(false);
  };

  const deleteFile = (id: any) => {
    setRecentFiles(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleImagePicker = async () => {
    await CameraPermission();

    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel && !response.errorCode) {
        const imageUri = response.assets[0].uri;
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header
        firstIcon={Icon.bars}
        title="Documents"
        onpesDrawer={() => navigation.openDrawer()}
      />
      <ScrollView scrollEnabled={true}>
        <Input
          Icons={Icon.search}
          placeholder={'Search Documents'}
          IconStyle={{tintColor: COLOR.gray}}
          textStyle={{fontSize: 12}}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              setIsAddDocumentModalVisible(true);
              setSteps(1); // Start from step 1
            }}>
            <Text style={styles.addButtonText}>Add Document</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>Folders</Text>

        <View style={styles.FolderCotainer}>
          <View>
            <TouchableOpacity
              style={styles.folderGrid}
              onPress={() => setSaveAs(true)}>
              <Image source={Icon.Folder} style={styles.FolderICon} />
            </TouchableOpacity>
            <Text style={styles.folderTitle}>Default Folder</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{...styles.folderGrid, marginLeft: '4%'}}
              onPress={() => setChooseFolder(true)}>
              <View style={styles.PlusCircle}>
                <Image source={Icon.plus} style={styles.plisIcon} />
              </View>
            </TouchableOpacity>
            <Text style={styles.folderTitle}>Create Custom Folder</Text>
          </View>
        </View>
        <Text
          style={{...styles.sectionTitle, marginTop: '5%', marginBottom: '2%'}}>
          Recent Files
        </Text>
        <FlatList
          scrollEnabled={false}
          data={recentFiles}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <FileItem file={item} deleteFile={deleteFile} />
          )}
        />

        <View style={{height: hp('20%')}} />
      </ScrollView>
      <View style={styles.bottomBar}></View>

      <AddDocumentsModal
        visible={isAddDocumentModalVisible}
        onClose={() => setIsAddDocumentModalVisible(false)}
        handleCamera={() => handleImagePicker()}
      />
      <DocumentTypeModal
        visible={SaveAs}
        setSteps={setSteps}
        onClose={() => setSaveAs(false)}
      />
      <FolderSelectionModal
        visible={ChooseFolder}
        onClose={() => {
          setIsAddDocumentModalVisible(false);
          setSteps(1); // Reset to initial step
        }}
        folders={folders}
        documentName={'Invoice For Customer 1.pdf'}
        setIsCreateFolderModalVisible={() => {
          setIsCreateFolderModalVisible(true), setChooseFolder(false);
        }}
      />

      <CreateFolderModal
        visible={isCreateFolderModalVisible}
        onCreateFolder={handleCreateFolder}
        onClose={() => setIsCreateFolderModalVisible(false)}
      />
    </View>
  );
};
export default DocumentsModule;
