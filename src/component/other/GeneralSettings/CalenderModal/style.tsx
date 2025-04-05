import {StyleSheet} from 'react-native';
import {COLOR} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:"center"
  },
  modal: {
    width: '70%',
    backgroundColor: COLOR.white1,
    position: 'absolute',
    bottom: '15%',
    borderRadius: 10,
  },
  calendar: {
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: '#e0e0e0',
  },
  btnStyle: {
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    borderRadius: 10,
    backgroundColor: COLOR.primary,
    alignSelf: 'flex-end',
    marginVertical: '3%',
    marginHorizontal: '5%',
  },
  TextStyle: {fontSize: 12, fontWeight: '800', color: COLOR.black},
  landscapeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  landscapeModal: {
    width: '60%',
  },
  landscapeCalendar: {
    width: '100%',
  },
});

export default styles;
