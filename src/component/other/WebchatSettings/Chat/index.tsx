import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ChatListprop} from '../../../../data/Types';
import styles from './style';
import {COLOR} from '../../../../themes/StyleGuides';

const Chat = (props: ChatListprop) => {
  const {item, index} = props;

  const firstTwoAlphabets = item.name.substring(0, 2);

  return (
    <View>
      <View
        style={[
          styles.MessageCard,
          {
            flexDirection: item?.type === 'receiver' ? 'row' : 'row-reverse',
          },
        ]}
        key={index}>
        <View>
          <TouchableOpacity
            style={
              item?.type === 'receiver'
                ? styles.MessageContainer
                : styles.MesgSenderContainer
            }>
            <Text
              style={
                item?.type === 'receiver'
                  ? styles.MessageLabel
                  : styles.MessageLabel2
              }>
              {item?.text}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: item?.type === 'receiver' ? 'row' : 'row-reverse',
            }}>
            <Text
              style={
                item?.type === 'receiver'
                  ? styles.timeSenderAndRacive
                  : styles.timeSenderAndRacive2
              }>
              {item?.time}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Chat;
