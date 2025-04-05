import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Buttons from '../../../common/Buttons';
import TextInputs from '../../../common/TextInputs';
import {COLOR} from '../../../../themes/StyleGuides';
import {Icon, Images} from '../../../../assest';
import {useState} from 'react';
import {inboxProp} from '../../../../data/Types';

const Login = (props: inboxProp) => {
  const {onpress,onpressLogin} = props;
  const [hidePassword, setHidePassword] = useState(true);
  const [Login, setLogin] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.btnContainer}>
        <Buttons title={'Sign In with Google'} container={styles.btnStyle} />
        <Buttons title={'Sign In with Apple'} container={styles.btnStyle} />
        <Buttons
          title={'Continue with Email'}
          container={styles.btnStyle}
          onpress={() => setLogin(true)}
        />
      </View>
      {Login ? (
        <View>
          <TextInputs
            placeholder={'Enter your email'}
            placeholderColor={COLOR.gray_6}
            style={{marginTop: '2%'}}
            keyboardType="email-address"
          />
          <TextInputs
            IconOnpress={() => setHidePassword(hidePassword ? false : true)}
            style={styles.btnStyle}
            placeholder={'Enter your password'}
            placeholderColor={COLOR.gray_6}
            secureText={hidePassword}
            Icons={hidePassword ? Icon.hidden : Icon.eye}
          />
        <Buttons
          title={'Continue'}
          container={{...styles.btnStyle,}}
          onpress={onpress}
        />
        </View>
        
      ) : (
        <View style={{height: 97}} />
      )}

      <View style={styles.LogiNTextContainer}>
        <Text style={styles.Logintext}>Already have an account?</Text>
        <TouchableOpacity onPress={onpressLogin}>
          <Text style={{...styles.Logintext, color: COLOR.perpal}}>Log In</Text>
        </TouchableOpacity>
      </View>
      <Image source={Images.HubSparkLogo} style={styles.logo} />
      </ScrollView>
    </View>
  );
};
export default Login;
