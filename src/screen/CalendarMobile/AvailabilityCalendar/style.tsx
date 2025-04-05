import {StyleSheet} from 'react-native';
import {COLOR} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.gray_4,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 15,
  },
  header: {
    width: '100%',
    padding: 10,
    backgroundColor: COLOR.perpal,
    borderRadius: 15,
    marginBottom: 15,
  },
  headerText: {
    color: COLOR.white,
    fontWeight: '900',
  },
  subHeaderText: {
    color: COLOR.lightBlack,
    marginBottom: 10,
    fontWeight: '900',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  sectionTitle: {
    color: COLOR.lightBlack,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
  },
  dayContainer: {
    width: '100%',
    marginBottom: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: COLOR.gray_4,
    marginRight: 10,
    backgroundColor: COLOR.white,
    borderRadius: 3,
  },
  checkboxChecked: {
    backgroundColor: COLOR.perpal,
  },
  dayText: {
    color: COLOR.lightBlack,
  },
  dayTextActive: {
    color: COLOR.perpal,
  },
  slotsContainer: {
    marginLeft: 30,
    marginTop: 5,
  },
  slotInput: {
    borderWidth: 1,
    borderColor: COLOR.gray_4,
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
    textAlign: 'center',
    width: 80,
  },
  inputLeft: {
    marginRight: 10,
  },
  addButton: {
    backgroundColor: COLOR.perpal,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
  },
  addIcon: {
    color: COLOR.white,
    fontWeight: 'bold',
  },
  removeButton: {
    marginLeft: 10,
  },
  removeIcon: {
    color: COLOR.red,
  },
  closedText: {
    color: COLOR.gray,
    fontStyle: 'italic',
  },
  addDateButton: {
    backgroundColor: COLOR.perpal,
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  addDateButtonText: {
    color: COLOR.white,
    fontWeight: '900',
  },
  bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position: 'absolute',
    bottom: 0,
  },
});

export default styles;
