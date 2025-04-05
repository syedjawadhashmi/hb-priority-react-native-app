import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from './style';
import { COLOR, commonStyles } from '../../../../themes/StyleGuides';
import { CodeProp } from '../../../../data/Types';

const MissedCall = (props:CodeProp) => {
    const{onpress}=props
  return (
    <View style={styles.container}>
      <View style={styles.AmmountContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Missed Call Text Back</Text>
        </View>
        <View style={styles.TxetField} >
            <TextInput style={styles.textInput} />
        </View>


        <View style={{...commonStyles.horizontalView,alignSelf:"flex-end"}} >
          <TouchableOpacity
            style={{
              ...styles.GenerateKeyBtn,
              backgroundColor: COLOR.primary,
              marginBottom: '5%',
              marginRight: '5%',
              marginTop: '7%',
            }}>
            <Text style={{...styles.GenerateKeyText, color: COLOR.gray_5}}>
            Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={onpress}
            style={{
              ...styles.GenerateKeyBtn,
              backgroundColor: COLOR.primary,
              alignSelf: 'flex-end',
              marginBottom: '5%',
              marginRight: '5%',
              marginTop: '7%',
            }}>
            <Text style={{...styles.GenerateKeyText, color: COLOR.gray_5}}>
            Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default MissedCall;
