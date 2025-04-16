import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import {Icon, Images} from '../../../assest';
import TextInputs from '../../../component/common/TextInputs';
import {COLOR} from '../../../themes/StyleGuides';
import SCREEN from '../../../data/ScrName';

const Login = (props: any) => {
  const {navigation} = props;
  return (
    <ImageBackground style={styles.container} source={Images.Background}>
      <ScrollView>
        <Text style={styles.Title}>Login</Text>
        <Text style={styles.discription}>Please sign in to continue</Text>
        <View>
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
        </View>
        <TouchableOpacity
          style={styles.ForgetBtn}
          onPress={() => navigation.navigate(SCREEN.ForgotPassword)}>
          <Text style={styles.forgetText}>Forgot your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.LoginBtn}
          onPress={() =>
            navigation.navigate(SCREEN.DashBoardDrawer, {
              screen: SCREEN.DrawerStack,
              params: {
                screen: SCREEN.GeneralSettingsAccount,
              },
            })
          }>
          <Text style={styles.LognText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.OrLoginCOntoaner}>
          <View style={styles.line} />
          <Text style={styles.OrLogintext}>Or Login with</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.linkBtn}>
          <Image source={Icon.google} style={styles.Icons} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkBtn}>
          <Image source={Icon.facebook} style={styles.Icons} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkBtn}>
          <Image source={Icon.apple} style={styles.Icons} />
        </TouchableOpacity>
        <View style={styles.textCOntainer}>
          <Text style={styles.SignUpText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate(SCREEN.SignUp)}>
            <Text style={{...styles.SignUpText, color: COLOR.perpal_2}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default Login;
