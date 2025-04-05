import {Dimensions, Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../../themes/StyleGuides';
import {Icon} from '../../../../assest';
import { inboxProp } from '../../../../data/Types';
const {width, height} = Dimensions.get('window');

const Documents = (propes:inboxProp) => {
  const{onpress}=propes


  return (
    <TouchableOpacity onPress={onpress} style={styles.container} >
      <Text style={styles.Title}>Documents</Text>
      <View style={styles.DocFirst}>
        <View style={styles.DocSecond}>
          <Image source={Icon.Docoment} style={styles.icon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Documents;

const styles = StyleSheet.create({
  container: {
    width: width * 0.3,
    height: 107,
    borderWidth: 1.5,
    borderRadius: 25,
    backgroundColor: COLOR.gray_7,
    borderColor: COLOR.perpal_3,
  },
  Title: {
    fontSize: normalize(10),
    fontWeight: '700',
    color: COLOR.black,
    marginTop: '5%',
    marginLeft: '10%',
  },
  DocFirst: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLOR.whites,
    elevation: 10,
    ...commonStyles.center,
    alignSelf:"center",
    marginTop:"5%"

  },
  DocSecond: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: COLOR.perpal_3,
    elevation: 10,
    ...commonStyles.center,
    
  },
  icon:{width:25,height:25,resizeMode:"contain"}
});
