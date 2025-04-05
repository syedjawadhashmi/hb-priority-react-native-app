import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import {Icon} from '../../../assest';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const Notepade = () => {
  const { width, height } = useWindowDimensions();
    const isLandscape = width > height;
  return (
    <View style={{...styles.container,marginBottom:isLandscape?"2%":"5%"}}>
      <View style={styles.StatusBar}>
        <View style={styles.btnCOntainer}>
          <TouchableOpacity>
            <Image style={styles.ArrowIcon} source={Icon.leftArrow} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.ArrowIcon} source={Icon.RightArrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.btnCOntainer}>
          <TouchableOpacity>
            <Image style={styles.BoldIcon} source={Icon.Bold} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.BoldIcon} source={Icon.Italic} />
          </TouchableOpacity>
        </View>
        <View style={styles.btnCOntainer}>
          <TouchableOpacity>
            <Image style={styles.BoldIcon} source={Icon.Manu} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.BoldIcon} source={Icon.ManuNumber} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            style={{...styles.BoldIcon, marginLeft: '13%'}}
            source={Icon.LinkFile}
          />
        </TouchableOpacity>
      </View>

      <TextInput style={styles.TextInputs} />
    </View>
  );
};
export default Notepade;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    alignSelf: 'center',
    height: 170,
    marginBottom: '5%',
  },
  StatusBar: {
    ...commonStyles.horizontalView,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.gray_7,
  },
  btnCOntainer: {
    ...commonStyles.horizontalView,
    borderRightWidth: 1,
    paddingVertical: '2.5%',
    paddingHorizontal: '2%',
    borderRightColor: COLOR.gray_7,
  },
  ArrowIcon: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
    marginHorizontal: 3,
  },
  BoldIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginHorizontal: 2,
  },
  TextInputs: {
    flex: 1,
    textAlignVertical: 'top',
    padding: 10,
    color: COLOR.gray_5,
    fontSize: 12,
  },

});
