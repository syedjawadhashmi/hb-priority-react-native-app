import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import TextInputs from '../../../common/TextInputs';
import {COLOR} from '../../../../themes/StyleGuides';
import {Images} from '../../../../assest';
import {CodeProp, inboxProp} from '../../../../data/Types';
import {useEffect, useState} from 'react';

const EnterCode = (props: CodeProp) => {
  const {onpress} = props;
  const [digit, setDigit] = useState('');
  useEffect(() => {
    if( digit.length === 4){
      console.log("true")
      onpress()
    }
  }, [digit]);

  return (
    <View style={styles.container}>
      <ScrollView >
        <Text style={styles.Title}>Perfect! We just {'\n'}texted you a code.</Text>
        <Text style={styles.discription}>
          We sent a 4-digit code to
          <Text style={{color: COLOR.black_1, fontWeight: '500'}}>
            (555) 123-5896.
          </Text>
        </Text>
        <Text style={styles.discription}>
          Enter code to continue setting up
        </Text>
        <TextInputs
          placeholder={'Enter 4-digit code'}
          placeholderColor={COLOR.gray_6}
          style={styles.btnStyle}
          onChange={(e: any) => setDigit(e)}
          keyboardType="number-pad"
        />

        <Text style={{...styles.discription, fontSize: 16}}>
          Didn’t get the code?
          <TouchableOpacity>
            <Text style={{color: COLOR.perpal,top:4}}>Resend </Text>
          </TouchableOpacity>
          or
        </Text>
        <Text style={{...styles.discription, fontSize: 16}}>
          Update your mobile number
        </Text>
        <Image source={Images.HubSparkLogo} style={styles.logo} />
      </ScrollView>
    </View>
  );
};
export default EnterCode;
