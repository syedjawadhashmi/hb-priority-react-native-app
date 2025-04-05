import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../../themes/StyleGuides';
import { LocationFieldProp } from '../../../../data/Types';

const TypeFiels = (props: LocationFieldProp) => {
  const {title, onpress, item,Icon,container,keyBoardtype,defaultValue} = props;
  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <View style={[styles.container,container]}>
    {Icon&&    <Image style={styles.dropDown} source={Icon} />}
    <Text style={styles.defultText}>{defaultValue&&defaultValue}</Text>
        <TextInput  style={styles.input} keyboardType={keyBoardtype} />
      </View>
    </View>
  );
};
export default TypeFiels;

const styles = StyleSheet.create({
  container: {
    // width: '60%',
    height: 33,
    alignSelf: 'center',
    paddingHorizontal: '4%',
    backgroundColor: COLOR.whites,
    borderRadius: 12,
    marginBottom:"0.7%",
    ...commonStyles.verticleView

  },
  title: {
    fontSize: 12,
    color: COLOR.gray_5,
    marginLeft: '6%',
    marginBottom: '1.5%',
    marginTop: '1.5%',
    fontWeight: '700',
    paddingRight:"2.5%"
  },
  dropDown: {width: 16, height: 16, resizeMode: 'contain'},
  input: {color: COLOR.gray_5, fontSize: 15, height: 40,flex:1},
  defultText:{fontSize:15,color:COLOR.gray_5}
});
