import {StyleSheet} from 'react-native';
import {COLOR} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {},
  AmmountContainer: {
    width: '90%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    borderRadius: 14,
    marginBottom: '5%',
  },
  titleContainer: {
    height: 40,
    marginBottom: '2%',
    backgroundColor: COLOR.perpal,
    justifyContent: 'center',
    borderRadius: 14,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLOR.whites,
    marginLeft: '3.6%',
  },
  textInput: {flex: 1,color:COLOR.black,textAlignVertical:"top"},
  TxetField: {
    width: '90%',
    height: 70,
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop:"5%",
    padding:"2%"
  },
  GenerateKeyBtn: {
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    borderRadius: 13,
    backgroundColor:COLOR.perpal_2,
    marginLeft:"4%"
  },
  GenerateKeyText: {fontSize: 12, fontWeight: '800', color: COLOR.white},
});

export default styles;
