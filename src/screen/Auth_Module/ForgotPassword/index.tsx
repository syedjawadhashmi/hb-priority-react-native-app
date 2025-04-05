import {
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import styles from './style';
  import {Icon, Images} from '../../../assest';
  import TextInputs from '../../../component/common/TextInputs';
  import {COLOR} from '../../../themes/StyleGuides';
  
  const ForgotPassword = () => {
    return (
      <ImageBackground style={styles.container} source={Images.Background}>
          <ScrollView>
        <Text style={styles.Title}>Forgot Your Password?</Text>
        <Text style={styles.discription}>Confrm your email and we will send {'\n'}
        you a link.</Text>
        <View>
          <TextInputs
            placeholder={'Email'}
            placeholderColor={COLOR.gray_5}
            style={styles.TextInputStyle}
          />
        
        </View>
 
        <TouchableOpacity style={styles.LoginBtn}>
          <Text style={styles.LognText}>Send me a link</Text>
        </TouchableOpacity>
  
       
        </ScrollView>
      </ImageBackground>
    );
  };
  export default ForgotPassword;
  