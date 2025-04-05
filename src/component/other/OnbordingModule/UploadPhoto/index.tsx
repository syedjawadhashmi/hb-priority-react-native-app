import {Image, ScrollView, Text, View} from 'react-native';
import styles from './style';
import {Icon, Images} from '../../../../assest';
import Buttons from '../../../common/Buttons';
import DropDown from '../../../core/DropDown';
import {useState} from 'react';
import {Dropdata} from '../../../../data/DummayData';
import { inboxProp } from '../../../../data/Types';
import { launchImageLibrary } from "react-native-image-picker";
import { CameraPermission } from '../../CameraPermission';

const UploadPhoto = (props:inboxProp) => {
  const{onpress}=props
  const [openSize, setOpenSize] = useState(false);
  const [size, setSize] = useState(null);

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
        }
      });
    };
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.Title}>Upload a photo and{'\n'} select your title.</Text>
      <Text style={styles.discription}>
        Upload a profile picture. Then, add your job title.
      </Text>
      <Text style={{...styles.discription, fontWeight: '700'}}>
        Your profile photo{' '}
      </Text>
      <Image source={Icon.AddImage} style={styles.AddImage} />
      <Buttons title={'Upload Photo'} container={styles.uploadBtn} onpress={()=>handleImagePicker()}    />
      <Text style={{...styles.discription, fontWeight: '700'}}>
        What’s your job title?
      </Text>
      <View style={{alignSelf:"center"}} >
      <DropDown
        isOpen={openSize}
        placeText={{fontWeight: '400', fontSize: 14}}
        toggleDropdown={() => setOpenSize(openSize ? false : true)}
        options={Dropdata}
        onSelect={(e: any) => setSize(e)}
        selectedOption={size}
        container={styles.DropDown}
        placeHolder={'Choose one'}
        DropDownContaianer={styles.DrawerContainer}
      />
      </View>
   
      <View style={styles.buttonContainer}>
        <Buttons title={'Skip'} container={styles.SkipBtn} onpress={onpress} />
        <Buttons title={'Continue'} container={styles.ContinueBtn}  onpress={onpress}  />
      </View>
      <Image source={Images.HubSparkLogo} style={styles.logo} />
      </ScrollView>
    </View>
  );
};
export default UploadPhoto;
