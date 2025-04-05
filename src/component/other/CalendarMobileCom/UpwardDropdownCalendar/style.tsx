import {StyleSheet} from 'react-native';
import {COLOR, TEXT_STYLE} from '../../../../themes/StyleGuides';

export const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    marginHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: COLOR.white,
    paddingTop: 8,
  },
  sectionTitle: {
    color: COLOR.perpal,
    fontSize: TEXT_STYLE.subTitle.fontSize,
    fontFamily: TEXT_STYLE.subTitle.fontFamily,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statusButton: {
    backgroundColor: COLOR.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusText: {
    fontSize: TEXT_STYLE.text_medium.fontSize,
    fontFamily: TEXT_STYLE.text_medium.fontFamily,
    color: COLOR.black,
  },
  selectedText: {
    color: COLOR.perpal,
    fontWeight: 'bold',
  },
  dropdownIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  dropdownContainer: {
    position: 'absolute',
    bottom: 0, // Adjust based on height of dropdown items
    width: '100%',
    backgroundColor: COLOR.white,
    borderRadius: 8,
  },
  dropdownItem: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  dropdownItemText: {
    fontSize: TEXT_STYLE.text_medium.fontSize,
    fontFamily: TEXT_STYLE.text_medium.fontFamily,
    color: COLOR.black,
  },
  selectedOption: {
    backgroundColor: '',
  },
  selectedOptionText: {
    color: COLOR.perpal,
    fontWeight: 'bold',
  },
});
