
import DocumentPicker from '@react-native-documents/picker';

export const handleDocumentSelection = async () => {
  try {
    const response = await DocumentPicker.pick({
      allowMultiSelection: false,
      type: ['application/pdf', 'image/*'], // Pick only PDF or Images
    });

    if (response && response.length > 0) {
      const file = response[0];
      console.log('Selected file:', file);
      return file;
    }

    return null;
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      console.log('User cancelled picker');
      return null;
    } else {
      console.error('Document Picker Error:', err);
      throw err;
    }
  }
};