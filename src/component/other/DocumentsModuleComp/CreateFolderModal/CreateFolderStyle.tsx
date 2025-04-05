import {StyleSheet} from 'react-native';
import { COLOR } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 15,
    color: '#6d6d6d',
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    color: '#000',
    marginBottom: 20,
    height:30,
    padding:0,
    paddingHorizontal:'3%'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    gap: 10,
  },
  cancelButton: {
    backgroundColor: '#ba0416',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    marginRight: 5,
  },
  createButton: {
    backgroundColor: '#40f440',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonText: {fontSize: 12, fontWeight: "900"},
});
export default styles;
