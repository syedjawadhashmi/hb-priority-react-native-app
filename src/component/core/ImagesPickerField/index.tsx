import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';
import {LocationFieldProp} from '../../../data/Types';
import {Icon} from '../../../assest';
import { CameraPermission } from '../../other/CameraPermission';
import { launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react';

const ImagesPickerField = (props: LocationFieldProp) => {
  const {title, onpress, item, Icon, container, keyBoardtype} = props;
  const[selectImage,setSelectImages]=useState("")
  const handleImagePicker = async () => {
    await CameraPermission();

    const options = {
      mediaType: "photo",
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (!response.didCancel && !response.errorCode) {
        const imageUri = response.assets[0].uri;
        setSelectImages(imageUri)
      }
    });
  };
  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <View style={[styles.container, container]}>
        <TouchableOpacity style={styles.choseBtn} onPress={()=>{handleImagePicker()}} >
          <Text style={styles.text}>Choose Images</Text>
        </TouchableOpacity>
        <Text style={styles.input} >{selectImage?"file chosen":"No file chosen"}</Text>
      </View>
    </View>
  );
};
export default ImagesPickerField;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 33,
    alignSelf: 'center',
    paddingHorizontal: '4%',
    backgroundColor: COLOR.whites,
    borderRadius: 12,
    marginBottom: '0.7%',
    ...commonStyles.verticleView,
  },
  title: {
    fontSize: 12,
    color: COLOR.gray_5,
    marginLeft: '6%',
    marginBottom: '1.5%',
    marginTop: '1.5%',
    fontWeight: '700',
  },
  dropDown: {width: 16, height: 16, resizeMode: 'contain'},
  input: {color: COLOR.gray_5, fontSize: 12, flex: 1,marginLeft:"7%"},
  choseBtn: {
    backgroundColor: COLOR.gray,
    paddingHorizontal: '2%',
    borderRadius: 6,
    height: 20,
    ...commonStyles.center,
  },
  text:{fontSize:11,fontWeight:"700",color:COLOR.gray_5}
});
