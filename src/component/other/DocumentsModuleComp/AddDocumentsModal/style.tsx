import {StyleSheet} from 'react-native';
import { commonStyles, normalize } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    padding: 20,
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    marginBottom: 20,
...commonStyles.horizontalView,
    backgroundColor: '#5B2C6F',
    paddingVertical: 7,
    paddingHorizontal: "5%",
    borderRadius: 10,
justifyContent:"center"  },
  cameraButtonText: {fontSize: normalize(16), color: 'white', },
  closeButton: {
    borderRadius: 100,
    paddingVertical: 3,
    paddingHorizontal: 3,
    position: 'absolute',
    top: 5,
    right: 10,
  },
});
export default styles;
