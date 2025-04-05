import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLOR, commonStyles } from '../../../themes/StyleGuides';
import { launchImageLibrary } from "react-native-image-picker";
import { CameraPermission } from '../../other/CameraPermission';
import { useState } from 'react';


interface ImagesPickerProp{
  containeter?:any

}
const ImagesPicker = (props:ImagesPickerProp) => {
  const{containeter}=props
  const[img,setImg]=useState("")
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
        setImg(imageUri)
      }
    });
  };
 return (
    <View style={[styles.FileChoose,containeter]}>
    <TouchableOpacity style={styles.Choosebtn} onPress={()=>handleImagePicker()} >
      <Text style={styles.ChooseStyle}>Choose file</Text>
    </TouchableOpacity>
    <Text style={styles.Nofile}>{img?img.substring(0, 25) + "...":"No file chosen"}</Text>
  </View>
 )
}
export default ImagesPicker


const styles = StyleSheet.create({
    ChooseStyle: {
        fontSize: 10,
        fontWeight: '700',
        color: COLOR.whites,
      },
      Choosebtn: {
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        backgroundColor: COLOR.gray_5,
        borderRadius:8,
        marginLeft:"7%"
      },
      Nofile:{
        fontSize:12,
        fontStyle:"italic",
        color:COLOR.gray_5,
        marginLeft:"4%"
    
      },
      FileChoose: {
        width: '90%',
        height: 70,
        backgroundColor: COLOR.whites,
        borderRadius: 13,
        alignSelf: 'center',
        ...commonStyles.horizontalView,
    
      },
});

