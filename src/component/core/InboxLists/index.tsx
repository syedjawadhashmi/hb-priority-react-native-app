import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {inboxListProp} from '../../../data/Types';
import {Icon} from '../../../assest';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const InboxLists = (props: inboxListProp) => {
  const {time, name, discription, title, onpress, tintcolor, select,to} = props;
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: select ? COLOR.gray_7 : COLOR.white1,
      }}
      onPress={onpress}>
      {select && (
        <Image
          source={Icon.Selector}
          style={{
            position: 'absolute',
            height: 80,
            resizeMode: 'center',
            width: 7,
          }}
        />
      )}
      <Image
        source={Icon.message}
        style={styles.Icon}
        tintColor={tintcolor && tintcolor}
      />
      <View style={styles.secondContainer}>
        <View style={{...commonStyles.verticleView}}>
          <Text style={{...styles.name,color:select?COLOR.perpal_3:COLOR.gray_5}}>{to&&to}{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Text style={{...styles.title,color:select?COLOR.black1:COLOR.gray_6}}>{title}</Text>

        <Text style={{...styles.discription,color:select?COLOR.black1:COLOR.gray_6}}>{discription}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default InboxLists;
