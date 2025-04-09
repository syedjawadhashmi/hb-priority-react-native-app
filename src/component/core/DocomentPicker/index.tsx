
import FilePickerManager from 'react-native-file-picker'; 
export const handleDocumentSelection = async () => {
  FilePickerManager.showFilePicker(null, (response) => {
    if (response.didCancel) {
      console.log('User cancelled file picker');
    } else if (response.error) {
      console.error('FilePickerManager Error: ', response.error);
    } else {
      console.log(response.fileName || 'Unknown File');
    }
  });
};