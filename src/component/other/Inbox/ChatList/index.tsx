import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {ChatListprop} from '../../../../data/Types';
import {COLOR, } from '../../../../themes/StyleGuides';
import { Icon } from '../../../../assest';

const ChatList = (props: ChatListprop) => {
  const {item, index} = props;

  const firstTwoAlphabets = item.name.substring(0, 2);

  return (
    <View key={index} style={{backgroundColor: COLOR.white1}}>
      {item.date && (
        <View style={styles.dateContainer}>
          <Text style={styles.dates}>{item.date}</Text>
        </View>
      )}

      
      <View
        style={[
          styles.MessageCard,
          {
            flexDirection: item?.type === 'receiver' ? 'row' : 'row-reverse',
          },
        ]}
        key={index}>
        <View
          style={{
            ...styles.name,
            backgroundColor:
              item?.type === 'receiver' ? COLOR.blue : COLOR.green,
          }}>
          <Text style={{fontSize: 12, fontWeight: '800', color: COLOR.whites}}>
            {firstTwoAlphabets}
          </Text>
        </View>

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
            <Image
              source={
                item?.type === 'receiver' ? Icon.ChatPart : Icon.ChatPart_2
              }
              style={
                item?.type === 'receiver' ? styles.ChatPart : styles.CatPart_1
              }
            />
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
export default ChatList;
