import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {useState} from 'react';
import {Icon, Images} from '../../../../assest';
import Buttons from '../../../common/Buttons';
import {COLOR} from '../../../../themes/StyleGuides';
import { inboxProp } from '../../../../data/Types';

const data = [
  {name: 'Get more customers'},
  {name: 'Communicate better with my cusomers'},
  {name: 'Convert website visitors into leads'},
  {name: 'Make it easier for my cusomers to pay'},
];
const TopGoals = (props: inboxProp) => {
  const {onpress} = props;

  const [select, setSelect] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.Title}>Perfect! We just {"\n"}texted you a code.</Text>
      <Text style={styles.discription}>
        Tell us what you need. We’ll do the rest. Select all that apply.
      </Text>

      {data.map(item => (
        <View style={styles.selctorContainer}>
          <TouchableOpacity onPress={() => setSelect(item.name)}>
            <Image
              source={item.name == select ? Icon.check : Icon.uncheck}
              style={{
                ...styles.check,
                tintColor: item.name == select ? COLOR.primary : COLOR.gray_5,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.checkTitle}>{item.name}</Text>
        </View>
      ))}

      <View style={styles.buttonContainer} >
        <Buttons title={'Skip'} container={styles.SkipBtn} onpress={onpress} />
        <Buttons title={'Continue'}  container={styles.ContinueBtn} onpress={onpress} />
      </View>
      <Image source={Images.HubSparkLogo} style={styles.logo} />
      </ScrollView>
    </View>
  );
};
export default TopGoals;
