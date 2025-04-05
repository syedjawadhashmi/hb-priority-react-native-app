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
import SCREEN from '../../../data/ScrName';

const SignUp = (props: any) => {
  const {navigation} = props;

  return (
    <ImageBackground style={styles.container} source={Images.Background}>
      <ScrollView>
        <Text style={styles.Title}>Sign up</Text>
        <View>
          <TextInputs
            placeholder={'Full Name'}
            placeholderColor={COLOR.gray_5}
            style={styles.TextInputStyle}
          />
          <TextInputs
            placeholder={'Email'}
            placeholderColor={COLOR.gray_5}
            style={styles.TextInputStyle}
          />
          <TextInputs
            placeholder={'Password'}
            placeholderColor={COLOR.gray_5}
            style={styles.TextInputStyle}
          />
          <TextInputs
            placeholder={'Confrm Password'}
            placeholderColor={COLOR.gray_5}
            style={styles.TextInputStyle}
          />
        </View>

        <TouchableOpacity style={styles.LoginBtn}>
          <Text style={styles.LognText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.textCOntainer}>
          <Text style={styles.SignUpText}>Already have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate(SCREEN.Login)}  >
            <Text style={{...styles.SignUpText, color: COLOR.perpal_2}}>
              LogIn
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default SignUp;
